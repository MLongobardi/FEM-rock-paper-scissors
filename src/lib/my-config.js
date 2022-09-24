export const SETTINGS = {
	CONTINUOUS_RESPONSIVENESS: true, //if set to true .symbol-holder width is a function of window width and breakpoints are ignored
	DISCRETE_BREAKPOINTS: { //mobile first
		S: 600, //portrait tablet
		M: 768, //landscape tablet
		L: 992, //laptop
		XL: 1200, //desktop
	},
	MIN_SYMBOL_HOLDER: 180, //min width for the symbol container
	MAX_SYMBOL_HOLDER: 600, //max width for the symbol container
	HACK: true, //enforces design look
	VERTEX_PRECISION: 2, //number of decimal digits in vertexFinder's coordinates
};
