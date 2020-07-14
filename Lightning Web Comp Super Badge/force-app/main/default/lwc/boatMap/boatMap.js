// import BOATMC from the message channel
import {LightningElement,wire,api} from 'lwc';
import {subscribe,unsubscribe,APPLICATION_SCOPE,MessageContext} from 'lightning/messageService';
import BOATMC from '@salesforce/messageChannel/BoatMessageChannel__c';
import {getRecord} from 'lightning/uiRecordApi';


const LATITUDE_FIELD  = 'Boat__c.Geolocation__Latitude__s';
const LONGITUDE_FIELD = 'Boat__c.Geolocation__Longitude__s';
const BOAT_FIELDS = [LONGITUDE_FIELD, LATITUDE_FIELD];

export default class BoatMap extends LightningElement {
  
  subscription = null;
  boatId;
  error = undefined;
  mapMarkers = [];


  @api
  get recordId() {
    return this.boatId;
  }
  set recordId(value) {
    this.setAttribute('boatId', value);
    this.boatId = value;
  }

  @wire(MessageContext) messageContext;

  @wire(getRecord,{recordId:'$boatId',fields:BOAT_FIELDS})
  wiredRecord({ error, data }) {
    if (data) {
      this.error = undefined;
      const longitude = data.fields.Geolocation__Longitude__s.value;
      const latitude = data.fields.Geolocation__Latitude__s.value;
      this.updateMap(longitude, latitude);
    } else if (error) {
      this.error = error;
      this.boatId = undefined;
      this.mapMarkers = [];
    }
  }

  // Runs when component is connected, subscribes to BoatMC
  connectedCallback() {
    if (this.subscription || this.recordId) {
      return;
    }
    // Subscribe to the message channel to retrieve the recordID and assign it to boatId.
    this.subscription = subscribe(
          this.messageContext,
          BOATMC,
          (message) => {
              this.recordId = message.recordId;
          },
          { scope: APPLICATION_SCOPE }
    );
  }
  disconnectedCallback() {
    unsubscribe(this.subscription);
    this.subscription = null;
}

  // Creates the map markers array with the current boat's location for the map.
  updateMap(Longitude, Latitude) {
    this.mapMarkers =[{
      location:{Latitude,Longitude},
      description:`Coords: ${Latitude}, ${Longitude}`,
      icon:'utility:animal_and_nature'
    }]
  }

  // Getter method for displaying the map component, or a helper method.
  get showMap() {
    return this.mapMarkers.length > 0;
  }
}