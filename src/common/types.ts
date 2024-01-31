import { DisplayObject } from "pixi.js";

export interface IScene extends DisplayObject {
	/**
	 *	Game lifecycle
	 * @param framesPassed number
	 */
	update(framesPassed: number): void;
}

export enum KeyCode {
	W = "KeyW",
	A = "KeyA",
	S = "KeyS",
	D = "KeyD",
	AttackUp = "ArrowUp",
	AttackRight = "ArrowRight",
	AttackDown = "ArrowDown",
	AttackLeft = "ArrowLeft",
}

export enum EntityStats {
	Speed,
}

export enum WeaponStats {
	ATK_SPEED,
	DMG,
}
