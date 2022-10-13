<script>
	/*
    //standard way
    import Symbol from "$lib/components/Symbol.svelte"
    import Polygon from "$lib/components/Polygon.svelte"
    */

	//_exporter.js OPTION 1
	import { Polygon, Symbol } from "$comps";

	/*
    //_exporter.js OPTION 2
    import components from "$comps";
    const { Symbol, Polygon } = components;
    */
	import { fade } from "svelte/transition";
	import { gameStore } from "$scripts/store.js";
	import { vertexFinder } from "$scripts/vertexFinder.js";
	import { SETTINGS } from "$lib/my-config.js";

	export let symbolHolderSize;

	$: symbolRadius = symbolHolderSize / 6;
	$: anchorHolderRadius = (symbolHolderSize - symbolRadius * 2) / 2;
	$: lineWidth = anchorHolderRadius / 7;
	$: vertexList = vertexFinder($gameStore.symbolNames.length, anchorHolderRadius); //values are altered to make the symbol order conform to the design, can toggle in my-config.js

	function hack(list) {
		if (SETTINGS.HACK && list.length == 5) {
			list = ["SCISSORS", "SPOCK", "LIZARD", "ROCK", "PAPER"];
		}
		return list;
	}
</script>

<div
	class="anchor-holder"
	style:width="{anchorHolderRadius * 2}px"
	style:height="{anchorHolderRadius * 2}px"
	in:fade
>
	<span
		class="anchor-origin"
		style:--variable-top={$gameStore.symbolNames.length == 3 ? "40%" : "50%"}
	>
		<Polygon {vertexList} {lineWidth} />
		{#each hack($gameStore.symbolNames) as symbolName, index (vertexList[index].id)}
			<!--multiplying left and bottom values by 1.1 moves anchors outwards a bit while Polygon stays the same-->
			<span
				class="symbol-anchor"
				style:left="{vertexList[index].x * 1.1}px"
				style:bottom="{vertexList[index].y * 1.1}px"
			>
				<Symbol name={symbolName.toLowerCase()} radius={symbolRadius} pickerVersion={true} />
			</span>
		{/each}
	</span>
</div>

<style>
	.anchor-holder {
		border-radius: 100%;
	}

	.anchor-origin {
		/*allows me to use the center of .symbol-holder as the origin for anchors coordinates*/
		position: absolute;
		top: var(--variable-top);
		left: 50%;
		width: 0;
		height: 0;
	}

	.symbol-anchor {
		position: absolute;
		width: 0;
		height: 0;
	}
</style>
