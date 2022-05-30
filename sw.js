const codes = "codee"
const assets =[
    "/",
    "/index.html",
    "/style.css",
    "/app.js",
    
]

self.addEventListener(("install"),(installEvent)=>{
    installEvent.waitUntil(
        caches.open(codes).then((cache) => {
            cache.addAll(assets).then().catch();
        })
        .catch((err)=>{
            console.log(err);
        })
        
        )
})
//window.alert("ahmed");
self.addEventListener("activate", (activateEvent)=>{
    
 activateEvent.waitUntil(
        caches.keys().then((keys) => {
           console.log(keys);
             return Promise.all(
                 keys.filter((key) => key !=codes)
                .map((key)=> caches.delete(key))
                
            )
       })
       
 )
          
   
})
self.addEventListener(("fetch"),(fetchEvent)=>{
    //console.log(fetchEvent);
    if (!(fetchEvent.request.url.indexOf('http') === 0)) return;
     // skip the request. if request is not made with http protocol
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then((res)=>{
            return res || fetch(fetchEvent.request).then((fetchers) =>{ 
            return    caches.open(codes).then((cache)=>{
                   cache.put(fetchEvent.request, fetchers.clone())
                   return fetchers; 
                   
                   
               })
            });
        })
    )
    


})
//00000
//00000 

