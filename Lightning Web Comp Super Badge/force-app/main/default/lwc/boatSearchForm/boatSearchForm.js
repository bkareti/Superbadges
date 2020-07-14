/* eslint-disable no-console */
import { LightningElement, wire,track } from 'lwc';
import getBoatTypes from '@salesforce/apex/BoatDataService.getBoatTypes';

export default class BoatSearchForm extends LightningElement {

    selectedBoatTypeId  = '';
    error = undefined;
    @track searchOptions;

    // Wire a custom Apex method
    @wire(getBoatTypes)
    boatTypes({ error, data }) {
        if (data) {

          console.log('boat types are: '+JSON.stringify(data));
          this.searchOptions = data.map(type => {
            return {label: type.Name, value: type.Id}
           
          });

          //unshifts adds one or more value at the begining of an array
          this.searchOptions.unshift({ label: 'All Types', value: '' });
        } else if (error) {
          this.searchOptions = undefined;
          this.error = error;
          console.log('Error in getting Boat types: '+JSON.stringify(error));
        }
      }
      
      // Fires event that the search option has changed.
      // passes boatTypeId (value of this.selectedBoatTypeId) in the detail
      handleSearchOptionChange(event) {
        this.selectedBoatTypeId = event.detail.value;
        // Create the const searchEvent
        // searchEvent must be the new custom event search
        const searchEvent = new CustomEvent('search',{detail:{boatTypeId:this.selectedBoatTypeId}});
        this.dispatchEvent(searchEvent);
      }
}