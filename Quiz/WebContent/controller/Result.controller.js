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
    var CController = Controller.extend("sap.ui.demo.controller.Result", {
    	
    	
    	  onInit: function() {
    		  
    		
 	      var name = sessionStorage.getItem("x1");
           var result = sessionStorage.getItem("q4"); 
           sap.ui.getCore().getEventBus().subscribe("Q4", "onSubmit", this.onResult, this);
 	       var oModel = new sap.ui.model.json.JSONModel();
 	       sap.ui.getCore().setModel(oModel,"table");
 	       sap.ui.getCore().getModel("table").setData([]);
 	       this.getView().setModel(oModel,"table");
 	       var obj = {"name":name,
 	       		    "result":result}
 	      sap.ui.getCore().getModel("table").getData().push(obj);
 	       sap.ui.getCore().getModel("table").refresh();
 	    
     	        },
     	        
         onNew : function(){        	
        	 this.getOwnerComponent().getTargets().display("Main");
         },
         
         onResult: function(){
        	 var name = sessionStorage.getItem("x1");
             var result = sessionStorage.getItem("q4"); 
           //  this.getEventBus().subscribe("Q4", "onSubmit", this.onResult, this);
   	       var oModel = new sap.ui.model.json.JSONModel();
   	       sap.ui.getCore().setModel(oModel,"table");
   	       sap.ui.getCore().getModel("table").setData([]);
   	       this.getView().setModel(oModel,"table");
   	       var obj = {"name":name,
   	       		    "result":result}
   	       sap.ui.getCore().getModel("table").getData().push(obj);
   	       sap.ui.getCore().getModel("table").refresh();
         },
         
         onExit: function(){
        	 sap.ui.getCore().getEventBus().unsubscribe("Q4", "onSubmit", this.onResult, this); 
         },
});
});