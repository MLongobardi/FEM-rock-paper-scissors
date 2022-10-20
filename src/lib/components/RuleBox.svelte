<script>
	export let bonusMode, close;
</script>

<div class="rule-box" class:bonus={bonusMode}>
	<h1 class="title">RULES</h1>

	{#if bonusMode}
		<img class="rules-image" alt="rules-bonus" src="/images/image-rules-bonus.svg" />
	{:else}
		<img class="rules-image" alt="rules" src="/images/image-rules.svg" />
	{/if}

	<img class="close-button" alt="rules" src="/images/icon-close.svg" on:click={close} />
</div>

<style>
	.rule-box {
		display: grid;
		grid-template-areas: "title" "image" "close";
		justify-items: center;
		align-items: center;
		width: 100%;
		height: 100%;
		background: white;
		color: var(--dark-text);
		padding-top: 2.5em;
		padding-bottom: 1.5em;
		box-sizing: border-box;
		z-index: 3;
	}
	:global(:is(.media-M, .media-L, .media-XL)) .rule-box {
		grid-template-areas: "title close" "image image";
		grid-gap: 2.5em;
		justify-items: normal;
		width: auto;
		height: auto;
		border-radius: 0.6em;
		padding: 1.9em;
	}
	:global(:is(.media-M, .media-L, .media-XL)) .rule-box.bonus {
		grid-gap: 1.25em;
	}

	.title {
		grid-area: title;
		margin: 0;
	}

	.rules-image {
		grid-area: image;
	}

	.close-button {
		grid-area: close;
		padding-top: 1em;
	}
	:global(:is(.media-M, .media-L, .media-XL)) .close-button {
		justify-self: end;
	}
</style>
