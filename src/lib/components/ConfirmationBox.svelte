<script>
	export let reset, close;
</script>

<div class="confirmation-box">
	<p>This will reset your score for the current mode. Are you sure?</p>
	<div>
		<button on:click={close}>Go back</button>
		<!--prettier-ignore-->
		<button	on:click={() => {reset(); close()}}>Reset</button>
	</div>
</div>

<style>
	.confirmation-box {
		background: white;
		color: var(--dark-text);
        width: 23em;
        max-width: 85%;
        box-sizing: border-box;
		padding: 1.7em;
		border-radius: 0.6em;
		z-index: 3;
	}
    :global(:is(.media-M, .media-L, .media-XL)) .confirmation-box {
        font-size: 1.2em;
    }

	p {
		margin-top: 0;
	}

    p + div {
        display: flex;
        justify-content: end;
    }

	button {
		color: inherit;
		padding: 0.15em 1em;
		border-radius: 0.2em;
		border: 2px solid var(--dark-text);
	}
	button:nth-of-type(2) {
		background: var(--dark-text);
		color: white;
		margin-left: 0.4em;
	}
</style>
