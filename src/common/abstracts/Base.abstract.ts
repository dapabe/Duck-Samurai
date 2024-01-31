import { Container } from "pixi.js";
import { IScene } from "../types";

export abstract class AbsBase extends Container implements IScene {
	constructor() {
		super();
	}
	/**
	 *	Game Life-cycle method.
	 */
	public abstract update(framesPassed: number): void;
}
