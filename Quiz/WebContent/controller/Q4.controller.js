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
    var CController = Controller.extend("sap.ui.demo.controller.Q4", {

        onInit: function() {
       
        },  
        
        getEventBus: function() {
            return sap.ui.getCore().getEventBus();
        },
        
        onSubmit : function(){
        	  var name = sessionStorage.getItem("x1");
              var oLabel = this.getView().byId("name");
              oLabel.setText(name);
        	var c4 = sessionStorage.getItem("q3");
        	var ans = "Time";
        	for(var j = 1; j<=4; j++){
        		
        		var id = j.toString();
        		var x = this.getView().byId(id).getText();
        		var y = this.getView().byId(id).mProperties.selected;
        		if(y == true){sessionStorage.setItem("a4",x);}
        		if (x == ans && y == true){	
        			c4++;
        			sessionStorage.setItem("q4",c4);	
        		}
        			
        		else{
        			sessionStorage.setItem("q4",c4);
        		}
        	}
        	//this.getOwnerComponent().getRouter().getRoute("Result").attachPatternMatched(Evt, this);
        	sap.ui.getCore().getEventBus().publish("Q4", "onSubmit");
        	this.getOwnerComponent().getTargets().display("Result");
        	
        }
    });
});