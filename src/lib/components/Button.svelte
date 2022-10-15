<script>
	export let func, disable = false;
</script>

<button on:click={func} disabled={disable}>
	<slot />
</button>

<style>
	button {
		background: transparent;
		border: 2px solid rgba(255,255,255,0.55);
		border-radius: 0.6em;
		color: white;
		padding: 0.6em;
		margin: 0.15em 0.4em;
		font-size: inherit;
		cursor: pointer;
		letter-spacing: 0.1em;
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
</style>
