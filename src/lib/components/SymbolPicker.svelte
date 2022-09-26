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

	import { gameStore } from "$scripts/store.js";
	import { vertexFinder } from "$scripts/vertexFinder.js";
	import { SETTINGS } from "$lib/my-config.js";
	
	$: symbolHolderSize = Math.min(
		Math.max($gameStore.screenSize / 2, SETTINGS.MIN_SYMBOL_HOLDER),
		SETTINGS.MAX_SYMBOL_HOLDER
	);
	$: symbolRadius = symbolHolderSize / 6;
	$: anchorHolderRadius = (symbolHolderSize - symbolRadius * 2) / 2;
	$: lineWidth = anchorHolderRadius / 10;
	$: vertexList = vertexFinder($gameStore.symbolNames.length, anchorHolderRadius); //values are altered to make the symbol order conform to the design, can toggle in my-config.js
	
	function hack(list) {
		if (SETTINGS.HACK && list.length == 5) {
			list = ["SCISSORS", "SPOCK", "LIZARD", "ROCK", "PAPER"];
		}

		return list;
	}
</script>

<div class="symbol-picker" style:width="{symbolHolderSize}px" style:height="{symbolHolderSize}px">
	<div
		class="anchor-holder"
		style:width="{anchorHolderRadius * 2}px"
		style:height="{anchorHolderRadius * 2}px"
	>
		<span class="anchor-origin">
			<Polygon {vertexList} {lineWidth} />
			{#each hack($gameStore.symbolNames) as symbolName, index (vertexList[index].id)}
				<!--multiplying left and bottom values by 1.1 moves anchors outwards a bit while Polygon stays the same-->
				<span
					class="symbol-anchor"
					style:left="{vertexList[index].x * 1.1}px"
					style:bottom="{vertexList[index].y * 1.1}px"
				>
					<Symbol
						name={symbolName.toLowerCase()}
						coords={vertexList[index]}
						radius={symbolRadius}
					/>
				</span>
			{/each}
		</span>
	</div>
</div>

<style>
	.symbol-picker {
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		margin: 0 auto;
	}

	.anchor-holder {
		border-radius: 100%;
	}

	.anchor-origin {
		/*allows me to use the center of .symbol-holder as the origin for anchors coordinates*/
		position: absolute;
		top: 50%;
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
