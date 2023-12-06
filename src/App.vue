<script setup>
import { RouterLink, RouterView, useRoute } from "vue-router";
import { useInterfaceStore } from "@/stores/interface";

const ui = useInterfaceStore();
const route = useRoute();
</script>



<template>
  <header :class="`${route.name} ${ui.menuClass}`" class="site-header">
    <inner-column>
      <div class="wrapper">
        <nav>
          <RouterLink class="links calm-voice" @click="ui.mainMenuClose" to="/store"
            >Home</RouterLink
          >
          <RouterLink class="links calm-voice" @click="ui.mainMenuClose" to="/"
            >Suitcases</RouterLink
          >
          <RouterLink class="links calm-voice" @click="ui.mainMenuClose" to="/about"
            >About</RouterLink
          >

          <button class="toggle" @click="ui.toggleMenu">Close</button>
        </nav>

        <button class="toggle add" @click="ui.toggleMenu"><svg class="icon-menu"><use xlink:href="#icon-menu"></use></svg> </button>
      </div>
    </inner-column>
  </header>

  <main>
    <inner-column>
      <RouterView />
    </inner-column>
  </main>
</template>

<style scoped>
.site-header {
  background-color: var(--paper);
  color: var(--white);
}
nav {
  display: flex;
  flex-direction: row;
  gap: 2rem;
}
.wrapper {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

nav a{
  padding: 10px;
  border-radius: 10px;
  border: 1px solid transparent;
}




.menu-closed nav {
  display: none;
}
.icon-menu {
	color: var(--shadow);
}
.menu-open nav {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: var(--color);
  color: var(--shadow);
  opacity: .9;
}

.toggle {
	display: block;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}


@media (min-width: 800px) {
  .menu-closed nav {
    display: flex;
    flex: row;
  }

  .wrapper {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }

  .menu-open nav {
    display: flex;
    flex: row;
  }
  .toggle {
    display: none;
  }
}
</style>
