import { BitmapFont, BitmapText } from "pixi.js";
import Palette from "tailwindcss/colors";

BitmapFont.from("comic 32", {
	fill: Palette.white,
	fontFamily: "Comic Sans MS",
	fontSize: 32,
});

const BitScore = new BitmapText("0", {
	fontName: "comic 32",
	fontSize: 32,
	tint: 0xfff,
});

export { BitScore };
