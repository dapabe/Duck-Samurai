import { AbstractWeaponEntity } from "../../../common/abstracts/Weapon.abstract";

export class SwordEntity extends AbstractWeaponEntity {
	constructor() {
		super();
		this.setStatAttackSpeed(5);
		this.setStatDamage(1);
	}

	public update(framesPassed: number): void {
		this.fireAttack();
		// console.log(this.children);
	}
}
