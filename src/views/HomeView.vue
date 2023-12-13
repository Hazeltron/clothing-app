<script setup>
import ItemForm from "../components/ItemForm.vue";
</script>

<template>
    
      <section>
        <inner-column>
          <h1 class="loud-voice">Peregrine</h1>
        <p class="attention-voice">Travel Anywhere</p>
        </inner-column>
      </section>
      
      <section>
        <inner-column>
          <ItemForm />
        </inner-column>
      </section>
      

      <section>
        <inner-column>
          <div id="map" style="height: 400px;"></div>
        </inner-column>
      </section>
      


    
 
</template>
