import { Container, Graphics, Assets } from "pixi.js";
import { manifest } from "../../assets";
import { IScene } from "../../common/types";
import { Manager } from "../Manager";
import { MenuScene } from "./MenuScene";

export class LoaderScene extends Container implements IScene {
	public name = LoaderScene.name;
	// for making our loader graphics...
	private loaderBar: Container;
	private loaderBarBoder: Graphics;
	private loaderBarFill: Graphics;
	constructor() {
		super();

		// lets make a loader graphic:
		const loaderBarWidth = Manager.width * 0.8; // just an auxiliar variable
		// the fill of the bar.
		this.loaderBarFill = new Graphics();
		this.loaderBarFill.beginFill(0x008800, 1);
		this.loaderBarFill.drawRect(0, 0, loaderBarWidth, 50);
		this.loaderBarFill.endFill();
		this.loaderBarFill.scale.x = 0; // we draw the filled bar and with scale we set the %

		// The border of the bar.
		this.loaderBarBoder = new Graphics();
		this.loaderBarBoder.lineStyle(10, 0x0, 1);
		this.loaderBarBoder.drawRect(0, 0, loaderBarWidth, 50);

		// Now we keep the border and the fill in a container so we can move them together.
		this.loaderBar = new Container();
		this.loaderBar.addChild(this.loaderBarFill);
		this.loaderBar.addChild(this.loaderBarBoder);
		//Looks complex but this just centers the bar on screen.
		this.loaderBar.position.x = (Manager.width - this.loaderBar.width) / 2;
		this.loaderBar.position.y = (Manager.height - this.loaderBar.height) / 2;
		this.addChild(this.loaderBar);

		// Start loading!

		this.initializeLoader().then(() => {
			// Remember that constructors can't be async, so we are forced to use .then(...) here!
			// Delete gamebar and change scene
			this.removeChild(this.loaderBar);
			Manager.changeScene(new MenuScene());
		});
	}

	private async initializeLoader(): Promise<void> {
		try {
			await Assets.init({ manifest });

			const bundleIds = manifest.bundles.map((bundle) => bundle.name);
			// The second parameter for `loadBundle` is a function that reports the download progress!
			await Assets.loadBundle(bundleIds, this.downloadProgress.bind(this));
		} catch (error) {
			console.warn(error);
		}
	}

	private downloadProgress(progressRatio: number): void {
		// progressRatio goes from 0 to 1, so set it to scale
		this.loaderBarFill.scale.x = progressRatio;
	}

	public update() {}
	public resize() {}
}
