<template>
	<div class="app">
		<div class="sidebar">
			<!-- Sidebar -->
			<!--<Sidebar />-->
		</div>
		<router-view />
	</div>
</template>

<script setup>

</script>

<style lang="scss">
:root {
	--primary: #4ade80;
	--primary-alt: #22c55e;
	--grey: #64748b;
	--dark: #1e293b;
	--dark-alt: #334155;
	--light: #f1f5f9;
	--sidebar-width: 300px;
}


body {
	background: var(--light);
}

.app {
	display: flex;

	main {
		flex: 1 1 0;
		padding: 2rem;

		@media (max-width: 1024px) {
			padding-left: 6rem;
		}
	}

}
</style>