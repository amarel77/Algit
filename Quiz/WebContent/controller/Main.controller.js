sap.ui.define([
    'jquery.sap.global',
    'sap/m/library',
    'sap/m/Button',
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel',
    'sap/m/Dialog',
    'sap/m/MessageBox',
    'sap/m/MessageToast',
    'sap/ui/core/message/Message',
    'sap/ui/core/MessageType'
], function(jQuery, library, Button, Controller, JSONModel, Dialog, MessageBox, MessageToast, Message, MessageType) {
    "use strict";
    var CController = Controller.extend("sap.ui.demo.controller.Main", {

        onInit: function() {
        
        },
        
        onStart : function(){
        	var name = this.getView().byId("uname").getValue();
        	sessionStorage.setItem("x1",name);
        	if(name == ""){
            var oMessage = new Message({
                message: "My generated error message",
                type: MessageType.Error,
                target: "/Dummy",
                processor: this.getView().getModel()
            });
            sap.ui.getCore().getMessageManager().addMessages(oMessage);
        	}
        	else{
        		
        		 this.getOwnerComponent().getTargets().display("Q1");
        	}
        },
        
        onAfterRendering: function() {
            var self = this;
            jQuery("input").on("keydown",
              function(evt) {
                if (evt.keyCode == 13) {
                  evt.preventDefault();
                  self.onStart(); //your code
                }
              });
     },

    });
});