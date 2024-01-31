import { AbsBase } from "./Base.abstract";

/**
 * 	Derived from the base `Container` of Pixi.js
 */
export abstract class AbstractScene extends AbsBase {
	constructor() {
		super();
		super.name = this.constructor.name;
		super.eventMode = "dynamic";
	}
	/**
	 *  Method executed on window.resize and first in-game render.
	 */
	public abstract resize(screenWidth: number, screenHeight: number): void;
}
