var should = require('chai').should(),
    cotd = require('../index'),
    mycontent = cotd.get;

describe('#mycontent', function() {
  it('check content', function() {
    mycontent().should.equal('Message of the day: Hello');
  });
});

