import { reactive, computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { useRoute } from "vue-router";



export const useItemsStore = defineStore('items', function() {

    const list = reactive([
        {
        item: "Disney World", 
        price: 4000,
        slug: "Disney Word",
        detail:[],
        activities:[],
        notes:[]
    }
    ]);


    const selectedItemId = ref(null);

    const costs = computed(() => {
        const route = useRoute(); // Access the route object here
        const selectedItem = list.find(item => item.slug === route.params.slug);

        if (!selectedItem) {
            return 0; // Handle the case where the selected item is not found
        }

        const listTotalPrice = selectedItem.price || 0;
        const locationTotalPrice = selectedItem.detail.reduce((total, detail) => total + (detail.locationPrice || 0), 0);
        const activityTotalPrice = selectedItem.activities.reduce((total, activity) => total + (activity.activityPrice || 0), 0);

        return listTotalPrice - locationTotalPrice - activityTotalPrice;
    });

    const detail = reactive([
        {
            location: "",
            locationPrice: ""
        }
    ]);

    const activities = reactive([
        {
            activity: "",
            activityPrice: ""
        }
    ]);

    const notes = reactive([
        {
            note: ""
        }
    ]);

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

    function deleteNote(index) {
        list.notes.splice(index, 1);
    }

    function deleteDetail(index) {
        const route = useRoute(); // Access the route object here
        const currentItem = list.find(item => item.slug === route.params.slug);

        if (currentItem) {
            currentItem.detail.splice(index, 1);
        }
    }

    function deleteActivity(index) {
        list.activities.splice(index, 1);
    }

 
  return {list, costs, add, addDetails, addActivity, deleteDetail, deleteActivity, addNote, deleteNote };
});