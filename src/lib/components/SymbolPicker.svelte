<script>
	import { scale } from "svelte/transition";
	import { Polygon, Symbol } from "$comps";
	import { gameStore } from "$scripts/store.js";
	import { vertexFinder } from "$scripts/vertexFinder.js";
	import { SETTINGS } from "$lib/my-config.js";

	export let symbolHolderSize;

	$: symbolRadius = symbolHolderSize / ($gameStore.bonusMode ? 6.1 : 4.8);
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

{#key $gameStore.bonusMode}
	<div
		class="anchor-holder"
		style:width="{anchorHolderRadius * 2}px"
		style:height="{anchorHolderRadius * 2}px"
		in:scale={{ delay: 200, duration: 400, start: 0.6 }}
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
{/key}

<style>
	.anchor-holder {
		border-radius: 100%;
		transform: scale(1); /*the transition makes a jump without this when not in bonus mode*/
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
