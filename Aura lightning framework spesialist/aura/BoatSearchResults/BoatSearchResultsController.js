({
	doInit: function(component, event, helper) {
 		
            
    		
        },
    doSearch:function(component, event, helper) {
       var params = event.getParam('arguments');
       debugger
        console.log("boatTypeId extracted: "+params.boatTypeId);
        helper.onSearch(component,event);
        
    },
    search: function(component, event, helper){
       // console.log("BSRController: search called");
        var params = event.getParam('arguments');
        //console.log("boatTypeId extracted: " + params.boatTypeId);
        component.set("v.boatTypeId1", params.boatTypeId);
        //console.log("new get id: " +component.get("v.boatTypeId1"));
        helper.onSearch(component,event);
        return "search complete.";
    },
    onBoatSelect: function(component, event, helper){
        debugger
        var boatId = event.getParam("boatId");
        component.set("v.selectedBoatId", boatId);
       
    }
})