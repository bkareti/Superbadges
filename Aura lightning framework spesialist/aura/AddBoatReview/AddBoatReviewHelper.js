({
	onInit : function(component, event,helper) {
		component.find("service").getNewRecord(
            "BoatReview__c", // sObject type (entityAPIName)
            null,      // recordTypeId
            false,     // skip cache?
            $A.getCallback(function() {
                var rec = component.get("v.boatReview");
                var error = component.get("v.recordError");
                var boat=component.get("v.boat");
                if(error || (rec === null)) {
                    console.log("Error initializing record template: " + error);
                }
                else {
                    //component.set("v.boatReviewRecord.Boat__c",boat.Id);
                    component.set("v.boatReview.Boat__c",boat.Id);
                   // debugger
                    var test=component.get("v.boatReview");
                }
            })
        );
	}
})