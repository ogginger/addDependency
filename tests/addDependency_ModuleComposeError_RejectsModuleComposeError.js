//addDependency_ModuleComposeError_RejectsModuleComposeError.js: Testing logic.

define([
	"addDependency",
	"promise"
], function(
	addDependency,
	promise
) {
	return {
		"Async": true,
		"Name":"addDependency_ModuleComposeError_RejectsModuleComposeError",
		"Input": {
			"FileName": "method.js",
			"Dependency": "Dependency",
			"Export": "Dependency",
			"__": {
				"file": {
					"get": function( Input ) {
						return promise(function( resolve, reject ) {
								resolve("define([], function() {});");
						});
					}
				},
				"Module": {
					"parse": function( Input ) {
						return this;
					},
					"compose": function( Input ) {
						throw { "Message": "Error: ModuleComposeError."};
					}
				}
			}
		},
		"Function": addDependency,
		"ExpectedOutput": { "Message": "Error: ModuleComposeError." },
		"Debug": false,
		"ExceptionTest": true
	};
});
