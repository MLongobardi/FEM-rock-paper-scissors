<script>
	import { gameStore } from "$scripts/store.js";
	import { Button, Rulebox } from "$comps";

	let overlay;

	function toggleRules() {
		overlay.classList.toggle("hidden");
	}
</script>

<footer>
	<div class="buttons-holder">
		<Button func={gameStore.resetScore}>RESET</Button>
		<Button func={toggleRules}>RULES</Button>
	</div>
	<p class="attribution">
		Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
			>Frontend Mentor</a
		>. Coded by
		<a href="https://github.com/MLongobardi/FEM-rock-paper-scissors" target="_blank">Mlongobardi</a
		>.
	</p>
</footer>

<div class="overlay hidden" bind:this={overlay} on:click|self={toggleRules}>
	<Rulebox bonusMode={$gameStore.bonusMode} closeFunc={toggleRules} />
</div>

<style>
	footer {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.buttons-holder {
		display: flex;
		width: 95%;
		justify-content: center;
		max-width: 300px;
		margin: 0 auto;
	}
	:global(:is(.media-M, .media-L, .media-XL)) .buttons-holder {
		justify-content: space-between;
		margin-top: -2em;
		max-width: inherit;
	}

	.buttons-holder :global(button) {
		flex-basis: 50%;
	}

	:global(:is(.media-M, .media-L, .media-XL)) .buttons-holder :global(button) {
		flex-basis: auto;
		width: 9em;
	}

	.overlay {
		display: flex;
		position: fixed;
		top: 0;
		justify-content: center;
		align-items: center;
		width: 100vw;
		height: 100vh;
		background: rgba(0, 0, 0, 0.6);
		z-index: 1;
	}
	.overlay.hidden {
		display: none;
	}

	.attribution {
		margin-top: 3em;
		margin-bottom: 0.2em;
		color: white;
		font-size: 0.7em;
		text-align: center;
	}
	:global(:is(.media-M, .media-L, .media-XL)) .attribution {
		margin-top: 0;
	}
	.attribution a {
		color: hsl(228, 45%, 44%);
	}
</style>
