<script setup>
	import { RouterLink, RouterView } from 'vue-router';
	
</script>

<template>
	<header class="site-header">
		<inner-column>

			<div class="wrapper">
		
				<nav>
					<RouterLink to="/">Home</RouterLink>
					<RouterLink to="/about">About</RouterLink>
					<RouterLink to="/store">Store</RouterLink>
				</nav>

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
</style>
