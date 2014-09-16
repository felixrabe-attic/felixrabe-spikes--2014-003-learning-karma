// var assert = require('chai').assert;

var assert = chai.assert;

describe('Calculator', function() {

  it('should add', function() {
    assert.equal(5, calculator.add(2, 3));
    assert.equal(-2, calculator.add(-1, -1));
  });

});
