sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
], function(UIComponent, JSONModel) {
    "use strict";
    return UIComponent.extend("sap.ui.demo.component", {
        metadata: {
            manifest: "json"
        },
        init: function() {
            UIComponent.prototype.init.apply(this, arguments);

            // set dialog
            //	this.helloDialog = new HelloDialog();
            // create the views based on the url/hash
            this.getRouter().initialize();
        }
    });

});