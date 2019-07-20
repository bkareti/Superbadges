public with sharing class BoatSearchController {
	
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
    public static List<Boat__c> getBoats() {
      system.debug('working');
        list<Boat__c> obj = new list<Boat__c>();
        obj=[SELECT  BoatType__c, Picture__c, Id,Contact__c FROM Boat__c];
        system.debug('list'+obj);
        return obj;
        
    }
}