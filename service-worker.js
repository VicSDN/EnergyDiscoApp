const CACHE_NAME = 'mi-pwa-cache-v1';

const urlsToCache = [
  '/', 
  'index.html',
  'style.css',
  'app.js',
  'carta.json',
  'imagenes/logo-discoteca.png',
  'iconos/icono-192.png',
  'iconos/icono-512.png'  
];

self.addEventListener('install', event => {
  console.log('Service Worker: Instalando...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Service Worker: Abriendo caché y guardando archivos principales');
        return cache.addAll(urlsToCache);
      })
      .catch(err => {
        console.error('Falló el cacheo de archivos durante la instalación:', err);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          console.log('Service Worker: Sirviendo desde la caché:', event.request.url);
          return response;
        }
        console.log('Service Worker: Sirviendo desde la red:', event.request.url);
        return fetch(event.request);
      })
      .catch(err => {
        console.error('Error al hacer fetch:', err);
      })
  );
});

self.addEventListener('activate', event => {
  console.log('Service Worker: Activando...');
  const cacheWhitelist = [CACHE_NAME]; 

  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            console.log('Service Worker: Borrando caché antigua:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('energy-cache').then((cache) =>
      cache.addAll([
        '/',
        '/index.html',
        '/style.css',
        '/app.js',
        '/imagenes/logo-discoteca.png',
        '/iconos/icono-192.png',
        '/iconos/icono-512.png',
      ])
    )
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
