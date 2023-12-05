<script setup>
import { reactive } from "vue";
import { useRoute } from "vue-router";
import { useItemsStore } from "@/stores/stored-items.js";

const route = useRoute();
const store = useItemsStore();



const details = reactive({
  location: "",
  locatePrice: "",
});

const activities = reactive({
  activity: "",
  activityPrice: "",
});

const notes = reactive({
  note: ""
});


const newItem = store.list.find(function (enteredItems) {
  return enteredItems.slug == route.params.slug;
});

function clear(){
    details.location =  "";
    details.locationPrice = "";
    activities.activity = "";
    activities.activityPrice = "";
    notes.note = "";
}

function save() {
  const enteredTripDetails = {
    location: details.location,
    locationPrice: details.locationPrice,
    notes: details.notes,
  };

  console.log(store.detail);
  store.addDetails(enteredTripDetails);
  clear();
}

function saveActivity() {
  const enteredActivities = {
    activity: activities.activity,
    activityPrice: activities.activityPrice,
  };
  store.addActivity(enteredActivities);
  clear();
  console.log(store.activities);
  console.log(store.costs);
}

function saveNotes() {
  const enteredNotes = {
    note: notes.note
  };
  store.addNote(enteredNotes);
  clear();
  console.log(store.notes);
}

function deleteDetail(index) {
  store.deleteDetail(index);
}

function deleteActivity(index) {
  store.deleteActivity(index);
}

function deleteNote(index) {
  store.deleteNote(index);
}

</script>

<template>
  <section>
    <inner-column>
      <h1 class="loud-voice">
        Your
        <svg class="icon-suitcase"><use xlink:href="#icon-suitcase"></use></svg>
        for {{ newItem.slug }}
      </h1>

      <h2 class="attention-voice">Budget: ${{ store.costs }}</h2>
    </inner-column>
  </section>

  <section>
    <inner-column>
      <form @submit.prevent="save">
        <div class="actions">
          <h2 class="attention-voice">Locations</h2>
          <button type="submit" class="button-trans">
            <svg class="icon-add"><use xlink:href="#icon-add"></use></svg>
          </button>
        </div>

        <field class="detail-field">
          <label for="location">Places to discover within {{ newItem.slug }}:</label>
          <input
            required
            id="location"
            type="text"
            v-model="details.location"
          />
          <label for="locationPrice">Estimated Cost:</label>
          <input
            id="locationPrice"
            type="number"
            v-model="details.locationPrice"
          />
        </field>
      </form>

      <ul class="output-container">
        <li
          class="calm-voice output"
          v-for="(details, index) in store.detail"
          :key="index"
        >
          {{ details.location }} ${{ details.locationPrice }}

          <button @click="deleteDetail(index)">delete</button>
        </li>
      </ul>
    </inner-column>
  </section>

  <section>
    <inner-column>
      <form @submit.prevent="saveActivity">
        <div class="actions">
          <h2 class="attention-voice">Activity</h2>
          <button type="submit" class="button-trans">
            <svg class="icon-add"><use xlink:href="#icon-add"></use></svg>
          </button>
        </div>

        <field class="detail-field">
          <label for="activity">Add anything you'd like to do:</label>
          <input
            required
            id="activity"
            type="text"
            v-model="activities.activity"
          />
          <label for="activity-price">Estimated cost:</label>
          <input
            id="activity-price"
            type="number"
            v-model="activities.activityPrice"
          />
        </field>
      </form>

      <ul class="output-container">
        <li
          class="calm-voice output"
          v-for="(activity, index) in store.activities"
          :key="index"
        >
          {{ activity.activity }} ${{ activity.activityPrice }}
          <button @click="deleteActivity(index)">delete</button>
        </li>
      </ul>
    </inner-column>
  </section>

  <section>
    <inner-column>
      <form @submit.prevent="saveNotes">
        <div class="actions">
          <h2 class="attention-voice">Notes</h2>
          <button type="submit" class="button-trans">
            <svg class="icon-add"><use xlink:href="#icon-add"></use></svg>
          </button>
        </div>

        <field class="detail-field">
          <textarea required v-model="notes.note"></textarea>
        </field>
      </form>

      <ul class="output-container">
        <li
          class="calm-voice output-for-notes"
          v-for="(note, index) in store.notes"
          :key="index"
        >
          {{ note.note }}
          <button @click="deleteNote(index)">delete</button>
        </li>
      </ul>
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
.detail-field {
  display: grid;
  gap: 10px;
  margin-top: 20px;
}

input {
  max-width: 200px;
  height: 2rem;
}

input:focus {
 outline-color: var(--highlight);
}

.output-container {
  margin-top: 20px;
}

.output {
  display: flex;
  flex-direction: row;
  align-items: center ;
  justify-content: space-between;
  max-width: 200px;
  background-color: var(--white);
  border-radius: 20px 20px;
  padding: 10px;
  border: solid 1px var(--shadow);
  margin-top: 10px;
  
}

.output:hover {
  background-color: var(--shadow);
  color:  var(--white);
}

.output-for-notes {
  display: flex;
  flex-direction: row;
  align-items: center ;
  justify-content: space-between;
  max-width: 400px;
  background-color: var(--white);
  border-radius: 20px 20px;
  padding: 10px;
  border: solid 1px var(--shadow);
  margin-top: 10px;
  
}

.output-for-notes:hover {
  background-color: var(--shadow);
  color:  var(--white);
}

textarea {
  max-width: 400px;
  height: 200px;
}

textarea:focus {
  outline-color: var(--highlight);
}
</style>
