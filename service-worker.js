const cacheName = 'app-cache-v1';
const assets = [
  '/DevExCalculator/index.html',
  '/DevExCalculator/css/style.css',
  '/DevExCalculator/js/app.js',
  '/DevExCalculator/images/logo.png',
  '/DevExCalculator/images/logo.ico',
  '/DevExCalculator/manifest.json'
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
