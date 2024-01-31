import { Graphics } from "pixi.js";
import { KeyCode, EntityStats } from "../types";
import { Controls } from "../../core/Controls";
import { AbstractEntity } from "./Entity.abstract";
import { AbstractWeaponEntity } from "./Weapon.abstract";
import { Manager } from "../../core/Manager";

export abstract class AbstractPlayerEntity extends AbstractEntity {
	private CTRLS = Controls.Pressed;
	private readonly STATS = new Map<EntityStats, number>();

	protected abstract HeldWeapon: AbstractWeaponEntity;

	constructor() {
		super();
		this.STATS.set(EntityStats.Speed, 10);

		const BOUNDS = {
			Width: 80,
			Height: 80,
		};

		const HitBox = new Graphics()
			.beginFill(0xffffff)
			.drawRect(0, 0, BOUNDS.Width, BOUNDS.Height)
			.endFill();

		this.addChild(HitBox);
		this.calculateBounds();
	}

	protected getStatSpeed() {
		return this.STATS.get(EntityStats.Speed) || 0;
	}

	protected setStatSpeed(amount: number) {
		this.STATS.set(EntityStats.Speed, this.getStatSpeed() + amount);
	}

	protected checkControls() {
		switch (true) {
			case this.CTRLS.get(KeyCode.W):
				this.y -= this.getStatSpeed();
				break;
			case this.CTRLS.get(KeyCode.A):
				this.x -= this.getStatSpeed();
				break;
			case this.CTRLS.get(KeyCode.S):
				this.y += this.getStatSpeed();
				break;
			case this.CTRLS.get(KeyCode.D):
				this.x += this.getStatSpeed();
				break;
		}
	}

	public update(framesPassed: number): void {
		this.checkControls();
		this.HeldWeapon.update(framesPassed);
		// console.log(this.parent.);
		// console.log(this.getGlobalPosition());
	}
}
