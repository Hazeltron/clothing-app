import { reactive, computed, ref } from "vue";
import { defineStore } from "pinia";
import { useRoute } from "vue-router";

export const useItemsStore = defineStore("items", function () {
  const trips = reactive([
    {
      item: "Disney World",
      price: 4000,
      slug: "Disney World",
      destination: [],
      activities: [],
      notes: [],
    },
  ]);

  const budget = computed(function () {
    const route = useRoute();
    const selectedItem = trips.find(function (item) {
      return item.slug === route.params.slug;
    });

    if (!selectedItem) {
      return 0;
    }

    const tripsTotalPrice = selectedItem.price || 0;
    const locationTotalPrice = selectedItem.destination.reduce(function (
      total,
      destination,
    ) {
      return total + (destination.locationPrice || 0);
    }, 0);
    const activityTotalPrice = selectedItem.activities.reduce(function (
      total,
      activity,
    ) {
      return total + (activity.activityPrice || 0);
    }, 0);

    return tripsTotalPrice - locationTotalPrice - activityTotalPrice;
  });

  function add(item) {
    trips.push(item);
  }

  function addDestination(destinations) {
    trips.push(destinations);
  }

  function addActivity(activity) {
    trips.push(activity);
  }

  function addNote(note) {
    trips.push(note);
  }

  function deleteNote({ slug, index }) {
    const currentItem = trips.find((item) => item.slug === slug);

    if (currentItem && currentItem.notes) {
      currentItem.notes.splice(index, 1);
    }
  }

  function deleteDestination({ slug, index }) {
    const currentItem = trips.find((item) => item.slug === slug);

    if (currentItem && currentItem.destination) {
      currentItem.destination.splice(index, 1);
    }
  }

  function deleteActivity({ slug, index }) {
    const currentItem = trips.find((item) => item.slug === slug);

    if (currentItem && currentItem.activities) {
      currentItem.activities.splice(index, 1);
    }
  }

  return {
    trips,
    budget,
    add,
    addDestination,
    addActivity,
    deleteDestination,
    deleteActivity,
    addNote,
    deleteNote,
  };
});
