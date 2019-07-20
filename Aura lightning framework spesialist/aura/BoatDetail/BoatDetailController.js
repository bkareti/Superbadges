({
	 onFullDetails: function(component, event, helper) {
        // debugger
 
        var navEvt = $A.get("e.force:navigateToSObject");
        navEvt.setParams({
          "recordId":  component.get("v.boat.Id")

        });
        navEvt.fire();
    }
})