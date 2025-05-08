const cacheName = 'app-cache-v1';
const assets = [
  './',
  './index.html',
  './css/style.css',
  './js/app.js',
  './images/logo.png',
  './images/logo.ico',
  './manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(assets))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
