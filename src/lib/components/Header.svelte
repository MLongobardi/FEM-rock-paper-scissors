<script>
	import { gameStore } from "$scripts/store.js";
</script>

<header>
	<div>
		{#each $gameStore.symbolNames as symbolName}
			<h3>{symbolName}</h3>
		{/each}
	</div>
	<div>
		<h3>Current Score: {$gameStore.getPoints}</h3>
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: yellow;
		margin: 10px;
		padding: 10px;
		min-height: 110px; /*temp*/
	}

	h3 {
		margin: 0;
	}
</style>
