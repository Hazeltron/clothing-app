import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useInterfaceStore = defineStore("interface", function () {


  const mainMenuOpen = ref(false);
  
  function toggleMenu() {
    mainMenuOpen.value = !mainMenuOpen.value;
  }

  function mainMenuClose(event) {
    // Check if the clicked element is a RouterLink
    if (event.target.matches(".links")) {
      mainMenuOpen.value = false;
    }
  }

  const menuClass = computed( function(){
    if (mainMenuOpen.value) {
        return "menu-open";
    } else {
        return "menu-closed";
    }
  })

  return { mainMenuOpen, toggleMenu, menuClass, mainMenuClose };
});
