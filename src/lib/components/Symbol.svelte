<script>
	import { gameStore } from "$scripts/store.js";
	export let name, radius, pickerVersion;
	$: iconPath = "/images/icon-" + name + ".svg";

	function conditionalEvent(element) {
		if (pickerVersion) {
			element.addEventListener("click",()=>{gameStore.playMatch(name.toUpperCase())})
		}
	}
</script>

<div
	class="symbol"
	class:in-picker={pickerVersion}
	class:in-result={!pickerVersion}
	id="symbol-{name}"
	style:width={pickerVersion ? radius * 2+"px" : "8em"}
	style:height={pickerVersion ? radius * 2+"px" : "8em"}
	style:background="linear-gradient(var(--{name}-top), var(--{name}-bottom))"
	style:font-size="{pickerVersion ? radius * 0.3 : "inherit"}px"
	use:conditionalEvent
>
	<div class="symbol-inner">
		<img alt="icon-{name}" src={iconPath} />
	</div>
</div>

<style>
	:global(.symbol-anchor):hover {
		transform: scale(1.15);
		transition: transform 0.3s ease-out;
	}

	.symbol,
	.symbol-inner {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.symbol {
		border-radius: 100%;
		box-shadow: inset 0px -0.333em 2px 0 rgba(0, 0, 0, 0.3);
	}
	.symbol.in-picker {
		transform: translate(-50%, -50%);
		cursor: pointer;
	}
	
	.symbol-inner {
		background: white;
		border-radius: 100%;
		height: 75%;
		width: 75%;
		box-shadow: inset 0px 0.3em 2px 0 rgba(0, 0, 0, 0.2);
	}

	img {
		height: 50%;
		width: auto;
	}
</style>
