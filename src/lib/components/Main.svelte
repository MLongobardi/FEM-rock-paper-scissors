<script>
	import Symbol from "$comps/Symbol.svelte";
	import { gameStore } from "$scripts/store.js";

	let symbolHolder;
	let holderSize = 600;

	//TEST
	let sideLength = 150;

	function vertexFinder(n, l) {
		//vertices of regular polygon with n sides of length l, assuming origin is at center and one vertex is on the y axis

		function rounder(num) {
			return Math.round(num * 100) / 100;
		}

		let vertices = [];
		let th = Math.PI / 2;
		let d = (2 * Math.PI) / n;

		for (let i = 0; i < n; i++) {
			vertices.push([rounder(l * Math.cos(th + i * d)), rounder(l * Math.sin(th + i * d))]);
		}

		return vertices;
	}

	function hack(list, mode) {
		//list of hacks to make result closer to design
		if (!mode) {
			//inverts triangle in normal mode
			list.map((el) => {
				el[1] *= -1;
			});
		} else {
			//shifts symbols in the correct order in bonus mode
			list = [3,4,0,2,1].map((el)=>list[el]);
		}

		return list;
	}

	$: vertexList = hack(
		vertexFinder($gameStore.symbolNames.length, sideLength),
		$gameStore.bonusMode
	);
</script>

<main>
	<h2>MAIN {vertexList}</h2>
	<div
		bind:this={symbolHolder}
		class="symbol-holder"
		style:width="{holderSize}px"
		style:height="{holderSize}px"
	>
		<div class="anchor-holder">
			{#each $gameStore.symbolNames as symbolName, index}
				<span
					class="symbol-anchor"
					style:left="{vertexList[index][0]}px"
					style:bottom="{vertexList[index][1]}px"
				>
					<Symbol name={symbolName} coords={vertexList[index]}/>
				</span>
			{/each}
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
		display: grid; /*temp, just for the visual grid that appears when you hover on the grid tag in the console*/
		grid-template-columns: repeat(8, 75px);
		grid-template-rows: repeat(8, 75px);
		position: relative;
		background: red;
		margin: 0 auto;
	}

	.anchor-holder {
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
