<script>
	import { gameStore } from "$scripts/store.js";
	import { Button, Overlay, RuleBox, ConfirmationBox } from "$comps";

	let showRules = false;
	let showConfirmation = false;

	function toggleRules() {
		showRules = !showRules;
	}
	function toggleConfirmation() {
		showConfirmation = !showConfirmation;
	}
</script>

<footer>
	<div class="buttons-holder">
		<!--prettier-ignore-->
		<Button	func={toggleConfirmation} disable={$gameStore.getPoints == 0 || !$gameStore.matchLogic.isPicker}>RESET</Button>
		<Button func={toggleRules}>RULES</Button>
	</div>
	<!--prettier-ignore-->
	<p class="attribution">
		Challenge by <a href="https://www.frontendmentor.io/challenges/rock-paper-scissors-game-pTgwgvgH" target="_blank">Frontend Mentor</a>.
		Coded by <a href="https://github.com/MLongobardi/FEM-rock-paper-scissors" target="_blank">Mlongobardi</a>.
	</p>
</footer>

{#if showRules}
	<Overlay color="rgba(0, 0, 0, 0.6)" func={toggleRules}>
		<RuleBox bonusMode={$gameStore.bonusMode} close={toggleRules} />
	</Overlay>
{/if}
{#if showConfirmation}
	<Overlay color="rgba(0, 0, 0, 0.6)" func={toggleConfirmation}>
		<ConfirmationBox reset={gameStore.resetScore} close={toggleConfirmation}/>
	</Overlay>
{/if}

<style>
	footer {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.buttons-holder {
		display: flex;
		width: 95%;
		justify-content: center;
		max-width: 280px;
		margin: 0 auto;
	}
	:global(:is(.media-M, .media-L, .media-XL)) .buttons-holder {
		justify-content: space-between;
		margin-top: -2em;
		max-width: 1300px;
	}

	.buttons-holder :global(button) {
		flex-basis: 50%;
	}

	:global(:is(.media-M, .media-L, .media-XL)) .buttons-holder :global(button) {
		flex-basis: auto;
		width: 8em;
	}

	.attribution {
		margin-top: 3em;
		margin-bottom: 0.2em;
		color: white;
		font-size: 0.7em;
		text-align: center;
	}
	:global(:is(.media-M, .media-L, .media-XL)) .attribution {
		margin-top: 1em;
	}
	.attribution a {
		color: hsl(228, 45%, 44%);
	}
</style>
