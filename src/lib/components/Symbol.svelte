<script>
	import { gameStore } from "$scripts/store.js";
	import { SETTINGS } from "$lib/my-config.js";
	export let name,
		radius,
		pickerVersion,
		isHouse = false,
		isWinner = false,
		isDraw = false;
	$: iconPath = "/images/icon-" + name + ".svg";

	function conditionalEvent(element) {
		if (pickerVersion) {
			element.addEventListener("click", () => {
				gameStore.playMatch(name.toUpperCase());
			});
		}
	}
	
	let hiding = isHouse;
	if (hiding) {
		setTimeout(() => {
			hiding = false;
		}, SETTINGS.RESULT_DELAY);
	}
</script>

<div
	class="symbol"
	class:in-picker={pickerVersion}
	class:in-result={!pickerVersion}
	class:hiding
	class:is-winner={isWinner}
	class:is-draw={isDraw}
	id="symbol-{name}"
	style:width={pickerVersion ? radius * 2 + "px" : "8em"}
	style:height={pickerVersion ? radius * 2 + "px" : "8em"}
	style:background="linear-gradient(var(--{name}-top), var(--{name}-bottom))"
	style:font-size="{pickerVersion ? radius * 0.3 : "inherit"}px"
	style:--animation-delay={SETTINGS.RESULT_DELAY * 1.1 + "ms"}
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
		transition: all 0.2s;
	}

	.symbol {
		border-radius: 100%;
		box-shadow: inset 0px -0.333em 2px 0 rgba(0, 0, 0, 0.3);

		--scissors-bottom: hsl(39, 89%, 49%);
		--scissors-top: hsl(40, 84%, 53%);
		--paper-bottom: hsl(230, 89%, 62%);
		--paper-top: hsl(230, 89%, 65%);
		--rock-bottom: hsl(349, 71%, 52%);
		--rock-top: hsl(349, 70%, 56%);
		--lizard-bottom: hsl(261, 73%, 60%);
		--lizard-top: hsl(261, 72%, 63%);
		--spock-bottom: hsl(189, 59%, 53%);
		--spock-top: hsl(189, 58%, 57%);
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

	.symbol.in-picker {
		transform: translate(-50%, -50%);
		cursor: pointer;
	}
	.symbol.is-winner {
		animation: winner;
		animation-duration: 2s;
		animation-delay: var(--animation-delay);
		animation-fill-mode: forwards;
	}
	.symbol.in-result:not(.is-winner, .is-draw) {
		animation: loser;
		animation-duration: 2s;
		animation-delay: var(--animation-delay);
		animation-fill-mode: forwards;
	}
	.symbol.hiding {
		background: transparent !important;
		transform: scale(0.8);
		box-shadow: none;
	}
	.symbol.hiding .symbol-inner {
		background-color: rgba(0, 0, 0, 0.2);
		transform: scale(1.25);
		box-shadow: none;
	}
	.symbol.hiding .symbol-inner img {
		display: none;
	}

	@keyframes winner {
		33% {
			box-shadow: inset 0px -0.333em 2px 0 rgba(0, 0, 0, 0.3), 0 0 0 1.8em rgba(255, 255, 255, 0.05);
		}
		66% {
			box-shadow: inset 0px -0.333em 2px 0 rgba(0, 0, 0, 0.3), 0 0 0 1.8em rgba(255, 255, 255, 0.05),
				0 0 0 3.6em rgba(255, 255, 255, 0.03);
		}
		100% {
			box-shadow: inset 0px -0.333em 2px 0 rgba(0, 0, 0, 0.3), 0 0 0 1.8em rgba(255, 255, 255, 0.05),
				0 0 0 3.6em rgba(255, 255, 255, 0.03), 0 0 0 5.4em rgba(255, 255, 255, 0.02);
		}
	}

	@keyframes loser {
		100% {
			filter: grayscale(1);
			opacity: 0.7;
			transform: scale(0.8);
		}
	}
</style>
