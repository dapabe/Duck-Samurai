import { DisplayObject } from "pixi.js";
import { AbsBase } from "./Base.abstract";

/**
 * 	Derived from the base `Container` of Pixi.js
 */
export abstract class AbstractEntity extends AbsBase {
	constructor() {
		super();
		// this.parent.calculateBounds();
	}

	protected isIntersecting(objA: DisplayObject, objB: DisplayObject) {
		const a = objA.getBounds();
		const b = objB.getBounds();

		const rightmostLeft = a.left < b.left ? b.left : a.left;
		const leftmostRight = a.right > b.right ? b.right : a.right;

		if (leftmostRight <= rightmostLeft) return false;

		const bottommostTop = a.top < b.top ? b.top : a.top;
		const topmostBottom = a.bottom > b.bottom ? b.bottom : a.bottom;

		return topmostBottom > bottommostTop;
	}
}
