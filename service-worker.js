// service-worker.js
const CACHE = 'planpdf-v4'; // bump this when you change assets

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

  // Only handle GETs
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  const sameOrigin = url.origin === location.origin;

  // Offline SPA fallback for navigations
  if (request.mode === 'navigate') {
    evt.respondWith(
      fetch(request).catch(() => caches.match('./index.html'))
    );
    return;
  }

  // Same-origin: cache-first (stale-while-revalidate)
  if (sameOrigin) {
    evt.respondWith(
      caches.match(request).then((hit) => {
        const fetchPromise = fetch(request).then((res) => {
          if (res && res.ok) {
            caches.open(CACHE).then((c) => c.put(request, res.clone()));
          }
          return res;
        });
        return hit || fetchPromise;
      })
    );
    return;
  }

  // Third-party (CDNs like jsDelivr, Google Fonts, Tailwind): network-first
  // so you get fresh libs when online, but still work offline.
  evt.respondWith(
    fetch(request)
      .then((res) => {
        if (res && res.ok) {
          caches.open(CACHE).then((c) => c.put(request, res.clone()));
        }
        return res;
      })
      .catch(() => caches.match(request))
  );
});
