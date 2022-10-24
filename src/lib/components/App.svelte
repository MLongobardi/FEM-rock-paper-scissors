<script>
	import { onMount } from "svelte";
	import { Loading, Header, Main, Footer } from "$comps";
	import { gameStore } from "$scripts/store.js";
	import { SETTINGS } from "$lib/my-config.js";

	let isLoading = true;

	//checks localStorage for existing save and loads it
	onMount(() => {
		const loaded = JSON.parse(localStorage.getItem("rpsSave"));
		gameStore.loadSave(loaded);
		setTimeout(() => {
			isLoading = false;
		}, 300);
	});

	let innerWidth; //binded to window.innerWidth
	let innerHeight; //binded to window.innerHeight
	let isLandscape, actualWidth;
	let mediaNames = Object.keys(SETTINGS.DISCRETE_BREAKPOINTS).map((name) => "media-" + name);
	let breakpoints = Object.values(SETTINGS.DISCRETE_BREAKPOINTS);

	/**
	 * Keeps store's screenSize value updated (if continuous) and applies the correct media class to body depending on screen size
	 * Maybe a better approach for future projects would be that bigger screen sizes apply all media-X classes from the smallest to the current one
	 * So that ":global(.media-M) .myDiv" would target all screen sizes that are at media-M or bigger
	 * Instead of having to do ":global(:is(.media-M, [...all the bigger ones])) .my-div"
	 * It would also make things easier after adding a new breakpoint in the config file
	 */
	$: if (innerWidth + innerHeight) { //executes code whenever one of these two values changes (and only if they are both defined)
		isLandscape = (innerWidth >= innerHeight) && (innerWidth <= breakpoints[2]);
		actualWidth = innerWidth;
		if (isLandscape) actualWidth = innerHeight;
		
		if (SETTINGS.CONTINUOUS_RESPONSIVENESS) {
			gameStore.setScreen(actualWidth);
		}
		
		//finds index of current media
		let i = -1;
		breakpoints.forEach((el) => {
			if (actualWidth >= el) i++;
		});

		if (!document.body.classList.contains(mediaNames[i])) {
			document.body.classList.remove(...mediaNames);
			if (mediaNames[i]) {
				document.body.classList.add(mediaNames[i]);
			}
		}
	}
</script>

<svelte:window bind:innerWidth bind:innerHeight/>
<svelte:head>
	<link
		href="https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@600;700"
		rel="stylesheet"
	/>
</svelte:head>

<div class="page">
	{#if isLoading}
		<Loading />
	{/if}
	<Header />
	<Main />
	<Footer />
</div>

<style>
	:root {
		font-family: "Barlow Semi Condensed", sans-serif;
		height: 100%;

		--dark-text: hsl(229, 25%, 31%);
		--score-text: hsl(229, 64%, 46%);
		--header-outline: hsl(217, 16%, 45%);
		--background-color: radial-gradient(circle at top, hsl(214, 47%, 23%), hsl(237, 49%, 15%));
	}

	:global(body) {
		background: var(--background-color);
		background-attachment: fixed;
	}

	.page {
		display: flex; /*main has flex-grow set to 1*/
		flex-direction: column;
		height: 100vh;
	}

	@media only screen and (orientation:landscape) and (max-width:992px) {
		/*had to use a media query for this because it's faster, or else the loading message isn't rotated properly for a split second*/
		.page {
			transform: rotate(90deg);
			transform-origin: bottom left;
			position: absolute;
			top: -100vw;
			height: 100vw;
			width: 100vh;
		}
	}
</style>
