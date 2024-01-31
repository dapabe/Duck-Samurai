import { Manager } from "../Manager";
import { SCENE_LIST } from "./SCENE_LIST";
import { $ } from "../../common/helpers";
import { AbstractScene } from "../../common/abstracts/Scene.abstract";

export class MenuScene extends AbstractScene {
	private DOM_MENU = $<HTMLDivElement>("#MenuUI");
	private DOM_BTN_PLAY = $<HTMLButtonElement>("#MenuUI button");
	constructor() {
		super();
		this.DOM_MENU.classList.replace("hidden", "flex");
		this.DOM_BTN_PLAY.addEventListener("pointerup", () => {
			this.DOM_MENU.classList.replace("flex", "hidden");
			Manager.changeScene(SCENE_LIST.Game());
		});
	}

	public resize(screenWidth: number, screenHeight: number): void {}

	public update(framesPassed: number): void {}
}
