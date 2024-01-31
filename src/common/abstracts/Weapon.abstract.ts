import { Sprite } from "pixi.js";
import { Controls } from "../../core/Controls";
import { KeyCode, WeaponStats } from "../types";
import { AbstractEntity } from "./Entity.abstract";

export abstract class AbstractWeaponEntity extends AbstractEntity {
	private CTRLS = Controls.Pressed;
	protected readonly STATS = new Map<WeaponStats, number>();

	private ATTACK_DURATION = 500;
	private IsAttacking = false;

	constructor() {
		super();
	}

	protected getStatAttackSpeed(): number {
		return this.STATS.get(WeaponStats.ATK_SPEED) || 0;
	}
	protected getStatDamage(): number {
		return this.STATS.get(WeaponStats.DMG) || 0;
	}

	protected setStatAttackSpeed(amount: number) {
		this.STATS.set(WeaponStats.ATK_SPEED, this.getStatAttackSpeed() + amount);
	}
	protected setStatDamage(amount: number) {
		this.STATS.set(WeaponStats.DMG, this.getStatDamage() + amount);
	}

	protected createAttack() {
		const swing = Sprite.from("vite.svg");
		swing.x = this.parent.x;
		swing.y = this.parent.y;
		this.addChild(swing);

		setTimeout(() => {
			this.removeChild(swing);
			this.IsAttacking = false;
		}, this.ATTACK_DURATION);
	}

	protected fireAttack() {
		if (!this.IsAttacking) {
			switch (true) {
				case this.CTRLS.get(KeyCode.AttackUp):
				case this.CTRLS.get(KeyCode.AttackRight):
				case this.CTRLS.get(KeyCode.AttackDown):
				case this.CTRLS.get(KeyCode.AttackLeft):
					this.createAttack();
					this.IsAttacking = true; // Marcar como atacando para que no se repita
					break;
			}
		}
	}
}
