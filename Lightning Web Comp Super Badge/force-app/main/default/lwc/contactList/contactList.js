import { LightningElement,wire } from 'lwc';
import { reduceErrors } from 'c/ldsUtils';
import getContacts from '@salesforce/apex/ContactController.getContacts';
import FIRST_NAME from '@salesforce/schema/Contact.FirstName';
import LAST_NAME from '@salesforce/schema/Contact.LastName';
import EMAIL from '@salesforce/schema/Contact.Email';
const COLUMNS = [{ label:'Fisrt Name',fieldName:FIRST_NAME.fieldApiName, type: 'text'},
                {label:'Last Name', fieldName:LAST_NAME.fieldApiName, type: 'text'},
                {label:'Email',fieldName:EMAIL.fieldApiName,type: 'email'}];
export default class ContactList extends LightningElement {
columns = COLUMNS;

    @wire(getContacts)
    contacts;

    get errors(){
        return (this.contacts.error) ? reduceErrors(this.contact.errors) : [];
    }
}