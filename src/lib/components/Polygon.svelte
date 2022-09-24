<script>
	export let vertexList, lineWidth;
</script>

<svg xmlns="http://www.w3.org/2000/svg">
	{#each vertexList as v1, index}
		{@const v2 = vertexList[(index + 1) % vertexList.length]}
		<line
			x1={v1.x}
			y1={v1.y * -1}
			x2={v2.x}
			y2={v2.y * -1}
			stroke="rgba(0,0,0,0.25)"
			stroke-width={lineWidth}
		/>
	{/each}
</svg>

<style>
	svg {
		position: absolute;
		width: 1px;
		height: 1px;
		overflow: visible;
	}
</style>
