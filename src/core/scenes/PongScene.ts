import { AbstractEntity } from "../../common/abstracts/Entity.abstract";
import { AbstractScene } from "../../common/abstracts/Scene.abstract";
import { Manager } from "../Manager";
import { DuckEntity } from "../entities/Duck.entity";

export class PongScene extends AbstractScene {
	public children: AbstractEntity[] = [];
	constructor() {
		super();
		const DUCK = new DuckEntity();
		DUCK.x = (Manager.width - DUCK.width) / 2;
		DUCK.y = (Manager.height - DUCK.height) / 1.5;
		this.addChild(DUCK);
		this.calculateBounds();
		// console.log(this.getBounds());
	}

	public resize(screenWidth: number, screenHeight: number): void {
		// throw new Error("Method not implemented.");
	}
	public update(framesPassed: number): void {
		for (const child of this.children) {
			child.update(framesPassed);
		}
	}
}
