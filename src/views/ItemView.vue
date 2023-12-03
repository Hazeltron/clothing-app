<script setup>
import { reactive } from "vue";
import { useRoute } from "vue-router";
import { useItemsStore } from "@/stores/stored-items.js";

const route = useRoute();
const store = useItemsStore();

const details = reactive({
  location: "",
  locatePrice: ""
});


const newItem = store.list.find(function (enteredItems) {
  return enteredItems.slug == route.params.slug;
});

// function clear(){
//     items.item =  "";
//     items.price = "";
// }


function save() {
    const enteredTripDetails = {
        location: details.location,
        locationPrice: details.locatePrice
    };
    console.log(enteredTripDetails);
  store.addDetails(enteredTripDetails);
  // clear();
}


</script>

<template>
  <section>
    <inner-column>
      <h1 class="loud-voice">Your <svg class="icon-suitcase"><use xlink:href="#icon-suitcase"></use></svg> for {{ newItem.slug }}</h1>

      <h2 class="attention-voice">Budget: ${{ newItem.price }}</h2>
    </inner-column>
  </section>

  <section>
    <inner-column>

      <div class="actions">
        <h2 class="attention-voice">Locations</h2>
        
      </div>
      <form @submit.prevent="save">
        <field>
          <input type="text" v-model="details.location">
          <input type="number" v-model="details.locatePrice">
        </field>
        <button type="submit" class="button-trans"><svg class="icon-add"><use xlink:href="#icon-add"></use></svg></button>
        
      </form>

   
    </inner-column>
  </section>

  <section>
    <inner-column>

      <div class="actions">
        <h2 class="attention-voice">Activities</h2>
        <button type="submit" class="button-trans"><svg class="icon-add"><use xlink:href="#icon-add"></use></svg></button>
      </div>
   
    </inner-column>
  </section>

  <section>
    <inner-column>

      <div class="actions">
        <h2 class="attention-voice">Notes</h2>
        <button class="button-trans"><svg class="icon-add"><use xlink:href="#icon-add"></use></svg></button>
      </div>
   
    </inner-column>
  </section>
</template>

<style scoped>
.icon-suitcase {
  color: var(--paper);
}
.actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
}
</style>
