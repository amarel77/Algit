sap.ui.define([
    'jquery.sap.global',
    'sap/m/library',
    'sap/m/Button',
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel',
    'sap/m/Dialog',
    'sap/m/MessageBox',
    'sap/m/MessageToast'
], function(jQuery, library, Button, Controller, JSONModel, Dialog, MessageBox, MessageToast) {
    "use strict";
    var CController = Controller.extend("sap.ui.demo.controller.Q1", {

        onInit: function() {
         
        },   
        
        onSubmit : function(){
        	var name = sessionStorage.getItem("x1");
            var oLabel = this.getView().byId("name");
            oLabel.setText(name);
        	var count = 0;
        	var ans = "Krypton";
        
        		var x = this.getView().byId("hai").getSelectedButton().getText();
        		if (x == ans){
        			count++;
        			sessionStorage.setItem("q1",count);
        		}
        		else{
        			sessionStorage.setItem("q1",count)
        		}
        	 this.getOwnerComponent().getTargets().display("Q2");
        },
        
        onAfterRendering: function() {
            var self = this;
            jQuery("input").on("keydown",
              function(evt) {
                if (evt.keyCode == 13) {
                  evt.preventDefault();
                  self.onSubmit(); 
                }
              });
     },
    });
});