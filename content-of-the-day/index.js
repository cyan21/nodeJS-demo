var thequote = require ('quote-of-the-day'),
    q = thequote.get();

module.exports = {
  get: function() {
    return String(q);
  }
};
