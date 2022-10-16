//Normally you need to import Svelte components one by one, this allows me to import many at once in a single line and all from the same source.

export { default as App } from "./App.svelte";
export { default as Header } from "./Header.svelte";
export { default as Main } from "./Main.svelte";
export { default as Footer } from "./Footer.svelte";
export { default as Symbol } from "./Symbol.svelte";
export { default as Polygon } from "./Polygon.svelte";
export { default as SymbolPicker } from "./SymbolPicker.svelte";
export { default as Result } from "./Result.svelte";
export { default as Button } from "./Button.svelte";
export { default as Rulebox } from "./Rulebox.svelte";

/***************************************************************
 * I tried to come up with an alternative that wouldn't require me to write the export for each component by hand.
 * Technically I managed to get it to work, being able to import components like this:
 * * import components from "$comps";
 * * const { Header, Main, Footer } = components;
 * But there are many issues: it crashes when I edit some files (like my-config.js), and I have to refresh the page to see the result of some code edits.
 * Also I'm not knowledgeable enough of the inner workings of Svelte/Sveltekit to know this doesn't mess up something, even if it worked properly. 

const modules = import.meta.glob("./*.svelte", { eager: true });
const components = {};

for (const path in modules) {
	let name = path.replace("./", "").replace(".svelte", "");
	if (name != "App") {
	    //for some reason it doesn't work with App.svelte, probably because it's the highest level component?
	    //it took me a day to find out that was the problem, I kept getting "Cannot access 'default' before initialization"
        components[name] = modules[path].default;
	}
}

export default components;
**************************************************************/
