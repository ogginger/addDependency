//addDependency_FileDoesNotExist_RejectsErrorFileDoesNotExist.js: Testing logic.

define([
	"addDependency",
	"promise"
], function(
	addDependency,
	promise
) {
	return {
		"Async": true,	
		"Name":"addDependency_FileDoesNotExist_RejectsErrorFileDoesNotExist",
		"Input": {
			"FileName": "doesnotexist",
			"__": {
				"file": { 
					"get": function( Input ) {
						return promise(function( resolve, reject ) {
							reject({ "Message": "Error: File Does Not Exist." });
						});
					}
				}
			}
		},
		"Function": addDependency,
		"ExpectedOutput": { "Message": "Error: File Does Not Exist." },
		"Debug": false,
		"ExceptionTest": true
	};
});
