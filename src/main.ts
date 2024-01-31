import "./style.css";
import { LoaderScene } from "./core/scenes/LoaderScene";
import { Manager } from "./core/Manager";

window.onload = () => {
	Manager.init();
	Manager.changeScene(new LoaderScene());
};
