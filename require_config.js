//require_config.js: Requirejs configuration.

module.exports = {
	nodeRequire: require,
	baseUrl: "addDependency",
	paths: {
		"rsvp": "../lib/rsvp.min",
		"backbone": "../lib/backbone.min",
		"underscore": "../lib/underscore.min",
		"Module": "Models/Module/Module",
		"parse": "Models/Module/Functions/parse/parse",
		"validate": "Models/Module/lib/validate.min",
		"parseValidation": "Models/Module/Functions/parse/parseValidation",
		"compose": "Models/Module/Functions/compose/compose",
		"composeValidation": "Models/Module/Functions/compose/composeValidation",
		"file": "lib/file/file.min",
		"mergeExports": "Functions/mergeExports",
		"bDependencyExists": "Functions/bDependencyExists",
		"bExportExists": "Functions/bExportExists",
		"mergeDependencies": "Functions/mergeDependencies"
	},
        bundles: {
		"../lib/log.min": [ "log" ],
		"../lib/snip.min": [ "Snip" ],
		"../lib/file.min": [ "file" ],
                "../lib/promise.min": [ "promise" ],
		"../lib/testsuite.min": [ "TestSuite" ]
	},
	suppress: {
		nodeShim: true
	},
	shim: {
		"underscore": {
			deps: [
				"jquery"
			],
			exports: "_"
		},
		"backbone": {
			deps: [
				"underscore"
			],
			exports: "Backbone"
		},
		"file": {
			deps: [
				"fs",
				"rsvp"
			],
			exports: "file"
		},
		"Snip": {
			deps: [
				"file",
				"backbone"
			],
			exports: "Snip"
		},
		"promise": {
                        deps: [
                                "rsvp"
                        ],
                        exports: "promise"
                },
		"TestSuite": {
			deps: [
				"backbone",
				"rsvp"
			],
			exports: "TestSuite"
		}
	}
};
