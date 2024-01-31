import { AbstractPlayerEntity } from "../../common/abstracts/Player.abstract";
import { AbstractWeaponEntity } from "../../common/abstracts/Weapon.abstract";
import { SwordEntity } from "./weapons/Sword.entity";

export class DuckEntity extends AbstractPlayerEntity {
	protected HeldWeapon: AbstractWeaponEntity;
	constructor() {
		super();
		this.HeldWeapon = new SwordEntity();
		this.addChild(this.HeldWeapon);
	}
}
