public class BoatSearchResults  {
	
    public list<Boat__c> Boats{get;set;}
    
    @AuraEnabled
    public static List<BoatType__c> getboattypes() {
       // list<BoatType__c> obj = new list<BoatType__c>();
       // list<string> str=new list<string>();
        //obj=[SELECT Name, Id FROM BoatType__c];
        //for(BoatType__c bt : obj){
       //     str.add(bt.Name);
        //}
        return [SELECT Name, Id FROM BoatType__c];
    }
    
    @AuraEnabled
    public static List<Boat__c> getBoats(string boatTypeId ) {
      system.debug('working'+ boatTypeId);
        list<Boat__c> obj = new list<Boat__c>();
        if(boatTypeId!='') {
            //return list of boat of thisType
            obj=[SELECT id, BoatType__c, picture__c, name,contact__r.Name, Geolocation__Latitude__s, Geolocation__Longitude__s
                    FROM Boat__c
                    WHERE BoatType__c =: boatTypeId];
        }else {
            //return a list of all boats
            obj=[SELECT id, BoatType__c,picture__c, name,contact__r.Name, Geolocation__Latitude__s, Geolocation__Longitude__s
                    FROM Boat__c];
        }
        system.debug('obj '+obj);
    	return obj;
    }
}