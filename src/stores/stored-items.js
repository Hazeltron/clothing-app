import { reactive, computed, ref } from "vue";
import { defineStore } from "pinia";
import { useRoute } from "vue-router";

export const useItemsStore = defineStore("items", function () {
  const list = reactive([
    {
      item: "Disney World",
      price: 4000,
      slug: "Disney World",
      detail: [],
      activities: [],
      notes: [],
    },
  ]);

  const newItem = ref(null);

  const costs = computed(function () {
    const route = useRoute();
    const selectedItem = list.find(function (item) {
      return item.slug === route.params.slug;
    });

    if (!selectedItem) {
      return 0;
    }

    const listTotalPrice = selectedItem.price || 0;
    const locationTotalPrice = selectedItem.detail.reduce(function (
      total,
      detail,
    ) {
      return total + (detail.locationPrice || 0);
    }, 0);
    const activityTotalPrice = selectedItem.activities.reduce(function (
      total,
      activity,
    ) {
      return total + (activity.activityPrice || 0);
    }, 0);

    return listTotalPrice - locationTotalPrice - activityTotalPrice;
  });

  function add(item) {
    list.push(item);
  }

  function addDetails(details) {
    list.push(details);
  }

  function addActivity(activity) {
    list.push(activity);
  }

  function addNote(note) {
    list.push(note);
  }

  function deleteNote({ slug, index }) {
    const currentItem = list.find((item) => item.slug === slug);

    if (currentItem && currentItem.notes) {
      currentItem.notes.splice(index, 1);
    }
  }

  function deleteDetail({ slug, index }) {
    const currentItem = list.find((item) => item.slug === slug);

    if (currentItem && currentItem.detail) {
      currentItem.detail.splice(index, 1);
    }
  }

  function deleteActivity({ slug, index }) {
    const currentItem = list.find((item) => item.slug === slug);

    if (currentItem && currentItem.activities) {
      currentItem.activities.splice(index, 1);
    }
  }

  return {
    list,
    costs,
    add,
    addDetails,
    addActivity,
    deleteDetail,
    deleteActivity,
    addNote,
    deleteNote,
  };
});
