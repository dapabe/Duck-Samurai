import { LoaderScene } from "./LoaderScene";
import { MenuScene } from "./MenuScene";
import { PongScene } from "./PongScene";

export const SCENE_LIST = {
	Loader: () => new LoaderScene(),
	Menu: () => new MenuScene(),
	Game: () => new PongScene(),
};
