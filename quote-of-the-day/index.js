fs = require('fs');

module.exports = {
  get: function() {
    var res = fs.readFileSync( __dirname + "/heavensgate.js", 'utf8'); 
    console.log(res);
    return res;
  }
};
