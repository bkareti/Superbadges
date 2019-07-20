({
    init: function(component, event, helper) {
        component.set("v.enableFullDetails", $A.get("e.force:navigateToSObject"));
    },
	onBoatSelected : function(component, event, helper) {
        //debugger
        var boatSelected=event.getParam("boat");
        component.set("v.id",boatSelected.Id);
        //component.set("v.boat",boatSelected);
        component.find("service").reloadRecord() ;
		//alert("onBoatSelected");
		
	},
    onRecordUpdated : function(component, event, helper){
        
	},
    onBoatReviewAdded : function(component, event, helper) {
        console.log("Event received");
        component.find("details").set("v.selectedTabId", 'boatreviewtab');
        debugger
		var BRcmp = component.find("BRcmp");
        console.log(BRcmp);
        var auraMethodResult = BRcmp.refresh();	        
    }

})