<script>
	import { onMount } from "svelte";
	import { Header, Main, Footer } from "$comps";
	import { gameStore } from "$scripts/store.js";
	import { SETTINGS } from "$lib/my-config.js";

	//checks localStorage for existing save and loads it
	onMount(() => {
		const loaded = JSON.parse(localStorage.getItem("rpsSave"));
		gameStore.loadSave(loaded);
	});

	let innerWidth; //binded to window.innerWidth
	let mediaNames = Object.keys(SETTINGS.DISCRETE_BREAKPOINTS).map((name) => "media-" + name);
	let breakpoints = Object.values(SETTINGS.DISCRETE_BREAKPOINTS);

	/**
	 * Keeps store's screenSize value updated (if continuous) and applies the correct class to body depending on screen size
	 * A better approach for future projects would be that bigger screen sizes apply all media-X classes from the smallest to the current one
	 * So that ":global(.media-M) .myDiv" would target all screen sizes that are at media-M or bigger
	 * Instead of having to do ":global(:is(.media-M, [...all the bigger ones])) .my-div"
	 * It would also make things easier after adding a new breakpoint in the config file
	 */
	$: if (innerWidth) {
		if (SETTINGS.CONTINUOUS_RESPONSIVENESS) {
			gameStore.setScreen(innerWidth);
		}

		//finds index of current media
		let i = -1;
		breakpoints.forEach((el) => {
			if (innerWidth >= el) i++;
		});

		if (!document.body.classList.contains(mediaNames[i])) {
			document.body.classList.remove(...mediaNames);
			if (mediaNames[i]) {
				document.body.classList.add(mediaNames[i]);
			}
		}
	}
</script>

<svelte:window bind:innerWidth />
<svelte:head>
	<link
		href="https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@600;700"
		rel="stylesheet"
	/>
</svelte:head>

<div class="page">
	<Header />
	<Main />
	<Footer />
</div>

<style>
	:root {
		/*variables*/
		--dark-text: hsl(229, 25%, 31%);
		--score-text: hsl(229, 64%, 46%);
		--header-outline: hsl(217, 16%, 45%);
		/*
		For the next project, add a font size here, change it as needed with media queries, and define all css sizes with rem instead of px/em
		However, adding the media-X classes to the body as I did is still useful when sizes aren't the only thing that changes, such as the positioning of the elements in Result.svelte
		Or maybe something like this? font-size: clamp([min size], 4vw, [max size]);
		*/
	}

	:global(body) {
		background: radial-gradient(circle at top, hsl(214, 47%, 23%), hsl(237, 49%, 15%));
	}

	.page {
		display: flex; /*main has flex-grow set to 1*/
		flex-direction: column;
		height: 100vh;
	}
</style>
