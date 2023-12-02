<script setup>
import { useRoute } from "vue-router";
import { useItemsStore } from "@/stores/stored-items.js";

const route = useRoute();
const product = useItemsStore();

const newItem = product.list.find(function (enteredItems) {
  return enteredItems.slug == route.params.slug;
});
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
        <button class="button-trans"><svg class="icon-add"><use xlink:href="#icon-add"></use></svg></button>
      </div>
   
    </inner-column>
  </section>

  <section>
    <inner-column>

      <div class="actions">
        <h2 class="attention-voice">Activities</h2>
        <button class="button-trans"><svg class="icon-add"><use xlink:href="#icon-add"></use></svg></button>
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
