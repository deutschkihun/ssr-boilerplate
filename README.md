# Server side rendering (SSR) 
> Server side rendering is the process of taking a client-side javascript framework website and rendering it to static HTML and CSS on the **server**. 
SSR is very useful for fast loading (rendering) websites. SSR is for MPA (multi page apps) which means that each page is rendered on the server, not on the client. In other words, we called Isomorphic or Universal


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

![Screenshot 2022-01-30 at 14 40 37](https://user-images.githubusercontent.com/45092135/151712069-e6503348-bab0-41ee-85f5-975bb700e1c7.png)


# Benefit of SSR 

    * Improve SEO (search engine optimization)
    
    * Faster loading time
    
# How to start this app 

 ```bash
 $ npm run ssr : redering app by server 
 ```

This command will call babel hook "register" 

when rendering process happens in server side, then preview after networking looks like this

![Screenshot 2022-01-29 at 21 37 56](https://user-images.githubusercontent.com/45092135/151676828-c88f8824-0f56-4daa-b448-2ac6cfcfed67.png)

This is when server side rendering works successfully.




# Related Content

## Critical Rendering Path

> The Critical Rendering Path is the sequence of steps the browser goes through to convert the HTML, CSS, and JavaScript into pixels on the screen. 
Optimizing the critical render path improves render performance. The critical rendering path includes the Document Object Model (DOM), CSS Object Model (CSSOM), render tree and layout.

## Web page build process

   * Constructing Document Object Model (DOM)tree 
      * DOM: Object-model based representation of HTML documents. It is depicted as a node tree, not as a html document.
      * DOM tree: Object-model based representation of **fully parsed** HTML documents.
      * Parsing: Process of decomposing a series of strings or text into tokens and analysing the relationship between them.
 
   * Constructing CSSOM (CSS Object Model)tree 
      * CSSOM: Style associated with DOM, CSS must be fully parsed because of inherit cascading nature.
      * CSSOM + DOM = Render Tree, Render Tree cannot be constructed without fully parsed resource. 
      
   * Running Javascript (by script tag) 
   * Creating Render tree 
      * Tree that represents what will be rendered on the page. It means, if there is something which will not be included in the viewport, 
       it will be excluded from Render Tree. Such as html tag with CSS properties (display:none), this one will not be included in Render Tree

   * Generating the Layout 
      * Calculating the size and position of each visible element on the page by meta tag

   * Painting 
      * Painting the pixels to the screen

    
reference
* https://www.youtube.com/watch?v=8_RzRQXSHcg
* https://www.youtube.com/watch?v=GQzn7XRdzxY
* https://www.youtube.com/watch?v=NwyQONeqRXA
* https://medium.com/walmartglobaltech/the-benefits-of-server-side-rendering-over-client-side-rendering-5d07ff2cefe8
* https://www.youtube.com/watch?v=GQzn7XRdzxY
* https://babeljs.io/docs/en/babel-register/
