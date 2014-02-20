
/**
 * Module dependencies.
 */

// commented out by npm-component: var directive = require('tower-directive');

/**
 * Expose `directive('interpolation')`.
 */

module.exports = directive('interpolation').compiler(interpolationDirective);

/**
 * Define interpolation directive compiler.
 */

function interpolationDirective(el, attr) {
  var val = el.nodeValue;
  var expressions = {};
  val.replace(/\{\{([^\{\}]+)\}\}/g, function(_, $1){
    // XXX: probably do more here.
    expressions[$1] = true;
  });

  function exec(scope, el, attr) {
    el.nodeValue = val.replace(/\{\{([^\{\}]+)\}\}/g, function(_, $1){
      return scope.get($1);
    });
  }

  return exec;
}