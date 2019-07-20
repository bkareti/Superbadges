({
	onSearch : function(component,event) {
        	
            var formData = event.getParam("formData");
        console.log("param :"+formData.boatTypeId);
        	var x = formData.boatTypeId;
        if(x=='All Types'){
            x='';
        }
		 	var action = component.get("c.getBoats");
        	action.setParams({
          	"boatTypeId":x
        	});
        	 debugger
    		action.setCallback(this, function(response) {
               
                var state = response.getState();
                if (component.isValid() && state === "SUCCESS") {
                    //debugger
                    console.log("responce : " + response.getReturnValue());
                    component.set("v.boats", response.getReturnValue());
                    
                }
                else {
                    console.log("Failed with state1: " + state);
                }
        	});
    		$A.enqueueAction(action);
	}
})