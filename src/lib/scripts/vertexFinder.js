import { SETTINGS } from "$lib/my-config.js";

export function vertexFinder(n, r) {
	//vertices of regular polygon with n sides inscribed in circle of radius r, assuming origin is at center and one vertex is on the y axis

	function rounder(num) {
		return (
			Math.round(num * Math.pow(10, SETTINGS.VERTEX_PRECISION)) /
			Math.pow(10, SETTINGS.VERTEX_PRECISION)
		);
	}

	function hack(list) {
		//list of hacks to make result conform to design
		if (list.length == 3) {
			//inverts triangle in normal mode
			list.map((el) => {
				el[1] *= -1;
			});
		} else if (list.length == 5) {
			//shifts symbols in the correct order in bonus mode
			list = [3, 4, 0, 2, 1].map((el) => list[el]);
		}
		return list;
	}

	let vertices = [];
	let th = Math.PI / 2;
	let d = (2 * Math.PI) / n;

	for (let i = 0; i < n; i++) {
		vertices.push([rounder(r * Math.cos(th + i * d)), rounder(r * Math.sin(th + i * d))]);
	}

	if (SETTINGS.VERTEX_HACK) return hack(vertices);
	return vertices;
}
