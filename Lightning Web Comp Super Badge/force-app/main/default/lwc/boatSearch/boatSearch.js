/* eslint-disable no-console */
import { LightningElement, api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';


export default class BoatSearch extends NavigationMixin(LightningElement) {
   
    
    error;
    isLoading = true;

  
    @api
    handleLoading(){
        this.isLoading = true;
    }

    @api
    handleDoneLoading(){
        this.isLoading = false;
    }

    searchBoats(event){
        const boatTypeId = event.detail.boatTypeId;
        console.log('BoatType Id from Combo is: '+boatTypeId);

        this.template.querySelector('c-boat-search-results').searchBoats(boatTypeId);
        
    }

    // navigate to crate new boat
    createNewBoat(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Boat__c',
                actionName: 'new',
            },
        });
    }
}