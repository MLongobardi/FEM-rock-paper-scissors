<script>
	import { gameStore } from "$lib/scripts/store.js"
	let symbolNames = [["ROCK", "PAPER", "SCISSORS"],["ROCK", "PAPER", "SCISSORS", "LIZARD", "SPOCK"]]
</script>

<header>
	<div>
		{#each symbolNames[$gameStore.bonusMode] as symbolName}
		<h3>{symbolName}</h3>
		{/each}
	</div>
	<div>
		<h3>Current Score: {$gameStore.currentPoints[$gameStore.bonusMode]}</h3>
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
	}

	h3 {
		margin: 0;
	}
</style>
