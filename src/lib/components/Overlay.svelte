<script>
    export let color, func = undefined;
</script>

<div class="overlay" style:background={color} on:click|self={func}>
    <slot></slot>
</div>

<style>
    .overlay {
        display: flex;
		position: fixed;
		top: 0;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
		z-index: 2;
    }
</style>