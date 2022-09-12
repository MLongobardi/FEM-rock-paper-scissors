<script>
	import Header from "$comps/Header.svelte";
	import Main from "$comps/Main.svelte";
	import Footer from "$comps/Footer.svelte";
	import { onMount } from "svelte";
	import { gameStore } from "$scripts/store.js";

	//Apply .big-screen class to body when screen is larger than MOBILE_BREAKPOINT
	const MOBILE_BREAKPOINT = 375; //actually, the style guide says that the design was done with 375px width, not that it should be the breakpoint...
	let screenSize;
	$: isBigScreen = screenSize >= MOBILE_BREAKPOINT; //pass isBigScreen as prop
	let documentBody;

	onMount(() => {
		documentBody = document.body;
	});

	$: if (documentBody) {
		if (isBigScreen) {
			documentBody.classList.add("big-screen");
		} else {
			documentBody.classList.remove("big-screen");
		}
	}
</script>

<svelte:window bind:innerWidth={screenSize} />

<Header />
<Main />
<Footer />

<div style="background: white">
<button on:click={gameStore.switchMode}>test Mode</button>
<button on:click={gameStore.decreaseScore}>test Dec</button>
<button on:click={gameStore.increaseScore}>test inc</button>
<button on:click={gameStore.resetScore}>test Res</button>

bonusMode: {$gameStore.bonusMode}
currentScore: {$gameStore.getPoints}
</div>

<style>
	:root {
		/*variables*/
		--dark-text: hsl(229, 25%, 31%);
		--score-text: hsl(229, 64%, 46%);
	}

	:global(body) {
		background: radial-gradient(circle at top, hsl(214, 47%, 23%), hsl(237, 49%, 15%));
	}

	:global(.big-screen) div {
		/*desktop css*/
	}
</style>
