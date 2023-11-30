<script setup>
import { reactive } from "vue";
import { useItemsStore } from "@/stores/stored-items";

const store = useItemsStore();

const items = reactive({
  item: "",
  price: "",
});

function save() {
    const newObject = {
        item: items.item,
        price: items.price,
    };
  store.add(newObject);
  clear();
}

function clear(){
    items.item =  "";
    items.price = "";
}
</script>

<template>
  <div class="store">
    <h1 class="attention-voice">This is a store page</h1>

    <form @submit.prevent="save">
      <div class="field">
        <label for="item" class="calm-voice">Add item:</label>
        <input type="text" id="item" v-model="items.item" />
      </div>

      <div class="field">
        <label for="price" class="calm-voice">Add price:</label>
        <input type="number" id="price" v-model="items.price" />
      </div>

      <button type="submit" class="add calm-voice">Add Item:</button>
    </form>

    <ul>
        <li v-for="items in store.list">
           {{ items.item}} ${{ items.price }}
        </li>
    </ul>
  </div>
</template>

<style>

body {
  background-color: var(--shadow);
}
.store {
  display: grid;
  gap: 30px;
}

form {
  display: grid;
  gap: 20px;
}

.field {
  display: grid;
  gap: 10px;
}

input {
  max-width: 200px;
  height: 2rem;
}
input:focus {
  outline-color: var(--highlight);
}
.add {
  max-width: 150px;
  background-color: var(--white);
  border-radius: 20px 20px;
  padding: 0 20px;
}
</style>
