const CACHE = 'ondevicepdf-v1';
const ASSETS = [
  '/', '/index.html',
  '/logo.png', '/manifest.json',
  '/icon-192.png', '/icon-512.png',
  '/og-image.png'
];

self.addEventListener('install', (evt) => {
  self.skipWaiting();
  evt.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});

self.addEventListener('activate', (evt) => {
  evt.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (evt) => {
  const { request } = evt;
  if (request.method !== 'GET') return;

  // Network-first for navigations, cache-first for static assets
  if (request.mode === 'navigate') {
    evt.respondWith(fetch(request).catch(() => caches.match('/index.html')));
    return;
  }

  evt.respondWith(
    caches.match(request).then(hit => {
      const fetchPromise = fetch(request).then(res => {
        if (res && res.ok) caches.open(CACHE).then(c => c.put(request, res.clone()));
        return res;
      }).catch(() => hit);
      return hit || fetchPromise;
    })
  );
});
