var towerInterpolationDirective = 'undefined' == typeof window
  ? require('..')
  : require('tower-interpolation-directive'); // how to do this better?

var assert = require('assert');

describe('towerInterpolationDirective', function(){
  it('should test', function(){
    assert.equal(1 + 1, 2);
  });
});
