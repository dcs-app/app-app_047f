/* DCS-PWA-ADDALL-SAFE — one missing precache URL must not fail SW install */
try{if(self.Cache&&self.Cache.prototype&&self.Cache.prototype.addAll){var _dcsAddAll=self.Cache.prototype.addAll;self.Cache.prototype.addAll=function(u){var self2=this;return Promise.allSettled((u||[]).map(function(x){return self2.add(x).catch(function(){})})).then(function(){})}}}catch(_e){}
/*  Service Worker for Aurelia Home PWA
    Caches static assets (HTML, CSS, JS, images) for offline use.
    Updates cache when a new version is detected.
*/

const CACHE_NAME = 'aurelia-home-v1';
const ASSETS_TO_CACHE = [
  '/',                     // root
  '/index.html',
  '/shop-all.html',
  // add all other HTML pages (generated automatically)
  '/style.css',
  '/sw-register.js',
  '/manifest.json',
  // icons
  '/icons/icon-48.png',
  '/icons/icon-96.png',
  '/icon.svg',
  '/icon.svg',
  // any other static assets (fonts, images) can be added here
];

// Install – cache core assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS_TO_CACHE))
  );
});

// Activate – clean old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      )
    )
  );
});

// Fetch – serve from cache, fall back to network
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return; // only cache GET requests

  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      // Return cached response if found, otherwise fetch from network
      return cachedResponse || fetch(event.request).then(networkResponse => {
        // Cache the new response for future visits
        return caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        });
      });
    }).catch(() => {
      // Optional: fallback page when offline and not cached
      return caches.match('/offline.html');
    })
  );
});