public with sharing class AccountController {
   @AuraEnabled
   public static List<Contact> getRelatedContacts(Id searchId){
       return [SELECT Name,Title,Email,Phone
               FROM Contact
               WHERE AccountId  =:searchId
               WITH SECURITY_ENFORCED

       ];
   }
   
}
