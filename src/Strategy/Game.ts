abstract class Character {
    weapon: WeaponBehavior
    constructor(weapon: WeaponBehavior){
        this.weapon = weapon
    }
    static fight(){}
}

export class Queen extends Character {
    fight(){
        return this.weapon.useWeapon()
    }
}

export class Knight extends Character {
    fight(){
        return this.weapon.useWeapon()
    }
}
interface WeaponBehavior {
    useWeapon(): string
}

export class AxeBehavior implements WeaponBehavior{
    useWeapon() {
        return "Axe"
    }
}

export class SwordBehavior implements WeaponBehavior {
    useWeapon(): string {
        return "Sword"
    }
}
