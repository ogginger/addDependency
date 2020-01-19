//addDependency_ModuleParseError_RejectsModuleParseError.js: Testing logic.

define([
	"addDependency",
	"promise"
], function(
	addDependency,
	promise
) {
	return {
		"Async": true,
		"Name":"addDependency_ModuleParseError_RejectsModuleParseError",
		"Input": {
			"FileName": "method.js",
			"__": {
				"file": {
					"get": function( Input ) {
						return promise(function( resolve, reject ) {
							resolve("define();");
						});
					}
				},
				"Module": {
					"parse": function( Input ) {
						throw { "Message": "Error: ModuleParseError." };
					}
				}
			}
		},
		"Function": addDependency,
		"ExpectedOutput": { "Message": "Error: ModuleParseError." },
		"ExceptionTest": true
	};
});
