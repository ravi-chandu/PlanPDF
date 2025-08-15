// service-worker.js
const CACHE = 'ondevicepdf-v1'; // was planpdf-v4

// Precache only your own static files. Runtime-cache the CDNs below.
const ASSETS = [
  './',
  './index.html',
  './logo.png',
  './manifest.json',
];

self.addEventListener('install', (evt) => {
  self.skipWaiting();
  evt.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)));
});

self.addEventListener('activate', (evt) => {
  evt.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (evt) => {
  const { request } = evt;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  const sameOrigin = url.origin === location.origin;

  if (request.mode === 'navigate') {
    evt.respondWith(fetch(request).catch(() => caches.match('./index.html')));
    return;
  }

  if (sameOrigin) {
    evt.respondWith(
      caches.match(request).then((hit) => {
        const fetchPromise = fetch(request).then((res) => {
          if (res && res.ok) caches.open(CACHE).then((c) => c.put(request, res.clone()));
          return res;
        });
        return hit || fetchPromise;
      })
    );
    return;
  }

  evt.respondWith(
    fetch(request)
      .then((res) => {
        if (res && res.ok) caches.open(CACHE).then((c) => c.put(request, res.clone()));
        return res;
      })
      .catch(() => caches.match(request))
  );
});
