<script setup>
import { useRoute } from 'vue-router';
import {useItemsStore} from '@/stores/stored-items.js';


const route = useRoute();
const  product= useItemsStore();

const newItem = product.list.find( function(enteredItems){
    return enteredItems.slug == route.params.slug;

});
</script>

<template>

    <h1>{{ newItem.slug }}</h1>
    
</template>