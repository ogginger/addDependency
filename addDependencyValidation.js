//addDependencyValidation.js: Data validation for the addDependency function.

define([], function() {
    return [
        function( Input ) {
            if ( Input.Dependency == undefined ) {
                throw { message: "addDependency - Error: The input 'Dependency' was not defiend." };
            }
        }
    ];
});