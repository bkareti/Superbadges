({
	onBoatClick : function(component, event, helper) {
		
        
        
 		var myEvent = component.getEvent("BoatSelect");
        var boat=component.get("v.boat");
        myEvent.setParams({"boatId": boat.Id});
        myEvent.fire();
        
        
        var appEvent = $A.get("e.c:BoatSelected");
          
        appEvent.setParams({
            "boat": boat
        });
        appEvent.fire();   
        debugger;
        var plotEvent = $A.get("e.c:PlotMapMarker");
          
        plotEvent.setParams({
            "lat": boat.Geolocation__Latitude__s,
            "sObjectId": boat.Id,
            "long": boat.Geolocation__Longitude__s,
            "label":boat.Name
        });
        plotEvent.fire(); 
    }  
})