//bDependencyExists.js: Checks if a dependency is present in a module.
define([], function() {
    return function( Input ) {
        return Input.Module.Dependencies ? 
        Input.Module.Dependencies.includes( Input.Dependency ) : false;
    };    
});