<script>
	import { gameStore } from "$scripts/store.js";
	let logoPath = "/images/logo.svg";
	$: logoMod = $gameStore.bonusMode ? "-bonus" : "";
	$: logoPath = "/images/logo" + logoMod + ".svg";
</script>

<header>
	<!--
	<div style:font-size={120/$gameStore.symbolNames.length+"px"}>
		{#each $gameStore.symbolNames as symbolName}
			<h3 class="symbol-title">{symbolName}</h3>
		{/each}
	</div>
	-->
	<img alt="logo{logoMod}" src={logoPath}/>
	<div class="score-box">
		<span class="score-text">SCORE</span>
		<span class="score-number">{$gameStore.getPoints}</span>

	</div>
</header>

<style>
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
