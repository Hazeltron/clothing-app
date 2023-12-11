<script setup>
import { reactive } from "vue";
import { useItemsStore } from "@/stores/stored-items";

const store = useItemsStore();

const items = reactive({
  item: "",
  price: "",
  slug: "",
});

function save() {
  const enteredItems = {
    item: items.item,
    price: items.price,
    slug: items.item,
    detail: [],
    activities: [],
    notes: [],
  };
  store.add(enteredItems);
  clear();
}

function clear() {
  items.item = "";
  items.price = "";
}
</script>

<template>
  <div class="store">
    <form @submit.prevent="save">
      <h1 class="attention-voice">A World of Possibilities</h1>
      <div class="field">
        <label for="item" class="calm-voice">Where would you like to go?</label>
        <input required type="text" id="item" v-model="items.item" />
      </div>

      <div class="field">
        <label for="price" class="calm-voice"
          >What's your estimated budget?</label
        >
        <input required type="number" id="price" v-model="items.price" />
      </div>

      <button type="submit" class="add calm-voice">
        Create <br />
        Suitcase
        <svg class="icon-twitter"><use xlink:href="#icon-suitcase"></use></svg>
      </button>
    </form>

    <ul class="suitcase-list">
      <li class="attention-voice">Suitcases</li>
      <li v-for="items in store.list">
        <RouterLink class="calm-voice suitcases" :to="`item/${items.slug}`">
          {{ items.item }} ${{ items.price }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
body {
  background-color: var(--shadow);
}

.store {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 20%;
}

form {
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
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 150px;
  background-color: var(--white);
  border-radius: 20px 20px;
  padding: 10px;
  border: solid 1px var(--shadow);
}

.add:hover {
  background-color: var(--shadow);
  color: var(--white);
}

a.suitcases {
  padding: 10px;
  border: 1px solid var(--shadow);
  border-radius: 10px;
}

.suitcase-list {
  display: grid;
  gap: 10px;
}
</style>
