<script>
	import { Symbol } from "$comps";
	import { gameStore } from "$scripts/store.js";
</script>


<div class="result-wrapper">
	<div class="player pick">
		<div class="pick-header">
			<h3>YOU PICKED</h3>
		</div>
		<Symbol name={$gameStore.matchLogic.playerSymbol.toLowerCase()} radius={false} pickerVersion={false}/>
	</div>
	
	<div class="house pick">
		<div class="pick-header">
			<h3>THE HOUSE PICKED</h3>
		</div>
		<Symbol name={$gameStore.matchLogic.houseSymbol.toLowerCase()} radius={false} pickerVersion={false}/>
	</div>
	
	<div class="break"/>

	<div class="result">
		{#if $gameStore.matchLogic.winner == "DRAW"}
			<h2>IT'S A DRAW</h2>
		{:else}
			<h2>YOU {$gameStore.matchLogic.winner == "PLAYER" ? "WIN" : "LOSE"}</h2>
		{/if}
		<button on:click={gameStore.newMatch}>PLAY AGAIN</button>
	</div>
</div>

<style>
	.result-wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		flex-wrap: wrap;
		font-size: 16px;
	}

	.break {
		flex-basis: 100%;
		height: 0;
		order: 3;
	}

	.pick {
		display: flex;
		flex-direction: column-reverse;
		align-items: center;
		margin: 0 2.5em;
	}
	.player {
		order: 1;
	}
	.house {
		order: 2;
	}
	
	.pick-header {
		font-size: 0.6em;
		letter-spacing: 3px;
		margin-bottom: 2em;
	}
	
	.result {
		order: 4;
	}
	
	.result h2 {
		font-size: 1.8em;
	}

	button {
		background: white;
		padding: 0.1em 1em;
	}
	
	:global(.media-S) .result-wrapper {
		font-size: 21px;
	}
	:global(.media-M) .result-wrapper {
		font-size: 25px;
	}
	:global(.media-L) .result-wrapper {
		font-size: 32px;
	}
	:global(.media-XL) .result-wrapper {
		font-size: 40px;
	}
	
	:global(.media-M) .pick, :global(.media-L) .pick, :global(.media-XL) .pick {
		flex-direction: column;
	}
	
	:global(.media-M) .result, :global(.media-L) .result, :global(.media-XL) .result {
		order: 1;
	}
</style>
