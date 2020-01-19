//addDependency_dep_resolvesIfDependencyIsAdded.js: Testing logic.

define([
	"addDependency",
	"promise"
], function(
	addDependency,
	promise
) {
	return {
		"Async": true,
		"Name":"addDependency_dep_resolvesIfDependencyIsAdded",
		"Input": {
			"FileName": "method.js",
			"Dependency": "Dependency",
			"__": {
				"file": {
					"get": function( Input ) {
						return promise(function( resolve ) {
							resolve("define([],function() {});");
						});
					},
					"update": function() {
						return promise(function( resolve ) {
							resolve();
						});
					}
				},
				"Module": {
					"parse": function( Input ) {
						return this;
					},
					"compose": function( Input ) {
						return "define([\"Dependency\"],function(Dependency) {});";
					}
				}
			}						
		},
		"Function": addDependency,
		"ExpectedOutput": true,
		"Debug": false
	};
});
