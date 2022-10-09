<script>
	import { fade } from "svelte/transition";
	import { Symbol } from "$comps";
	import { gameStore } from "$scripts/store.js";
	import { SETTINGS } from "$lib/my-config.js";

	let hiding = true;
	setTimeout(() => {
		hiding = false;
	}, SETTINGS.RESULT_DELAY * 0.8);
</script>

<div class="result-wrapper" in:fade>
	<div class="player pick">
		<h3 class="pick-header">YOU PICKED</h3>
		<Symbol
			name={$gameStore.matchLogic.playerSymbol.toLowerCase()}
			radius={false}
			pickerVersion={false}
			isWinner={$gameStore.matchLogic.winner == "PLAYER"}
			isDraw={$gameStore.matchLogic.winner == "DRAW"}
		/>
	</div>
	
	<div class="house pick">
		<h3 class="pick-header">THE HOUSE PICKED</h3>
		<Symbol
			name={$gameStore.matchLogic.houseSymbol.toLowerCase()}
			radius={false}
			pickerVersion={false}
			isHouse={true}
			isWinner={$gameStore.matchLogic.winner == "HOUSE"}
			isDraw={$gameStore.matchLogic.winner == "DRAW"}
		/>
	</div>

	<div class="result" class:hiding>
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
		place-content: center;
		gap: 2em;
		font-size: 16px;
		max-width: 25em;
		margin: 2em auto;
	}
	:global(:is(.media-M, .media-L, .media-XL)) .result-wrapper {
		grid-template-areas: "player result house";
		grid-template-columns: repeat(3, max-content);
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
		font-size: 0.65em;
		letter-spacing: 0.1em;
		margin: 0;
	}

	.result {
		grid-area: result;
		justify-self: center;
		align-self: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		transition: all 0.4s;
		font-size: 2em;
	}
	.result.hiding {
		font-size: 0 !important;
	}
	:global(:is(.media-M, .media-L, .media-XL)) .result {
		font-size: 1em;
	}

	.result h2 {
		font-size: 1.3em;
		margin: 0.3em 0;
	}

	button {
		background: white;
		padding: 0.7em 0;
		border: none;
		border-radius: 0.3em;
		font-size: 0.4em;
		align-self: stretch;
		color: var(--dark-text);
		font-weight: bold;
		letter-spacing: 0.1em;
	}

	:global(.media-S) .result-wrapper {
		font-size: 19px;
	}
	:global(.media-M) .result-wrapper {
		font-size: 22px;
	}
	:global(.media-L) .result-wrapper {
		font-size: 27px;
	}
	:global(.media-XL) .result-wrapper {
		font-size: 33px;
	}
</style>
