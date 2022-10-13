<script>
	/*
	//standard way
	import Result from "$lib/components/Result.svelte"
	import SymbolPicker from "$lib/components/SymbolPicker.svelte"
	*/

	//_exporter.js OPTION 1
	import { Result, SymbolPicker } from "$comps";
	import { gameStore } from "$scripts/store.js";
	import { SETTINGS } from "$lib/my-config.js";

	let sizeDiscr = SETTINGS.MIN_SYMBOL_HOLDER; //default value
	let incr = (SETTINGS.MAX_SYMBOL_HOLDER - SETTINGS.MIN_SYMBOL_HOLDER) / Object.keys(SETTINGS.DISCRETE_BREAKPOINTS).length;
</script>

<main>
	{#if $gameStore.matchLogic.isPicker}
		{#if SETTINGS.CONTINUOUS_RESPONSIVENESS}
			{@const sizeCont = Math.min(
				Math.max($gameStore.screenSize / 2, SETTINGS.MIN_SYMBOL_HOLDER),
				SETTINGS.MAX_SYMBOL_HOLDER
			)}
			<div class="picker-wrapper cont" style:width="{sizeCont}px">
				<SymbolPicker symbolHolderSize={sizeCont} />
			</div>
		{:else}
			<div
				bind:clientWidth={sizeDiscr}
				class="picker-wrapper discr"
				style:--min-width="{SETTINGS.MIN_SYMBOL_HOLDER}px"
				style:--small-width="{SETTINGS.MIN_SYMBOL_HOLDER + incr}px"
				style:--medium-width="{SETTINGS.MIN_SYMBOL_HOLDER + 2 * incr}px"
				style:--large-width="{SETTINGS.MIN_SYMBOL_HOLDER + 3 * incr}px"
				style:--max-width="{SETTINGS.MAX_SYMBOL_HOLDER}px"
			>
				<SymbolPicker symbolHolderSize={sizeDiscr} />
			</div>
		{/if}
	{:else}
		<Result />
	{/if}
</main>

<style>
	main {
		color: white;
		flex-grow: 1; /*child of .page in App.svelte*/
		display: flex;
		align-items: center;
	}
	:global(:is(.media-M,.media-L,.media-XL)) main{
		margin-top: 1.2em; /*Offsetting anchors in SymbolPicker.svelte by *1.1 causes the top symbol to overflow*/
	}

	.picker-wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		margin: 0 auto;
		aspect-ratio: 1 / 1; /*sets height equal to (dynamic) width*/
	}

	.picker-wrapper.discr {
		width: var(--min-width);
		transition: width 0.1s; /*sizeDiscr doesn't update on load without this*/
	}
	:global(.media-S) .picker-wrapper.discr {
		width: var(--small-width);
	}
	:global(.media-M) .picker-wrapper.discr {
		width: var(--medium-width);
	}
	:global(.media-L) .picker-wrapper.discr {
		width: var(--large-width);
	}
	:global(.media-XL) .picker-wrapper.discr {
		width: var(--max-width);
	}
</style>
