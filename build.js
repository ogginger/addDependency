//build.js: Configuration file for optimizing the ifSetup function. 
/*
*/ 
({
    paths: {
	    "underscore": "lib/underscore.min",
		"Module": "Models/Module/Module",
		"parse": "Models/Module/Functions/parse/parse",
		"validate": "Models/Module/lib/validate.min",
		"parseValidation": "Models/Module/Functions/parse/parseValidation",
		"compose": "Models/Module/Functions/compose/compose",
		"composeValidation": "Models/Module/Functions/compose/composeValidation",
        "file": "lib/file/file.min",
        "promise": "lib/promise.min",
        "rsvp": "lib/rsvp.min",
        "fs": "empty:",
        "log": "lib/log.min"
    },
    exclude: [ "underscore", "validate", "file", "promise", "rsvp", "fs", "log" ],
    name: "addDependency",
    out: "add_dependency.min.js"
})
