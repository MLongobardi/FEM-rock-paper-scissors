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

	//Keeps store's screenSize value updated and applies .big-screen class to body when it is larger than MOBILE_BREAKPOINT
	$: if (innerWidth) {
		gameStore.setScreen(innerWidth);
		if ($gameStore.screenSize >= SETTINGS.MOBILE_BREAKPOINT) {
			document.body.classList.add("big-screen");
		} else {
			document.body.classList.remove("big-screen");
		}
	}
</script>

<svelte:window bind:innerWidth />
<svelte:head>
	<link href="https://fonts.googleapis.com/css?family=Barlow+Semi+Condensed:wght@600;700" rel="stylesheet">
</svelte:head>

<Header />
<Main />
<Footer />

<!--temp-->
<div style="background: white">
	<button on:click={gameStore.switchMode}>test Mode</button>
	<button on:click={gameStore.decreaseScore}>test Dec</button>
	<button on:click={gameStore.increaseScore}>test Inc</button>
	<button on:click={gameStore.resetScore}>test Res</button>

	bonusMode: {$gameStore.bonusMode}
	currentScore: {$gameStore.getPoints}
</div>

<!--end temp-->
<style>
	:root {
		/*variables*/
		--dark-text: hsl(229, 25%, 31%);
		--score-text: hsl(229, 64%, 46%);
		--header-outline: hsl(217, 16%, 45%);
		/*
		Scissors Gradient: hsl(39, 89%, 49%) to hsl(40, 84%, 53%)
		- Paper Gradient: hsl(230, 89%, 62%) to hsl(230, 89%, 65%)
		- Rock Gradient: hsl(349, 71%, 52%) to hsl(349, 70%, 56%)
		- Lizard Gradient: hsl(261, 73%, 60%) to hsl(261, 72%, 63%)
		- Cyan: hsl(189, 59%, 53%) to hsl(189, 58%, 57%)
		*/
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
	:global(.big-screen) div {
		//desktop version css
	}
	*/
</style>
