<script>
	export let reset, close;
    import { Button } from "$comps"
</script>

<div class="confirmation-box">
	This will reset your score for the current mode. Are you sure?<br>
	<!--prettier-ignore-->
	<button	on:click={() => {reset(); close()}}>Yes</button>
	<button on:click={close}>No</button>
</div>

<style>
    .confirmation-box {
        background: white;
        color: var(--dark-text);
        padding: 1.9em;
        border-radius: 0.6em;
        z-index: 3;
    }

    button {
        color: inherit;
    }
</style>
