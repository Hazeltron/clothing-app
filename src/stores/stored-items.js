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
    function add(item){
        list.push(item);
    }

  return {list, add};
});