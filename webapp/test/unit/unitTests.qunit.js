/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"sap/ui/sap_walkthrough/test/unit/model/formatter"
	], function () {
		QUnit.start();
	});
});

/*global QUnit, opaTest*/
// sap.ui.define([
// 	"sap/ui/sap_walkthrough/localService/mockserver",
// 	"sap/ui/test/opaQunit",
// 	"./pages/App"
// ], function (mockserver) {
// 	"use strict";

// 	QUnit.module("Navigation");

// 	opaTest("Should open the Hello dialog", function (Given, When, Then) {
// 		// initialize the mock server
// 		mockserver.init();

// 		// Arrangements
// 		Given.iStartMyUIComponent({
// 			componentConfig: {
// 				name: "sap.ui.sap_walkthrough"
// 			}
// 		});

// 		//Actions
// 		When.onTheAppPage.iPressTheSayHelloWithDialogButton();

// 		// Assertions
// 		Then.onTheAppPage.iShouldSeeTheHelloDialog();

// 		// Cleanup
// 		Then.iTeardownMyApp();
// 	});
// });