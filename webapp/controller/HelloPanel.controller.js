sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/core/Fragment"
], function(Controller, MessageToast, Fragment) {
    'use strict';
    
    return Controller.extend("sap.ui.sap_walkthrough.controller.HelloPanel", {
        onShowHello: function () {
            // Show a native or vanilla JS alert
            // alert("Hello There!");

            // read msg from i18n Model
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var sRecipient = this.getView().getModel().getProperty("/recipient/name");
            var sMsg = oBundle.getText("helloMsg", [sRecipient]);

            // show msg
            MessageToast.show(sMsg);
            // MessageToast.show("Hello There!")
        },
        onOpenDialog: function () {
            var oView = this.getView();

            // Create the dialog lazily
            if (!this.byId("helloDialog")) {
                // load asynchronous XML
                Fragment.load({
                    id: oView.getId(),
                    name: "sap.ui.sap_walkthrough.view.HelloDialog",
                    controller: this
                }).then(function(oDialog) {
                    // connect dialog to the root view of this component (model, lifecycle)
                    oView.addDependent(oDialog);
                    oDialog.open();
                })
            } else {
                this.byId("helloDialog").open();
            }
        },
        onCloseDialog: function () {
            this.byId("helloDialog").close();
        }
    })
});