<script>
	import { gameStore } from "$scripts/store.js";
	import { Button } from "$comps";

	let logoPath = "/images/logo.svg";
	$: logoMod = $gameStore.bonusMode ? "-bonus" : "";
	$: logoPath = "/images/logo" + logoMod + ".svg";
</script>
<!--
<header>
	<div class="logo-box">
		<img alt="logo{logoMod}" src={logoPath} />
	</div>
	
	<div class="button-box">
		<Button func={gameStore.switchMode} disable={!$gameStore.matchLogic.isPicker}>Change!</Button>
	</div>
	
	<div class="score-box">
		<span class="score-text">SCORE</span>
		<span class="score-number">{$gameStore.getPoints}</span>
	</div>
</header>
-->
<header>
	<img alt="logo{logoMod}" src={logoPath} />
	<span>
	<Button func={gameStore.switchMode} disable={!$gameStore.matchLogic.isPicker}>Change!</Button>
	</span>
	<div class="score-box">
		<span class="score-text">SCORE</span>
		<span class="score-number">{$gameStore.getPoints}</span>
	</div>
</header>

<style>
	
	header {
		display: grid;
		grid-template-areas: "logo score" "button button";
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 2fr 1fr;
		row-gap: 0.5em;
		border: 0.15em solid var(--header-outline);
		border-radius: 0.8em;
		margin: 1em auto;
		padding: 0.7em;
		max-width: 800px;
	}
	:global(:is(.media-S, .media-M, .media-L, .media-XL)) header {
		grid-template-areas: "logo button score";
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: 1fr;
		gap: 2.5em;
	}
	
	img {
		height: 100%;
	}

	span {
		grid-area: button;
		align-self: center;
		justify-self: center;
		font-size: 0.7em;
	}

	.score-box {
		grid-area: score;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background: white;
		align-self: stretch;
		border-radius: 0.4em;
		font-weight: bold;
		letter-spacing: 0.1em;
	}
	.score-text {
		color: var(--score-text);
		margin-top: 0.2em;
	}
	.score-number {
		color: var(--dark-text);
		font-size: 2.6em;
	}
	/**********************
	header {
		//display: flex;
		//justify-content: space-between;
		//align-items: center;
		
		display: grid;
		grid-template-areas: "logo score" "button button";
		grid-template-rows: 2fr 1fr;
		place-content: center;
		

		border: 0.15em solid var(--header-outline);
		color: whitesmoke;
		border-radius: 0.8em;
		margin: 1.4em auto;
		padding: 0.9em 1.4em;
		max-width: 25em;
		height: 4em;
		font-size: 16px;
	}
	:global(:is(.media-S, .media-M, .media-L, .media-XL)) header {
		grid-template-areas: "logo button score";
		grid-template-rows: 1fr;
		gap: 2.5em;
	}
	
	.logo-box {
		grid-area: logo;
		//height: 100%;
		//width: 8em;
	}

	img {
		height: 100%;
		width: auto;
	}

	.button-box {
		display: flex;
		place-content: center;
		grid-area: button;
		font-size: 0.7em;
	}

	.score-box {
		grid-area: score;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background: white;
		align-self: stretch;
		border-radius: 0.4em;
		font-weight: bold;
		width: 8em;
		letter-spacing: 0.1em;
	}
	.score-text {
		color: var(--score-text);
		margin-top: 0.2em;
	}
	.score-number {
		color: var(--dark-text);
		font-size: 2.6em;
	}
	*/
	:global(.media-S) header {
		font-size: 19px;
	}
	:global(.media-M) header {
		font-size: 22px;
	}
	:global(.media-L) header {
		font-size: 27px;
	}
	:global(.media-XL) header {
		font-size: 33px;
	}
</style>
