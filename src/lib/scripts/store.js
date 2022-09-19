import { writable } from "svelte/store";

/*
There should be some code here to check I think LocalStorage, if there isn't anything you use cleanState, but if there is something then you use that
*/

const cleanState = {
	bonusMode: 0, //0==>three symbols, 1==>five symbols
	currentPoints: [0, 0], //first is normal mode points, second is bonus mode points
	get getPoints() {
		return this.currentPoints[this.bonusMode];
	},
	get symbolNames() {
		return ["ROCK", "PAPER", "SCISSORS"].concat(this.bonusMode ? ["LIZARD", "SPOCK"] : []);
	},

	screenSize: 200, //window innerWidth
};

function createStore() {
	//initialize store
	const tempStore = writable(cleanState);

	//define custom store methods
	tempStore.switchMode = () => {
		tempStore.update((draft) => {
			draft.bonusMode = 1 - draft.bonusMode; //toggles 0 and 1
			return draft;
		});
	};

	tempStore.increaseScore = () => {
		tempStore.update((draft) => {
			draft.currentPoints[draft.bonusMode]++;
			return draft;
		});
	};

	tempStore.decreaseScore = () => {
		tempStore.update((draft) => {
			draft.currentPoints[draft.bonusMode]--;
			return draft;
		});
	};

	tempStore.resetScore = () => {
		tempStore.update((draft) => {
			draft.currentPoints[draft.bonusMode] = 0;
			return draft;
		});
	};

	tempStore.setScreen = (n) => {
		tempStore.update((draft) => {
			draft.screenSize = n;
			return draft;
		});
	};

	//remove standard store methods with object destructuring and return store
	//eslint-disable-next-line
	const { set, update, ...returnStore } = tempStore;
	return returnStore; // subscribe, switchMode, increaseScore, decreaseScore, resetScore
}

export const gameStore = createStore();
