var should = require('chai').should(),
    qotd = require('../index'),
    theQuote = qotd.get;

describe('#theQuote', function() {
  it('check quote', function() {
    theQuote().should.equal('Hello');
  });
});

