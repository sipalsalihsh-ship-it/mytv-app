const CACHE_NAME = 'mytv-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json'
];

// دامەزراندنی سرویس وۆرکەر و هەڵگرتنی فایلی سەرەکی
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// وەڵامدانەوەی داواکارییەکان
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});