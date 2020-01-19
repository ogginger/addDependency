//mergeExports.js: Merges two arrays or returns undefined if both Inputs are undefined.
define(function() {
    return function( Input ) {
        var xReturn = undefined;
        if (
            Array.isArray( Input.Target ) == false &&
            Input.Target != undefined
        ) {
            throw { message: "merge - Error: Input.Target was invalid."};
        } else if (
            typeof Input.Source != "string" &&
            Input.Source != undefined
        ) {
            throw { message: "merge - Error: Input.Source was invalid."};
        } else if (
            Input.Target &&
            Input.Source
        ) {
            xReturn = Input.Target.concat( Input.Source );
        } else if ( Input.Target == undefined ) {
            xReturn = [ Input.Source ];
        } else if ( Input.Source == undefined ) {
            xReturn = Input.Target;
        }

        return xReturn;
    };
});