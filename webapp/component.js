sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel",
	"./controller/HelloDialog"
], function (
	UIComponent,
	JSONModel,
	ResourceModel,
	HelloDialog
) {
	"use strict";

	return UIComponent.extend("sap.ui.sap_walkthrough.component", {
		metadata: {
			manifest: "json"
		},
		init: function () {
			// call the init function of the parent
			UIComponent.prototype.init.apply(this, arguments);

			// set data model
			var Odata = {
				recipient: {
					name: "UI5"
				}
			};

			var oModel = new JSONModel(Odata);
			this.setModel(oModel);

			// Set i18n model on view
			// var i18nModel = new ResourceModel({
			// 	bundleName: "sap.ui.sap_walkthrough.i18n.i18n",
			// 	supportedLocales: [""],
			// 	fallbackLocale: ""
			// });
			// this.setModel(i18nModel, "i18n");

			// set dialog
			this._helloDialog = new HelloDialog(this.getRootControl());

			// create the view based on the url/hash
			this.getRouter().initialize();
		},
		
		exit: function () {
			this._helloDialog.destroy();
			delete this._helloDialog;
		},

		openHelloDialog: function () {
			this._helloDialog.open();
		}
	});
});