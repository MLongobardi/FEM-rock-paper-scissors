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
		gap: 4em;
		font-size: 14px;
		margin: 2.5em auto 0 auto;
	}
	:global(.media-S) .result-wrapper {
		row-gap: 0;
	}
	:global(:is(.media-M, .media-L, .media-XL)) .result-wrapper {
		align-self: start;
		grid-template-areas: "player result house";
		grid-template-columns: repeat(3, max-content);
		margin-top: 0.5em;
		gap: 2.2em;
	}

	.pick {
		display: flex;
		flex-direction: column-reverse;
		align-items: center;
		grid-area: player;
		gap: 2em;
	}
	.pick.house {
		grid-area: house;
	}
	:global(:is(.media-M, .media-L, .media-XL)) .pick {
		flex-direction: column;
	}

	.pick-header {
		font-size: 1em;
		font-weight: normal;
		letter-spacing: 0.1em;
		margin: 0;
	}
	:global(:is(.media-M, .media-L, .media-XL)) .pick-header {
		font-size: 0.75em;
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
		margin-top: 1.6em;
	}

	.result h2 {
		font-size: 2em;
		font-weight: 600;
		margin: 0.25em 0;
	}
	:global(:is(.media-M, .media-L, .media-XL)) .result h2 {
		font-size: 1.75em;
	}

	.result button {
		background: white;
		padding: 1em 0;
		border: none;
		border-radius: 0.5em;
		font-size: 0.55em;
		align-self: stretch;
		color: var(--dark-text);
		letter-spacing: 0.2em;
	}
	.result button:hover {
		color: crimson;
	}
	:global(:is(.media-M, .media-L, .media-XL)) button {
		padding: 0.9em 0;
		font-size: 0.5em;
	}

	:global(.media-S) .result-wrapper {
		font-size: 19px;
	}
	:global(.media-M) .result-wrapper {
		font-size: 23.5px;
	}
	:global(.media-L) .result-wrapper {
		font-size: 28.5px;
	}
	:global(.media-XL) .result-wrapper {
		font-size: 33px;
	}
</style>
