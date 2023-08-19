export class Ship{

    distance: number;
	distanceToCamp: number;
	isBeingFollowed: boolean;
    hasFoundTheCyborg: boolean;
    hasFoundTheTown: boolean;
    hasFoundTheStorm: boolean;
    thirst: number;
	shipHeat: number;
	maxShipHeat: number;
	water: number;
	maxWater: number;

	constructor(){

		this.distance = 0;
		this.distanceToCamp = 200;
		this.isBeingFollowed = false;
		this.hasFoundTheCyborg = false;
		this.hasFoundTheTown = false;
		this.hasFoundTheStorm = false;
		this.thirst = 0;
		this.shipHeat = 0;
		this.maxShipHeat = 8;
		this.water = 3;
		this.maxWater = 3;
	}

	drink(){

	}

	restart(){

	}
	
	quit(){

	}

	moderate(){

	}

	full(){

	}

	stop(){
		
	}
}