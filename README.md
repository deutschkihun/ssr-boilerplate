# Server side rendering (SSR) 
> Server side rendering is the process of taking a client-side javascript framework website and rendering it to static HTML and CSS on the **server**. 
SSR is very useful for fast loading (rendering) websites. By using SSR, HTML will be generated on the server and send that donw to the browser. SSR is 
for MPA (multi page apps) which means that each page is rendered on the server, not on the client. 


# SSR vs CSR (Client side rendering) 

SSR 

    * Serving up a new HTML document on each request by server
    
    * loading and parsing CSS to the UI
   
    * loading and parsing deferred (postpone) JavaScript by server
    
    * Router natigates user to the new rendered page
    
    * Cacheing assets (CSS,JS,img) for faster page load by browser
    
    * Server cache static HTML on a CDN for loading time

![1_jJkEQpgZ8waQ5P-W5lhxuQ](https://user-images.githubusercontent.com/45092135/141682701-57d84dfa-f90c-4974-bdc3-ac62e86cb8af.png)

CSR

    * SPA (single page apps) which means that each page is rendered on the client, not on the server
 
    * Serving up a single static **index.html** document by server

    * Parsing and loading HTML,CSS, Img, and JS 

    * JS bundle, construct DOM 
 
    * heavy JS dependency 

![1_CRiH0hUGoS3aoZaIY4H2yg](https://user-images.githubusercontent.com/45092135/141682696-ecaa9850-c3e9-4aff-9b3e-2bb8d966bd82.png)


    
reference
* https://www.youtube.com/watch?v=8_RzRQXSHcg
* https://www.youtube.com/watch?v=GQzn7XRdzxY
* https://www.youtube.com/watch?v=NwyQONeqRXA
* https://medium.com/walmartglobaltech/the-benefits-of-server-side-rendering-over-client-side-rendering-5d07ff2cefe8
* https://www.youtube.com/watch?v=GQzn7XRdzxY
