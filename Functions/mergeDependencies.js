//mergeDependencies.js: Functional Logic.

define([], function() {
  return function( Input ) {
    //Input.Module
    //Input.Dependency
    return Input.Module.Dependencies ? 
    [ Input.Dependency ].concat( Input.Module.Dependencies ) :
    [ Input.Dependency ];
  };
});
