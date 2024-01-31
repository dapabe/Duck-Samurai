import { Application } from "pixi.js";
import Palette from "tailwindcss/colors";
import { $ } from "../common/helpers";
import { Controls } from "./Controls";
import { AbstractScene } from "../common/abstracts/Scene.abstract";

export class Manager {
	private static app: Application;
	private static currentScene: AbstractScene;

	public static get width(): number {
		return Math.max(
			document.documentElement.clientWidth,
			window.innerWidth || 0
		);
	}
	public static get height(): number {
		return Math.max(
			document.documentElement.clientHeight,
			window.innerHeight || 0
		);
	}

	public static init(): void {
		Controls.init();
		Manager.app = new Application<HTMLCanvasElement>({
			view: $<HTMLCanvasElement>("#app"),
			resizeTo: window, // This line here handles the actual resize!
			resolution: window.devicePixelRatio || 1,
			autoDensity: true,
			background: Palette.green[500],
			width: Manager.width,
			height: Manager.height,
		});
		Manager.app.ticker.add(Manager.update);
		// listen for the browser telling us that the screen size changed
		window.addEventListener("resize", Manager.resize);
	}

	public static resize(): void {
		if (Manager.currentScene) {
			Manager.currentScene.resize(Manager.width, Manager.height);
		}
	}

	public static changeScene(newScene: AbstractScene): void {
		if (Manager.currentScene) {
			Manager.app.stage.removeChild(Manager.currentScene);
			Manager.currentScene.destroy();
		}

		Manager.currentScene = newScene;
		Manager.resize();
		Manager.app.stage.addChild(Manager.currentScene);
		Manager.printDebug();
	}

	private static update(framesPassed: number): void {
		if (Manager.currentScene) {
			Manager.currentScene.update(framesPassed);
		}
	}

	public static printDebug(): void {
		console.log(Manager.currentScene.name);
	}
}
