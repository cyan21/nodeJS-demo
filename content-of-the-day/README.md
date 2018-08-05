# Node module

## Description 

ultra simple Node module depending on quote-of-the-day module 

## How to 

### Unit test

```
npm install chai --save-dev
npm install mocha --save-dev
npm test
```

### Execute

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
### Build in Jenkins

Pre requisite for the job
- install JFrog CLI on your Jenkins and/or agents
- create a profile in the JFrog CLI to point to your Artifactory 
- [optional] Xray integration with Artifactory 
- [optional] Bintray account 
- job parameters to create :
	- ARTY_PROFILE : String 
	- SCAN_BUILD   : Boolean  
	- DISTRIBUTION : Boolean   
	- SRC_REPO     : String 
	- PROMOTE_REPO : String 
	- DISTRIB_REPO : String 

Load the Jenkinsfile
