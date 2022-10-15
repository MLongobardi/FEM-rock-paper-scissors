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
		if (SETTINGS.HACK && list.length == 3) {
			//inverts triangle in normal mode
			list.map((el) => {
				el.y *= -1;
			});
		}
		return list;
	}

	let vertices = [];
	let th = Math.PI / 2;
	let d = (2 * Math.PI) / n;

	for (let i = 0; i < n; i++) {
		let newVertex = {
			x: rounder(r * Math.cos(th + i * d)),
			y: rounder(r * Math.sin(th + i * d)),
			id: i + 1,
		};
		vertices = [...vertices, newVertex]
	}
	
	return hack(vertices);
}
