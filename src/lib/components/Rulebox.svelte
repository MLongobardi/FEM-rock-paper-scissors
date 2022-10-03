<script>
	export let bonusMode, closeFunc;
</script>

<div class="rule-box">
	<h1 class="title">RULES</h1>

	{#if bonusMode}
		<img class="rules-image" alt="rules-bonus" src="/images/image-rules-bonus.svg" />
	{:else}
		<img class="rules-image" alt="rules" src="/images/image-rules.svg" />
	{/if}
    
    <img class="close-button" alt="rules" src="/images/icon-close.svg" on:click={closeFunc} />
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
        z-index: 2;
	}
    :global(:is(.media-M, .media-L, .media-XL)) .rule-box {
        grid-template-areas: "title close" "image image";
        grid-gap: 20px;
        justify-items: normal;
        width: auto;
        height: auto;
        border-radius: 10px;
        padding: 30px;
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
    }
    :global(:is(.media-M, .media-L, .media-XL)) .close-button {
        justify-self: end;
    }
</style>
