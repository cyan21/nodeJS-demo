# Node module

## Description 

ultra simple Node module used by content-of-the-day module 
returns the content of a specific file

## How to 

### Unit test

``` 
npm install chai --save-dev
npm install mocha --save-dev
npm test
```


### Example

```
var thequote = require ('quote-of-the-day'),
    q = thequote.get();

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
