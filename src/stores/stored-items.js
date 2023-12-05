import { reactive, computed } from 'vue'
import { defineStore } from 'pinia'

export const useItemsStore = defineStore('items', function() {

    // const budget = function budget(){
    //     const budget = list.price - (detail.locationPrice + activities.activityPrice);
    //     return budget

    // }

    const costs = computed(function () {
        const listTotalPrice = list.reduce(function (total, item) {
          return total + (item.price || 0);
        }, 0);
      
        const locationTotalPrice = detail.reduce(function (total, location) {
          return total + (location.locationPrice || 0);
        }, 0);
      
        const activityTotalPrice = activities.reduce(function (total, activity) {
          return total + (activity.activityPrice || 0);
        }, 0);
      
        return listTotalPrice - locationTotalPrice - activityTotalPrice;
      });

    const list = reactive([
        {
        item: "Disney World", 
        price: 4000,
        slug: "Disney Word"
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

    function add(item){
        list.push(item);
    }

    function addDetails(details){
        detail.push(details);
    }

    function addActivity(activity){
        activities.push(activity);
    }

    function addNote(note){
        notes.push(note);
    }

    function deleteNote(index) {
        notes.splice(index, 1);
    }

    function deleteDetail(index) {
        detail.splice(index, 1);
    }
    
    function deleteActivity(index) {
        activities.splice(index, 1);
    }
  return {list, detail, notes, activities, add, addDetails, addActivity, deleteDetail, deleteActivity, addNote, deleteNote, costs };
});