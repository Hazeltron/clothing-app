import { reactive, computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useItemsStore = defineStore('items', function() {


    const selectedItemId = ref(null);

    const costs = computed(() => {
        const selectedItem = list.find(item => item.id === selectedItemId.value);
        
        if (!selectedItem) {
            return 0; // Handle the case where the selected item is not found
        }
    
        const listTotalPrice = selectedItem.price || 0;
        const locationTotalPrice = selectedItem.details.reduce((total, detail) => total + (detail.locationPrice || 0), 0);
        const activityTotalPrice = selectedItem.activities.reduce((total, activity) => total + (activity.activityPrice || 0), 0);
    
        return listTotalPrice - locationTotalPrice - activityTotalPrice;
    });

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

    //user enters location and price
    //detail link is created 
    //uuser clicks detaail link 
    //user enters locations and prices 

    function add(item){
        list.push(item);
    }

    function addDetails(details){
        list.push(details);
    }

    function addActivity(activity){
        list.push(activity);
    }

    function addNote(note){
        list.push(note);
    }

    function deleteNote(index) {
        list.notes.splice(index, 1);
    }

    function deleteDetail(index) {
        const currentItem = list.find(function(item) {
          return item.slug === newItem.slug;
        });
    
        if (currentItem) {
          currentItem.detail.splice(index, 1);
        }
      }
    
    function deleteActivity(index) {
        list.activities.splice(index, 1);
    }
  return {list, costs, add, addDetails, addActivity, deleteDetail, deleteActivity, addNote, deleteNote };
});