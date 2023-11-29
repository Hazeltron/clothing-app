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

      <button type="submit" class="calm-voice">Add Item</button>
    </form>

    <ul>
        <li v-for="items in store.list">
           {{ items.item}} ${{ items.price }}
        </li>
    </ul>
  </div>
</template>
