import { reactive } from 'vue'
import { defineStore } from 'pinia'

export const useItemsStore = defineStore('items', function() {
    const list = reactive([
        {
        item: "Disney World", 
        price: 4000,
        slug: "Disney World"
    }
    ]);

    const detail = reactive([
        {
        location: "",
        locationPrice: ""
    }
    ]);

    function add(item){
        list.push(item);
    }

    function addDetails(details){
        detail.push(details);
    }

  return {list, detail, add, addDetails };
});