const CACHE = "planpdf-v1";
const ASSETS = [
  "./",
  "./index.html",
  "./logo.png",
  "./manifest.json",
  "https://cdn.tailwindcss.com",
  "https://cdn.jsdelivr.net/npm/pdf-lib@1.17.1/dist/pdf-lib.min.js",
  "https://cdn.jsdelivr.net/npm/file-saver@2.0.5/dist/FileSaver.min.js",
  "https://cdn.jsdelivr.net/npm/jszip@3.10.1/dist/jszip.min.js",
  "https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((hit) => 
      hit || fetch(e.request).then((resp) => {
        const copy = resp.clone();
        const type = (copy.headers.get("content-type") || "");
        if (
          e.request.method === "GET" &&
          copy.ok &&
          /(javascript|wasm|css|image|font|html)/.test(type)
        ) {
          caches.open(CACHE).then((c) => c.put(e.request, copy));
        }
        return resp;
      }).catch(() => caches.match("./index.html"))
    )
  );
});
