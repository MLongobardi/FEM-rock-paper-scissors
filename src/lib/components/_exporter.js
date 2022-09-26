//OPTION 1
//Works, the problem is I need to write these on my own
//The best possible way would be to make the compiler generate these lines on its own
//I have no idea how to do that though

export { default as App } from "./App.svelte";
export { default as Header } from "./Header.svelte";
export { default as Main } from "./Main.svelte";
export { default as Footer } from "./Footer.svelte";
export { default as Symbol } from "./Symbol.svelte";
export { default as Polygon } from "./Polygon.svelte";
export { default as SymbolPicker } from "./SymbolPicker.svelte";
export { default as Result } from "./Result.svelte";

/*
//OPTION 2
//Works, but I have no idea if there are some efficiency issues
//For example, it's possible that I am importing all the components rather than only the ones I actually use
//I hope Svelte is smarter than me

//Actually, it fails to load components when vite triggers some reloads, such as when I edit my-config.js
//But that should only be a problem for when I run npm run dev -- --open right? Right?

//No, it also forces me to refresh the page to see some changes, so it's too annoying
const modules = import.meta.glob("./*.svelte", { eager: true });
const components = {};

for (const path in modules) {
	let name = path.replace("./", "").replace(".svelte", "");
    if (name != "App") {
        //for some reason it doesn't work with App
        //it took me a whole day to find out that was the problem
        components[name] = modules[path].default;
    }
}

export default components;
*/
