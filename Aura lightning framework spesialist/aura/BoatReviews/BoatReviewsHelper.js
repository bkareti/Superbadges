({
	onInit : function(component, event) {
        	debugger
        	var boat=component.get("v.boat");
			var action = component.get("c.getAll");
        	action.setParams({
          	"boatId":boat.Id
        	});
        	 debugger
    		action.setCallback(this, function(response) {
               
                var state = response.getState();
                if (component.isValid() && state === "SUCCESS") {
                    //debugger
                    //console.log("responce : " + response.getReturnValue());
                    component.set("v.boatReviews", response.getReturnValue());
                    
                }
                else {
                    console.log("Failed with state: " + state);
                }
        	});
    		$A.enqueueAction(action);
	}
})