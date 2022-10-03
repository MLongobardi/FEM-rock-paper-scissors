<script>
	import { Symbol } from "$comps";
	import { gameStore } from "$scripts/store.js";
</script>


<div class="result-wrapper">
	<div class="player pick">
		<h3 class="pick-header">YOU PICKED</h3>
		<Symbol name={$gameStore.matchLogic.playerSymbol.toLowerCase()} radius={false} pickerVersion={false}/>
	</div>
	
	<div class="house pick">
		<h3 class="pick-header">THE HOUSE PICKED</h3>
		<Symbol name={$gameStore.matchLogic.houseSymbol.toLowerCase()} radius={false} pickerVersion={false}/>
	</div>

	<div class="result">
		{#if $gameStore.matchLogic.winner == "DRAW"}
			<h2>DRAW</h2>
		{:else}
			<h2>YOU {$gameStore.matchLogic.winner == "PLAYER" ? "WIN" : "LOSE"}</h2>
		{/if}
		<button on:click={gameStore.newMatch}>PLAY AGAIN</button>
	</div>
</div>

<style>
	.result-wrapper {
		display: grid;
		grid-template-areas: "player house" "result result";
		font-size: 16px;
	}
	:global(:is(.media-M, .media-L, .media-XL)) .result-wrapper {
		grid-template-areas: "player result house";
	}

	.pick {
		display: flex;
		flex-direction: column-reverse;
		align-items: center;
		grid-area: player;
		gap: 1.5em;
	}
	.pick.house {
		grid-area: house;
	}
	:global(:is(.media-M, .media-L, .media-XL)) .pick {
		flex-direction: column;
	}
	
	.pick-header {
		font-size: 0.7em;
		letter-spacing: 3px;
		margin: 0;
	}
	
	.result {
		grid-area: result;
		justify-self: center;
		align-self: center;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	
	.result h2 {
		font-size: 1.6em;
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
</style>
