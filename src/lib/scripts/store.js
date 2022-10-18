import { writable } from "svelte/store";
import { whoWon } from "$scripts/whoWon.js";

/*
There should be some code here to check I think LocalStorage, if there isn't anything you use cleanState, but if there is something then you use that
*/
const cleanState = {
	bonusMode: 0, //0==>three symbols, 1==>five symbols
	currentPoints: [0, 0], //first is normal mode points, second is bonus mode points
	test: 0,
	matchLogic: {
		isPicker: true,
		playerSymbol: "",
		houseSymbol: "",
		winner: "",
	},

	get getPoints() {
		return this.currentPoints[this.bonusMode];
	},
	get symbolNames() {
		//the game name is actually wrong, the correct order is spock lizard, not lizard spock
		return ["ROCK", "PAPER", "SCISSORS"].concat(this.bonusMode ? ["SPOCK", "LIZARD"] : []);
	},

	screenSize: 0, //only used if CONTINUOUS_RESPONSIVENESS is set to true in my-config.js
};

function createStore() {
	//initialize store
	const tempStore = writable(cleanState);

	//define custom store methods
	tempStore.switchMode = () => {
		tempStore.update((draft) => {
			draft.bonusMode = 1 - draft.bonusMode; //toggles 0 and 1
			draft.test++;
			return draft;
		});
		tempStore.saveGame();
	};

	tempStore.resetScore = () => {
		tempStore.update((draft) => {
			draft.currentPoints[draft.bonusMode] = 0;
			draft.test++;
			return draft;
		});
	};

	tempStore.playMatch = (n) => {
		tempStore.update((draft) => {
			draft.matchLogic.isPicker = false;
			draft.matchLogic.playerSymbol = n;
			let houseChoice = Math.floor(Math.random() * draft.symbolNames.length);
			draft.matchLogic.houseSymbol = draft.symbolNames[houseChoice];
			let w = whoWon(draft.symbolNames.indexOf(n), houseChoice);
			if (w >= 0) {
				if (draft.symbolNames[w] == draft.matchLogic.playerSymbol) {
					draft.matchLogic.winner = "PLAYER";
					draft.currentPoints[draft.bonusMode]++;
				} else {
					draft.matchLogic.winner = "HOUSE";
					draft.currentPoints[draft.bonusMode]--;
				}
				draft.test++;
			} else {
				draft.matchLogic.winner = "DRAW";
			}
			return draft;
		});
		tempStore.saveGame();
	};

	tempStore.newMatch = () => {
		tempStore.update((draft) => {
			draft.matchLogic.isPicker = true;
			draft.matchLogic.playerSymbol = "";
			draft.matchLogic.houseSymbol = "";
			draft.matchLogic.winner = "";
			return draft;
		});
	};

	tempStore.setScreen = (n) => {
		tempStore.update((draft) => {
			draft.screenSize = n;
			return draft;
		});
	};

	tempStore.loadSave = (save) => {
		const { mode = 0, points = [0, 0] } = save || {}; //gives default values to mode and points whether save is an object or null/undefined
		tempStore.update((draft) => {
			draft.bonusMode = mode;
			draft.currentPoints = points;
			return draft;
		});
	};

	tempStore.saveGame = () => {
		tempStore.update((draft) => {
			const save = { mode: draft.bonusMode, points: draft.currentPoints };
			localStorage.setItem("rpsSave", JSON.stringify(save));
			return draft;
		});
	};

	//remove standard store methods with object destructuring and return store
	//eslint-disable-next-line
	const { set, update, ...returnStore } = tempStore;
	return returnStore; // subscribe, switchMode, resetScore, playMatch, newMatch, setScreen, loadSave, saveGame
}

export const gameStore = createStore();
