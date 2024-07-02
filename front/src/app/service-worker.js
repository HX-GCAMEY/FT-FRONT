const cacheName = "serviceWorker";

self.addEventListener("fetch", function (event) {
  if (event.request.method !== "GET") {
    event.respondWith(
      //entro al cache
      caches.open(cacheName).then(function (cache) {
        // si la info esta en el cache la devuelvo
        return cache.match(event.request.url).then(function (response) {
          return (
            response ||
            //sino busco en la red y guardo en el cache
            fetch(event.request).then(function (response) {
              cache.put(event.request, response.clone());
              return response;
            })
          );
        });
      })
    );
  }
});
