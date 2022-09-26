<script>
	/*
	//standard way
	import Result from "$lib/components/Result.svelte"
	import SymbolPicker from "$lib/components/SymbolPicker.svelte"
	*/

	//_exporter.js OPTION 1
	import { Result, SymbolPicker } from "$comps";
	import { gameStore } from "$scripts/store.js";
</script>

<main>
	{#if $gameStore.matchLogic.isPicker}
		<SymbolPicker />
	{:else}
		<Result />
	{/if}
</main>

<style>
	main {
		color: white;
		margin: 10px;
		padding: 10px;
	}
</style>
