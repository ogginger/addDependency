//addDependency.js: Functional Logic.

define([
	"promise",
	"Module",
	"file",
	"mergeExports",
	"validate",
	"addDependencyValidation",
	"bDependencyExists",
	"bExportExists",
	"mergeDependencies"
], function(
	promise,
	Module,
	file,
	mergeExports,
	validate,
	addDependencyValidation,
	bDependencyExists,
	bExportExists,
	mergeDependencies
) {
  return function( Input ) {
	validate({
		"Data": Input,
		"Validation": addDependencyValidation
	})
	
	//Check if that dependency already exists.
	return promise(function( resolve, reject ) {
		//Get the file.
		file.get(Input.FileName).then(function( Body ) {
			//Parse the Module.
			//Compose the module with the new dependency and exports.
			//Update the file.
			
			var xModule = Module().parse( Body );

			if( bDependencyExists({
				"Dependency": Input.Dependency,
				"Module": xModule
			})) {
				throw { message: "Error: That dependency already exists." }
			} else if (
				Input.Export &&
				bExportExists({
					"Module": xModule,
					"Export": Input.Export
				})
			) {
				throw { message: "Error: That export already exists." }
			}

			return file.update({
				"Name": Input.FileName,
				"Body": xModule.compose({
					"Dependencies": mergeDependencies({
						"Module": xModule,
						"Dependency": Input.Dependency
					}),
					"Exports": mergeExports({
						"Target": xModule.Exports,
						"Source": Input.Export
					})
				})
			});	
		}).then(function() {
			resolve(true);
		}).catch(function( error ) {
			reject( error );
		});
	});
  };
});
