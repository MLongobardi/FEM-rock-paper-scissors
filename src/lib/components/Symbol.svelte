<script>
	export let name, coords, size;
</script>

<div class="symbol" style:width="{size}px" style:height="{size}px">
	<p>{name}</p>
	<p>{coords}</p>
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
