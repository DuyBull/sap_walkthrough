sap.ui.define([
	// "sap/ui/base/ManagedObject"
], function(
	ManagedObject
) {
	"use strict";

	// return ManagedObject.extend("sap.ui.sap_walkthrough.model.formatter", {
	// });
	return {
		statusText: function (sStatus) {
			var resourceBundle = this.getView().getModel("i18n").getResourceBundle();
			switch (sStatus) {
				case "A":
					return resourceBundle.getText("invoiceStatusA");
				case "B":
					return resourceBundle.getText("invoiceStatusB");
				case "C":
					return resourceBundle.getText("invoiceStatusC");
				default:
					return sStatus;
			}
		}
	}
});