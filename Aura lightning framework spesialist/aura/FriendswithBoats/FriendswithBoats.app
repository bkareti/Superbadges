<aura:application extends="force:slds" >
    <c.BoatHeader/>
    <lightning:layout >
    
  <div class="slds-col slds-size_2-of-3">
    <c.BoatSearch/>
  </div>
  <div class="slds-col slds-size_1-of-3">
      
    <c.BoatDetails /> 
       <c.Map /> </div>

    </lightning:layout>
    
    
</aura:application>