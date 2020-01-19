//addDependency_FileUpdateError_RejectsFileUpdateError.js: Testing logic.

define([
	"addDependency",
	"promise"
], function(
	addDependency,
	promise
) {
	return {
		"Async": true,
		"Name":"addDependency_FileUpdateError_RejectsFileUpdateError",
		"Input": {
			"FileName": "method.js",
			"Dependency": ["Dependency"],
			"Export": ["Dependency"],
			"__": {
				"file": {
					"get": function( Input ) {
						return promise(function( resolve ) {
							resolve("define([], function() {});");
						});
					},
					"update": function( Input ) {
						return promise(function( resole, reject ) {
							reject({
								"Message": "Error: FileUpdateError."
							});
						});
					}
				},
				"Module": {
					"parse": function( Input ) {
						return this;
					},
					"compose": function() {
						return "define([Dependency],function(Dependency) {});";
					}
				}
			}
		},
		"Function": addDependency,
		"ExpectedOutput": { "Message": "Error: FileUpdateError." },
		"ExceptionTest": true,
		"Debug": false
	};
});
