<script>
	export let name, coords, radius;
</script>

<div
	class="symbol"
	id="symbol-{coords.id}"
	style:width="{radius * 2}px"
	style:height="{radius * 2}px"
>
	<p>{name}</p>
	<p>{coords.x},{coords.y}</p>
	<p>{coords.id}</p>
</div>

<style>
	.symbol {
		transform: translate(-50%, -50%);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background: lightblue;
		border-radius: 100%;
	}

	p {
		margin: 2px;
	}
</style>
