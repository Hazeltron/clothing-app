import { reactive } from 'vue'
import { defineStore } from 'pinia'

export const useItemsStore = defineStore('items', function() {
    const list = reactive([
        {
        item: "t-shirt", 
        price: 200,
        slug: "t-shirt"
    }
    ]);
    function add(item){
        list.push(item);
    }

  return {list, add};
});