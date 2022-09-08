<script>
	import Header from '$comps/Header.svelte';
	import Main from '$comps/Main.svelte';
	import { onMount } from "svelte";

	const MOBILE_BREAKPOINT = 375;
	let screenSize;
	$: isBigScreen = screenSize >= MOBILE_BREAKPOINT;
	let documentBody;
	
	onMount(()=>{
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

<h1>HELLO WORLD {screenSize ? screenSize : '[...]'}</h1>

<hr />

<Header />
<Main />

<style>
	:global(.big-screen) {
		background: green;
	}
</style>
