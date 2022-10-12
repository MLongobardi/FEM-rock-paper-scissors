# Frontend Mentor - Rock, Paper, Scissors solution

This is a solution to the [Rock, Paper, Scissors challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rock-paper-scissors-game-pTgwgvgH). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the game depending on their device's screen size
- Play Rock, Paper, Scissors against the computer
- Maintain the state of the score after refreshing the browser
- **Bonus**: Play Rock, Paper, Scissors, Lizard, Spock against the computer

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://github.com/MLongobardi/FEM-rock-paper-scissors)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Svelte](https://svelte.dev/) - JS framework
- [Sveltekit](https://kit.svelte.dev/) - Svelte framework

### What I learned

I decided to do this challenge with Svelte to familiarize myself with this fun framework. It is also the first project I do from scratch so I learned how to create one from the console, and gave some thought on how to organize my folder structure.

Because of Svelte's nature, each component has its relative HTML, CSS and JS all included in a single file. Instead of repeating the same, multiple media queries for every component, I decided to use Svelte's bind functionality to listen to window width changes, and use that to apply a class to the body depending on specific breakpoints I wrote in a config file. In this way, when writing css that determines how a component looks on larger screen sizes (with a mobile-first approach), I could do it like this:

```css
.my-div {
  /*rules for mobile*/
}

:global(:is(.media-M, .media-L, .media-XL)) .my-div {
  /*rules for larger screen sizes*/
}
```

This allows me to, for example, change the breakpoints in the config file, and know that the change will correctly apply everywhere, instead of having to edit every single media query in every single component. I am particularly thankful to the ```:is()``` css selector, which avoided unwieldy style names.

### Continued development

I noticed after a certain point that using em units and setting different font sizes for different screen sizes was an easier way to make the app responsive. In hindsight, I should have set font sizes once on the root element, and then used rem units instead of em.

### Useful resources

- [Svelte tutorial](https://svelte.dev/tutorial/basics) and [Svelte docs](https://svelte.dev/docs) - For obvious reasons, it's hard to learn a new framework without any kind of instruction. I found these to be really well done, though I still need to finish a few sections.

## Author

- GitHub - [@Mlongobardi](https://github.com/MLongobardi)
- Frontend Mentor - [@Mlongobardi](https://www.frontendmentor.io/profile/MLongobardi)