<script>
	export let name, coords, radius;
	$: iconPath = "/images/icon-"+name+".svg";
</script>

<div
	class="symbol"
	id="symbol-{coords.id}"
	style:width="{radius * 2}px"
	style:height="{radius * 2}px"
	style:background="linear-gradient(var(--{name}-top), var(--{name}-bottom))"
>
	<div class="symbol-inner">
	<img alt="icon-{name}" src={iconPath}/>
	</div>
</div>

<style>
	.symbol, .symbol-inner {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.symbol {
		transform: translate(-50%, -50%);
		background: lightblue;
		border-radius: 100%;
		color: black;
		box-shadow: inset 0px -5px 2px 2px rgba(0,0,0,0.3)
	}

	.symbol-inner {
		background: white;
		border-radius: 100%;
		height: 75%;
		width: 75%;
		box-shadow: inset 0px 5px 2px 1px rgba(0,0,0,0.2)
	}
	
	img {
		height: 60%;
		width: auto;

	}
</style>
