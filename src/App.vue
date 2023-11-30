<script setup>
	import { RouterLink, RouterView, useRoute } from 'vue-router';
	import { useInterfaceStore } from '@/stores/interface';

	const ui = useInterfaceStore();
	const route = useRoute();
</script>

<template>
	<header :class="`${route.name} ${ui.menuClass}`" class="site-header" >
		<inner-column>

			<div class="wrapper">
		
				<nav >
					<RouterLink class="links" @click="ui.mainMenuClose" to="/">Home</RouterLink>
					<RouterLink class="links" @click="ui.mainMenuClose" to="/about">About</RouterLink>
					<RouterLink class="links" @click="ui.mainMenuClose" to="/store">Store</RouterLink>

					<button class="close toggle" @click="ui.toggleMenu">Close</button>
				</nav>

				<button class="open toggle" @click="ui.toggleMenu">Menu</button>

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
}
nav {
	display: flex;
	flex-direction: row;
	gap: 2rem;
}

.menu-closed nav {
	display: none;
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
	background-color: var(--shadow);

}

@media (min-width: 600px) {
	  .menu-closed nav {
		display: flex;
		flex: row;
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
