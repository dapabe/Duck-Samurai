import { KeyCode } from "../common/types";

export class Controls {
	public static readonly Pressed = new Map<KeyCode, boolean>();
	// public static readonly TAP_MODE = true;

	public static init() {
		document.addEventListener("keydown", Controls.keyDown);
		document.addEventListener("keyup", Controls.keyUp);
	}

	private static keyDown(e: KeyboardEvent): void {
		if (!Controls.Pressed.get(e.code as KeyCode)) {
			// La tecla no estaba previamente presionada, ejecutar lógica aquí
			Controls.Pressed.set(e.code as KeyCode, true);
			// console.log(`${e.code} presionada por primera vez`);
		}
	}
	private static keyUp(e: KeyboardEvent): void {
		Controls.Pressed.set(e.code as KeyCode, false);
	}
}
