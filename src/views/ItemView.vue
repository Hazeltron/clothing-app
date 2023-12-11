<script setup>
import { reactive } from "vue";
import { useRoute } from "vue-router";
import { useItemsStore } from "@/stores/stored-items.js";

const route = useRoute();
const store = useItemsStore();

const destinations = reactive({
  location: "",
  locatePrice: "",
});

const activities = reactive({
  activity: "",
  activityPrice: "",
});

const notes = reactive({
  note: "",
});

const newTrip = store.trips.find(function (enteredPlaces) {
  return enteredPlaces.slug == route.params.slug;
});

function clear() {
  destinations.location = "";
  destinations.locationPrice = "";
  activities.activity = "";
  activities.activityPrice = "";
  notes.note = "";
}

function saveDestination() {
  const enteredLocation = {
    location: destinations.location,
    locationPrice: destinations.locationPrice,
  };

  const currentItem = store.trips.find(function (item) {
    return item.slug === newTrip.slug;
  });

  if (currentItem) {
    currentItem.destination.push(enteredLocation);
  }

  clear();
}

function saveActivity() {
  const enteredActivities = {
    activity: activities.activity,
    activityPrice: activities.activityPrice,
  };

  const currentItem = store.trips.find(function (item) {
    return item.slug === newTrip.slug;
  });

  if (currentItem) {
    currentItem.activities.push(enteredActivities);
  }
  clear();
}

function saveNotes() {
  const enteredNotes = {
    note: notes.note,
  };
  const currentItem = store.trips.find(function (item) {
    return item.slug === newTrip.slug;
  });
  if (currentItem) {
    currentItem.notes.push(enteredNotes);
  }
  clear();
}

function deleteNote(noteIndex) {
  store.deleteNote({ slug: route.params.slug, index: noteIndex });
}

function deleteDestination(destinationIndex) {
  store.deleteDestination({ slug: route.params.slug, index: destinationIndex });
}

function deleteActivity(activityIndex) {
  store.deleteActivity({ slug: route.params.slug, index: activityIndex });
}
</script>

<template>
  <section>
    <inner-column>
      <h1 class="loud-voice">
        Your
        <svg class="icon-suitcase"><use xlink:href="#icon-suitcase"></use></svg>
        for {{ newTrip.slug }}
      </h1>
      <!-- <code>
        <pre>
          {{ store.trips }}
        </pre>
      </code> -->

      <h2 class="attention-voice">Budget: ${{ store.budget }}</h2>
    </inner-column>
  </section>

  <section>
    <inner-column>
      <form @submit.prevent="saveDestination">
        <div class="actions">
          <h2 class="attention-voice">Locations</h2>
          <button type="submit" class="button-trans">
            <svg class="icon-add"><use xlink:href="#icon-add"></use></svg>
          </button>
        </div>

        <field class="destination-field">
          <label for="location"
            >Places to discover within {{ newTrip.slug }}:</label
          >
          <input
            required
            id="location"
            type="text"
            v-model="destinations.location"
          />
          <label for="locationPrice">Estimated Cost:</label>
          <input
            id="locationPrice"
            type="number"
            v-model="destinations.locationPrice"
          />
        </field>
      </form>

      <ul class="output-container">
        <li
          class="calm-voice output"
          v-for="(item, index) in newTrip.destination"
          :key="index"
        >
          <div>{{ item.location }} ${{ item.locationPrice }}</div>

          <button @click="deleteDestination(index)">delete</button>
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

        <field class="destination-field">
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
          v-for="(thing, index) in newTrip.activities"
          :key="index"
        >
          {{ thing.activity }} ${{ thing.activityPrice }}
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

        <field class="destination-field">
          <textarea required v-model="notes.note"></textarea>
        </field>
      </form>

      <ul class="output-container">
        <li
          class="calm-voice output-for-notes"
          v-for="(note, noteIndex) in newTrip.notes"
          :key="noteIndex"
        >
          {{ note.note }}
          <button @click="deleteNote(noteIndex)">delete</button>
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
.destination-field {
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
  align-items: center;
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
  color: var(--white);
}

.output-for-notes {
  display: flex;
  flex-direction: row;
  align-items: center;
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
  color: var(--white);
}

textarea {
  max-width: 400px;
  height: 200px;
}

textarea:focus {
  outline-color: var(--highlight);
}
</style>
