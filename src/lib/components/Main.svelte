<script>
	import components from "$comps";
	const { Symbol } = components;

	import { gameStore } from "$scripts/store.js";
	import { vertexFinder } from "$scripts/vertexFinder.js";
	import { SETTINGS } from "$lib/my-config.js";

	//Initialize
	let symbolHolderSize = Math.min(
		Math.max($gameStore.screenSize / 2, SETTINGS.MIN_SYMBOL_HOLDER),
		SETTINGS.MAX_SYMBOL_HOLDER
	);
	let symbolSize = symbolHolderSize / 3;
	let anchorHolderSize = symbolHolderSize - symbolSize;
	let radius = anchorHolderSize / 2;

	//Make reactive. There has to be a better way.
	$: symbolHolderSize = Math.min(
		Math.max($gameStore.screenSize / 2, SETTINGS.MIN_SYMBOL_HOLDER),
		SETTINGS.MAX_SYMBOL_HOLDER
	);
	$: symbolSize = symbolHolderSize / 3;
	$: anchorHolderSize = symbolHolderSize - symbolSize;
	$: radius = anchorHolderSize / 2;
	$: vertexList = vertexFinder($gameStore.symbolNames.length, radius); //values are altered to make them conform to the design, can toggle in my-config.js
</script>

<main>
	<h2>MAIN</h2>
	<div class="symbol-holder" style:width="{symbolHolderSize}px" style:height="{symbolHolderSize}px">
		<div
			class="anchor-holder"
			style:width="{anchorHolderSize}px"
			style:height="{anchorHolderSize}px"
		>
			<span class="anchor-origin">
				{#each $gameStore.symbolNames as symbolName, index}
					<span
						class="symbol-anchor"
						style:left="{vertexList[index][0]}px"
						style:bottom="{vertexList[index][1]}px"
					>
						<Symbol name={symbolName} coords={vertexList[index]} size={symbolSize} />
					</span>
				{/each}
			</span>
		</div>
	</div>
</main>

<style>
	main {
		background: orange;
		margin: 10px;
		padding: 10px;
	}

	.symbol-holder {
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		background: red;
		margin: 0 auto;
	}

	.anchor-holder {
		background: darkred;
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
