const cacheName = 'app-cache-v1';
const assets = [
  '/index.html',
  '/css/styles.css',
  '/js/devex.js',
  '/images/icon-192.png',
  '/images/icon-512.png',
  '/images/logo.ico',
  '/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(async (cache) => {
      try {
        await cache.addAll(assets);
        console.log('✅ All assets cached successfully');
      } catch (err) {
        console.error('❌ Cache addAll failed:', err);
      }
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
