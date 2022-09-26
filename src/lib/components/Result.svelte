<script>
	import { gameStore } from "$scripts/store.js";
</script>

<h1>YOU PICKED {$gameStore.matchLogic.playerSymbol}, THE HOUSE PICKED {$gameStore.matchLogic.houseSymbol}</h1>
{#if $gameStore.matchLogic.winner != "DRAW"}
	<h2>You {$gameStore.matchLogic.winner == "PLAYER" ? "Won" : "Lost"}!</h2>
{:else}
	<h2>It's a draw!</h2>
{/if}
<br />
<h1 on:click={gameStore.newMatch}>PLAY AGAIN?</h1>

<style>
	h1,
	h2 {
		text-align: center;
	}
</style>
