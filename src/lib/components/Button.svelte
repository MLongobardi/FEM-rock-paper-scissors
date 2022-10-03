<script>
    export let func, disable = false;
</script>

<button on:click={func} disabled={disable}>
    <slot></slot>
</button>

<style>
    button {
		background: transparent;
		border: 2px solid var(--header-outline);
		border-radius: 10px;
		color: white;
		padding: 10px 12px;
		margin: 2px 10px;
		font-size: inherit;
		cursor: pointer;
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