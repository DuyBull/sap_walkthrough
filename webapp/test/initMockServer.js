sap.ui.define([
	// "sap/ui/base/ManagedObject"
    "./localService/mockServer"
], function(
	// ManagedObject
    mockServer
) {
	"use strict";

	// return ManagedObject.extend("sap.ui.sap_walkthrough.test.initMockServer", {
	// });

    // initilize the mock server
    mockServer.init();

    // initialize the embedded component of the HTML page
    sap.ui.require(["sap/ui/core/ComponentSupport"]);
});