<script>
	/*
	//standard way
	import Header from "$lib/components/Header.svelte"
	import Main from "$lib/components/Main.svelte"
	import Footer from "$lib/components/Footer.svelte"
	*/

	//_exporter.js OPTION 1
	import { Header, Main, Footer } from "$comps";

	/*
	//_exporter.js OPTION 2
	import components from "$comps";
	const { Header, Main, Footer } = components;
	*/

	import { gameStore } from "$scripts/store.js";
	import { SETTINGS } from "$lib/my-config.js";

	let innerWidth; //binded to window.innerWidth
	let mediaNames = Object.keys(SETTINGS.DISCRETE_BREAKPOINTS).map((name) => "media-" + name);
	let breakpoints = Object.values(SETTINGS.DISCRETE_BREAKPOINTS);

	//Keeps store's screenSize value updated and applies the correct class to body depending on screen size
	$: if (innerWidth) {
		if (SETTINGS.CONTINUOUS_RESPONSIVENESS) {
			/*
			If you plan to make the condition dynamic (say, using prefers-reduced-motion?) add:
				document.body.classList.remove(...mediaNames);
			here and put the code after this if block in an else
			*/
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
	<link href="https://fonts.googleapis.com/css?family=Barlow+Semi+Condensed:wght@600;700"	rel="stylesheet"/>
</svelte:head>

<Header />
<Main />
<Footer />

<style>
	:root {
		/*variables*/
		--dark-text: hsl(229, 25%, 31%);
		--score-text: hsl(229, 64%, 46%);
		--header-outline: hsl(217, 16%, 45%);
		--scissors-bottom: hsl(39, 89%, 49%);
		--scissors-top: hsl(40, 84%, 53%);
		--paper-bottom: hsl(230, 89%, 62%);
		--paper-top: hsl(230, 89%, 65%);
		--rock-bottom: hsl(349, 71%, 52%);
		--rock-top: hsl(349, 70%, 56%);
		--lizard-bottom: hsl(261, 73%, 60%);
		--lizard-top: hsl(261, 72%, 63%);
		--spock-bottom: hsl(189, 59%, 53%);
		--spock-top: hsl(189, 58%, 57%);
	}

	:global(body) {
		background: radial-gradient(circle at top, hsl(214, 47%, 23%), hsl(237, 49%, 15%));
	}

	/*
	:global(.media-XL) div {
		//desktop version css
	}
	*/
</style>
