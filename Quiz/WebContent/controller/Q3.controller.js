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
    var CController = Controller.extend("sap.ui.demo.controller.Q3", {

        onInit: function() {
        
        },   
        
        onSubmit : function(){
        	 var name = sessionStorage.getItem("x1");
             var oLabel = this.getView().byId("name");
             oLabel.setText(name);
        	var c3 = sessionStorage.getItem("q2");
        	var ans = "Veronica";
        	for(var j = 1; j<=4; j++){
        		var id = j.toString();
        		var x = this.getView().byId(id).getText();
        		var y = this.getView().byId(id).mProperties.selected;
        		if(y == true){sessionStorage.setItem("a3",x);}
        		if (x == ans && y == true){	
        			c3++;
        			sessionStorage.setItem("q3",c3);	
        		}
        			
        		else
        			{
        			sessionStorage.setItem("q3",c3)
        			}
        	}
        	this.getOwnerComponent().getTargets().display("Q4");
        },
        
       
        
    });
});