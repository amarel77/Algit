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
    var CController = Controller.extend("sap.ui.demo.controller.Q2", {

        onInit: function() {
      
        },   
        
        onSubmit : function(){
        	   var name = sessionStorage.getItem("x1");
               var oLabel = this.getView().byId("name");
               oLabel.setText(name);
        	var c2 = sessionStorage.getItem("q1");
        	var ans = "Nidavellir";
        	for(var j = 1; j<=4; j++){
        		
        		var id = j.toString();
        		var x = this.getView().byId(id).getText();
        		var y = this.getView().byId(id).mProperties.selected;
        		if(y == true){sessionStorage.setItem("a2",x);}
        		if (x == ans && y == true){
        			
        			c2++;
        			sessionStorage.setItem("q2",c2)
        			
        		}
        		
        		else{
        			sessionStorage.setItem("q2",c2)
        		}
        		
        	}
        	this.getOwnerComponent().getTargets().display("Q3");
        }
    });
});