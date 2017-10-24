# Node module

## Description 

ultra simple Node module depending on quote-of-the-day module 

## How to 

Unit test

```
npm install chai --save-dev
npm install mocha --save-dev
npm test
```

Example

```
var express = require('express');
var app = express();
var fs = require("fs");
var cotd = require("content-of-the-day"),
    mycontent = cotd.get;

app.get('/getcontent', function (req, res) {
       console.log( mycontent() );
       res.end( mycontent() );
})

```
