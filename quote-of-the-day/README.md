# Node module

## Description 

ultra simple Node module used by content-of-the-day module 
returns the content of a specific file

## How to 

Unit test

``` 
npm install chai --save-dev
npm install mocha --save-dev
npm test
```


Example

```
var thequote = require ('quote-of-the-day'),
    q = thequote.get();

```
