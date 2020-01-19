//bExportExists.js: Functional Logic.

define([], function() {
  return function( Input ) {
    return Input.Module.Exports ? Input.Module.Exports.includes( Input.Export ) : false;
  };
});
