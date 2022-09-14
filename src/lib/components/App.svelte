<script>
	import components from "$comps";
	const { Header, Main, Footer } = components;

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

<Header />
<Main />
<Footer />

<!--temp-->
<div style="background: white">
	<button on:click={gameStore.switchMode}>test Mode</button>
	<button on:click={gameStore.decreaseScore}>test Dec</button>
	<button on:click={gameStore.increaseScore}>test inc</button>
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
	}

	:global(body) {
		background: radial-gradient(circle at top, hsl(214, 47%, 23%), hsl(237, 49%, 15%));
	}

	:global(.big-screen) div {
		/*desktop css*/
	}
</style>
