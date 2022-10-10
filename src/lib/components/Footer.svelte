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
		<Button func={gameStore.resetScore}>RESET SCORE</Button>
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
		width: 100%;
		max-width: 1200px;
		margin: 0 auto;
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.buttons-holder {
		display: flex;
		width: 100%;
		justify-content: center;
		max-width: 280px;
		font-size: 15px;
		margin: 0 auto;
	}
	:global(:is(.media-M, .media-L, .media-XL)) .buttons-holder {
		justify-content: space-between;
		margin-top: -1.5em;
		font-size: 18px;
		max-width: 1200px;
	}

	.buttons-holder :global(button) {
		flex-basis: 50%;
	}

	:global(:is(.media-M, .media-L, .media-XL)) .buttons-holder :global(button) {
		flex-basis: 12%;
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
		color: white;
		font-size: 0.7em;
		text-align: center;
	}
	.attribution a {
		color: hsl(228, 45%, 44%);
	}
</style>
