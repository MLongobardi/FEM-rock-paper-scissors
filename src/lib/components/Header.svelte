<script>
	import { gameStore } from "$scripts/store.js";
	import { Button } from "$comps";

	let logoPath = "/images/logo.svg";
	$: logoMod = $gameStore.bonusMode ? "-bonus" : "";
	$: logoPath = "/images/logo" + logoMod + ".svg";
</script>

<span class="spacer-1" />
<header>
	<img alt="logo{logoMod}" src={logoPath} />
	<div class="score-box">
		<h4 class="score-text">SCORE</h4>
		<span class="score-number">{$gameStore.getPoints}</span>
	</div>
</header>
<span class="spacer-2" />
<div class="button-holder">
	<Button func={gameStore.switchMode} disable={!$gameStore.matchLogic.isPicker}>CHANGE</Button>
</div>

<style>
	header {
		display: grid;
		grid-template-areas: "logo . score";
		grid-template-columns: 3.2em 1fr 5em;
		width: 75%;
		border: 3px solid var(--header-outline);
		border-radius: 0.5em;
		margin: 0 auto;
		padding: 0.7em;
		padding-left: 1.2em;
		max-width: 650px;
	}
	:global(:is(.media-M, .media-L, .media-XL)) header {
		grid-template-columns: 4.5em 1fr 6em
	}

	.spacer-1, .spacer-2 {
		flex-basis: 1.9em;
		min-height: 0.3em;
		flex-shrink: 1;
	}
	.spacer-2 {
		flex-basis: 0.8em;
	}

	img {
		width: 100%;
		height: auto;
		align-self: center;
	}

	.score-box {
		grid-area: score;
		text-align: center;
		background: white;
		border-radius: 0.3em;
		padding-top: 0.8em;
		padding-bottom: 0.2em;
	}
	:global(:is(.media-M, .media-L, .media-XL)) .score-box {
		padding: 0.5em 0;
	}
	
	.score-text {
		color: var(--score-text);
		margin: 0;
		font-size: 0.65em;
		letter-spacing: 0.1em;
	}
	.score-number {
		color: var(--dark-text);
		font-size: 2.6em;
		font-weight: bold;
	}
	.button-holder {
		height: 0;
	}
	:global(:is(.media-L, .media-XL)) .button-holder {
		height: auto;
	}
	.button-holder :global(button) {
		display: block;
		margin: 0 auto;
		width: 9em;
	}

	:global(.media-S) header {
		font-size: 18px;
	}
	:global(.media-M) header {
		font-size: 21px;
	}
	:global(.media-L) header {
		font-size: 23px;
	}
	:global(.media-XL) header {
		font-size: 27px;
	}
</style>
