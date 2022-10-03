<script>
	import { gameStore } from "$scripts/store.js";
	import { Button } from "$comps";

	let logoPath = "/images/logo.svg";
	$: logoMod = $gameStore.bonusMode ? "-bonus" : "";
	$: logoPath = "/images/logo" + logoMod + ".svg";
</script>

<!--temp-->
<div style="text-align: center; color: white; margin: 0; margin-bottom: -40px;">
	<p class="temp">/*TEMP*/ current media is:</p>
</div>
<!--end-temp-->

<header>
	<div class="logo-holder">
		<img alt="logo{logoMod}" src={logoPath} />
	</div>
	<Button func={gameStore.switchMode} disable={!$gameStore.matchLogic.isPicker}>Change!</Button>
	<div class="score-box">
		<span class="score-text">SCORE</span>
		<span class="score-number">{$gameStore.getPoints}</span>
	</div>
</header>

<style>
	/*temp*/
	.temp::after {
		content: " none, technically XS";
	}
	:global(.media-S) .temp::after {
		content: " S";
	}
	:global(.media-M) .temp::after {
		content: " M";
	}
	:global(.media-L) .temp::after {
		content: " L";
	}
	:global(.media-XL) .temp::after {
		content: " XL";
	}
	/*end-temp*/
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		border: 3px solid var(--header-outline);
		color: whitesmoke;
		border-radius: 20px;
		margin: 50px auto;
		padding: 20px 30px;
		max-width: 800px;
		height: 120px;
		font-size: 20px; /*Button has font-size: inherit*/
	}

	.logo-holder {
		height: 100%;
		width: 200px;
	}

	img {
		height: 100%;
		width: auto;
	}

	.score-box {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background: white;
		align-self: stretch;
		border-radius: 10px;
		font-weight: bold;
		width: 200px;
		letter-spacing: 2px;
	}
	.score-text {
		color: var(--score-text);
		margin-top: 5px;
	}
	.score-number {
		color: var(--dark-text);
		font-size: 70px;
	}
</style>
