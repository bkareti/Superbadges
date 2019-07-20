({
    onFormSubmit: function(component, event, helper){
        console.log("event received by BoatSearchController.js");
        var formData = event.getParam("formData");
        var boatTypeId = formData.boatTypeId;
        debugger
        console.log("boatTypeId extracted: "+boatTypeId);
       
        
        var BSRcmp = component.find("BSRcmp");
    var auraMethodResult = BSRcmp.search(boatTypeId);
    console.log("auraMethodResult: " + auraMethodResult);
         //helper.onSearch(component,event);
    },
    doSearch:function(component, event, helper) {
       //var params = event.getParam('arguments');
        // var formData = event.getParam("formData");
       // var boatTypeId = formData.boatTypeId;
        
       //debugger
       // console.log("boatTypeId extracted: "+boatTypeId);
        //helper.onSearch(component,event);
        
    },
    search: function(component, event, helper){
        console.log("BSRController: search called");
        var params = event.getParam('arguments');
        console.log("boatTypeId extracted: " + params.boatTypeId);
        component.set("v.boatTypeId", params.boatTypeId);
        helper.onSearch(component,event);
        return "search complete.";
    }

})