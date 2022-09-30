<script>
	import { gameStore } from "$scripts/store.js";

	let overlay;

	function toggleRules() {
		if (overlay.style.display == "none") {
			overlay.style.display = "flex";
		} else {
			overlay.style.display = "none";
		}
	}
</script>

<footer>
	<div class="buttons">
		<button on:click={gameStore.resetScore}>RESET SCORE</button>
		<button on:click={toggleRules}>RULES</button>
	</div>
	<p class="attribution">
		Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
			>Frontend Mentor</a
		>. Coded by
		<a href="https://github.com/MLongobardi/FEM-rock-paper-scissors" target="_blank">Mlongobardi</a
		>.
	</p>
</footer>
<div class="overlay" bind:this={overlay} on:click={toggleRules}>
	<div class="rule-box">
		<div class="rule-box-header">
			<h2>RULES</h2>
			<!--img-->
		</div>

		{#if $gameStore.bonusMode}
			<img alt="rules-bonus" src="/images/image-rules-bonus.svg" />
		{:else}
			<img alt="rules" src="/images/image-rules.svg" />
		{/if}
	</div>
</div>

<style>
	footer {
		max-width: 1200px;
		margin: 0 auto;
	}

	.buttons {
		display: flex;
		justify-content: space-between;
	}

	.overlay {
		display: none;
		position: fixed;
		top: 0;
		justify-content: center;
		align-items: center;
		width: 100vw;
		height: 100vh;
		background: rgba(0, 0, 0, 0.6);
		z-index: 1000;
	}

	.rule-box {
		background: white;
	}

	/*copied from Header.svelte, could be worth it to make a Button.svelte but with only two buttons in the whole app it's probably not worth it*/
	button {
		background: transparent;
		border: 2px solid var(--header-outline);
		border-radius: 10px;
		color: white;
		padding: 10px 12px;
		font-size: 20px;
		cursor: pointer;
	}
	button:hover {
		background: white;
		color: var(--dark-text);
		border: 2px solid white;
		transition: all 0.2s;
	}
	button:active {
		background: transparent;
		color: white;
	}
	button:disabled {
		background: transparent;
		color: var(--header-outline);
		border: 2px solid var(--header-outline);
	}

	.attribution {
		color: white;
		font-size: 11px;
		text-align: center;
	}
	.attribution a {
		color: hsl(228, 45%, 44%);
	}
</style>
