/* eslint-disable */
var RhinoModule = (function() {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  
  return (
function(RhinoModule) {
  RhinoModule = RhinoModule || {};



  return RhinoModule.ready
}
);
})();
if (typeof exports === 'object' && typeof module === 'object')
  module.exports = RhinoModule;
else if (typeof define === 'function' && define['amd'])
  define([], function() { return RhinoModule; });
else if (typeof exports === 'object')
  exports["RhinoModule"] = RhinoModule;