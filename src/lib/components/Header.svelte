<script>
	import { fly } from "svelte/transition";
	import { gameStore } from "$scripts/store.js";
	import { Button } from "$comps";

	let logoPath = "/images/logo.svg";
	$: logoMod = $gameStore.bonusMode ? "-bonus" : "";
	$: logoPath = "/images/logo" + logoMod + ".svg";

	/*Svelte has a bug with out:[something] transitions inside #key blocks, so this is a workaround*/
	let scoreDisplay = $gameStore.getPoints;
	function updatePoints() {
		scoreDisplay = $gameStore.getPoints;
		return "";
	}
</script>

<hr />
<header>
	<div class="header" class:bonus={$gameStore.bonusMode}>
		<img alt="logo{logoMod}" src={logoPath} />
		<h1 class="invisible-title">{$gameStore.symbolNames.join(" ") + " GAME"}</h1>
		<div class="score-box">
			<h2 class="score-text">SCORE</h2>
			{#key $gameStore.detectChange}
				{updatePoints()}
				<div class="score-number" in:fly={{ delay: 200, duration: 600, y: -8 }}>{scoreDisplay}</div>
			{/key}
		</div>
	</div>
	<div class="button-holder">
		<Button func={gameStore.switchMode} disable={!$gameStore.matchLogic.isPicker}>CHANGE</Button>
	</div>
</header>

<style>
	header {
		z-index: 1;
	}
	
	.header {
		display: grid;
		grid-template-areas: "logo . score";
		grid-template-columns: 5.5em 1fr 5em;
		width: 75%;
		border: 3px solid var(--header-outline);
		border-radius: 0.5em;
		margin: 0 auto;
		padding: 0.5em;
		padding-left: 1.1em;
		max-width: 650px;
	}
	.header.bonus {
		grid-template-columns: 3.2em 1fr 5em;
	}
	:global(:is(.media-M, .media-L, .media-XL)) .header {
		grid-template-columns: max-content 1fr 6em;
	}

	hr {
		border: none;
		margin: 0;
		flex-basis: 1.9em;
		min-height: 0.3em;
		flex-shrink: 1;
	}
	:global(:is(.media-M, .media-L, .media-XL)) hr {
		flex-basis: 3em;
	}

	img {
		margin: -0.05em; /*logo has a bit of empty space on all borders except top one*/
		margin-top: 0;
		align-self: center;
		width: 100%;
	}

	.invisible-title {
		/*h1 tag must be present for accessibility purposes, but design doesn't have a text title*/
		border: 0;
		clip: rect(0 0 0 0);
		height: 1px;
		margin: -1px;
		overflow: hidden;
		padding: 0;
		position: absolute;
		width: 1px;
	}

	.score-box {
		grid-area: score;
		display: flex;
		flex-direction: column;
		justify-content: center;
		text-align: center;
		background: white;
		border-radius: 0.3em;
		padding-top: 0.8em;
		padding-bottom: 0.2em;
		margin: 0.1em;
	}
	:global(:is(.media-M, .media-L, .media-XL)) .score-box {
		padding: 0.5em 0 0.35em 0;
	}

	.score-text {
		color: var(--score-text);
		margin: 0;
		font-size: 0.65em;
		letter-spacing: 0.1em;
	}
	.score-number {
		color: var(--dark-text);
		font-size: 2.3em;
		font-weight: bold;
	}
	.button-holder {
		margin-top: 0.8em;
		height: 0;
	}
	:global(:is(.media-M, .media-L, .media-XL)) .button-holder {
		height: auto;
	}
	.button-holder :global(button) {
		display: block;
		margin: 0 auto;
		width: 8em;
	}

	:global(.media-S) .header {
		font-size: 18px;
	}
	:global(.media-M) .header {
		font-size: 21px;
	}
	:global(.media-L) .header {
		font-size: 23px;
	}
	:global(.media-XL) .header {
		font-size: 27px;
	}
</style>
