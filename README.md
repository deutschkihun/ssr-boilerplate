# Server side rendering (SSR) 
> Server side rendering is the process of taking a client-side javascript framework website and rendering it to static HTML and CSS on the server. 
Why is this important ? We want fast loading websites and SSR is a tool to help you get your website rendered faster. 
How faster the browser renders your app depends on how you build it. Because with server side rendering we can generate the HTML on the server send that down to the browser. 

## Structure

> This project consists of following file structure. 


    * controllers: controlling different endpoints (URIS) by find,query ... 
    
    * db: database connection file by using mongoose.connection()
    
    * error: custom error handling file by extending from "Error" class.
    
    * middleware: It has access to the request object (req), the response object (res), 
      and the next middleware function in the application’s request-response cycle. 
    
    * models: Mongo DB Schema file. This file will be used to build a collection(table) in database. 
    
    * routes: Routing refers to determining how an application responds to a client request to a particular endpoint, 
      which is a URI (or path) and a specific HTTP request method (GET, POST, and so on).
    
    * .env: environmentent variable file. This file contains MONGO_URI for mongodb connection. This file has to be secured.
      Therefore, make sure that this file should not be pushed in to remote branch. (Always be a member of gitignore) 
    
    * app.js: project starting file. If you run this project, app.js will be executed first. 
    
reference
* https://www.youtube.com/watch?v=8_RzRQXSHcg
* https://www.youtube.com/watch?v=GQzn7XRdzxY
* https://www.youtube.com/watch?v=NwyQONeqRXA
