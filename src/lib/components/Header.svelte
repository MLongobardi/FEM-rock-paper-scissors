<script>
	import { gameStore } from "$scripts/store.js";

	let logoPath = "/images/logo.svg";
	$: logoMod = $gameStore.bonusMode ? "-bonus" : "";
	$: logoPath = "/images/logo" + logoMod + ".svg";
</script>

<header>
	<div class="logo-holder">
	<img alt="logo{logoMod}" src={logoPath}/>
	</div>
	<button on:click={gameStore.switchMode} disabled={!$gameStore.matchLogic.isPicker}>Change!</button>
	<div class="score-box">
		<span class="score-text">SCORE</span>
		<span class="score-number">{$gameStore.getPoints}</span>

	</div>
</header>
<!--temp-->
<div style="text-align: center; color: white; margin: 0; margin-top: -40px;">
	<p class="temp">/*TEMP*/ current media is: </p>
</div>
<!--end-temp-->

<style>
	/*temp*/
		.temp::after {
			content: " none, technically XS";
		}
		:global(.media-S) .temp::after{
			content: " S";
		}
		:global(.media-M) .temp::after{
			content: " M";
		}
		:global(.media-L) .temp::after{
			content: " L";
		}
		:global(.media-XL) .temp::after{
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
	}
	
	.logo-holder {
		height: 100%;
		width: 200px;
	}

	img {
		height: 100%;
		width: auto;
	}

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
