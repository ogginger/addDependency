//test_addDependency.js: Testing Logic.

define([
  "TestSuite",
  "log",
  "addDependency",
  "tests/addDependency_dep_resolvesIfDependencyIsAdded",
  "tests/addDependency_FileDoesNotExist_RejectsErrorFileDoesNotExist",
  "tests/addDependency_ModuleParseError_RejectsModuleParseError",
  "tests/addDependency_ModuleComposeError_RejectsModuleComposeError",
  "tests/addDependency_FileUpdateError_RejectsFileUpdateError"
], function(
  TestSuite,
  log,
  addDependency,
  addDependency_dep_resolvesIfDependencyIsAdded,
  addDependency_FileDoesNotExist_RejectsErrorFileDoesNotExist,
  addDependency_ModuleParseError_RejectsModuleParseError,
  addDependency_ModuleComposeError_RejectsModuleComposeError,
  addDependency_FileUpdateError_RejectsFileUpdateError
) {
  return TestSuite.extend({
    "initialize": function() {
      log("test_addDependency initialized successfully!");
      var xTestSuite = this;
      xTestSuite.set( "MethodUnderTest", "addDependency" );
        //xTestSuite.add( addDependency_dep_resolvesIfDependencyIsAdded );
	      //xTestSuite.add( addDependency_FileUpdateError_RejectsFileUpdateError );
	      //?? How to address this?xTestSuite.add( addDependency_ModuleComposeError_RejectsModuleComposeError );
	      //?? How to address this?xTestSuite.add( addDependency_ModuleParseError_RejectsModuleParseError );
        //xTestSuite.add(addDependency_FileDoesNotExist_RejectsErrorFileDoesNotExist); 
      xTestSuite.test();
    }
  });
});
