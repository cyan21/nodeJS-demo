# Node server 

## Description 

Node server hosting an API (JSON) and a front end (AngularJS + JQuery) 


## How to 

Pre requisite

* install NPM and NodeJS
* install fs, express and content-of-the-day modules 



Start the node server

```
npm install
node server.js
```

Queries from your browser

```
// access front end
http://<HOST_IP>:8081/index.html


// API : display users.json
http://<HOST_IP>:8081/listusers


// API : display returned valued from qotd module 
http://<HOST_IP>:8081/getcontent
```

> you can change the running port in the server.js
