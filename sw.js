let staticCacheName = 'restaurant-v7';
let urls = [
  '/',
  'data/restaurants.json',
  'js/main.js',
  'js/restaurant_info.js',
  'js/dbhelper.js',
  'restaurant.html',
  'css/styles.css',
  'img/1.jpg',
  'img/2.jpg',
  'img/3.jpg',
  'img/4.jpg',
  'img/5.jpg',
  'img/6.jpg',
  'img/7.jpg',
  'img/8.jpg',
  'img/9.jpg',
  'img/10.jpg'
];

/* Create caches https://developer.mozilla.org/en-US/docs/Web/API/Cache/addAll */

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(staticCacheName).then(function(cache) {
    return cache.addAll(urls);
  }).catch(function(error) {
    console.log(error);
  })
);
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          return cacheName.startsWith('restaurant-') &&
          cacheName != staticCacheName;
        }).map(function(cacheName) {
          return caches.delete(cacheName); // remove the old cache
    })
  );
})
);
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});

/* reference here: https://www.oreilly.com/library/view/building-progressive-web/9781491961643/ch04.html */
