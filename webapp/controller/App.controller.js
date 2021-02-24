sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/m/MessageToast',
    'sap/ui/model/json/JSONModel',
    'sap/ui/model/resource/ResourceModel'
], function (Controller,
    MessageToast,
    JSONModel,
    ResourceModel) {
    'use strict';

    return Controller.extend("sap.ui.sap_walkthrough.App", {
        onInit: function () {
            // // Set the data model on the view
            // var Odata = {
            //     recipient: {
            //         name: "UI5"
            //     }
            // };

            // var oModel = new JSONModel(Odata);
            // this.getView().setModel(oModel);

            // // Set i18n model on view
            // var i18nModel = new ResourceModel({
            //     bundleName: "sap.ui.sap_walkthrough.i18n.i18n",
            //     supportedLocales: [""],
            //     fallbackLocale: ""
            // });
            // this.getView().setModel(i18nModel, "i18n");
        }
    })
});