<script>
	export let name;
    export let coords;
</script>

<div class="symbol">
	<p>{name}</p>
    <p>{coords}</p>
</div>

<style>
	.symbol {
		transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
		background: lightblue;
		height: 150px;
		width: 150px;
        border-radius: 100%;
	}

    p {
        margin: 2px;
    }
</style>
