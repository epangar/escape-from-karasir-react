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

	drink():string{
		let answer : string= ""
		
			if(this.water >= 1){
				this.water--;
				this.thirst = 0;
				answer = "*****You drink from your canteen. You're not thirsty anymore.*****"

				if (this.water === 0){
					answer += "\n*****Your canteen is empty!*****"
				}
			} else {
				answer = "You can't drink! The canteen is empty!"
			}

			return answer;
		
	}

	restart():string{
		return ""
	}
	
	quit():string{
		return ""
	}

	moderate():string{
		return ""
	}

	full():string{
		return ""
	}

	stop():string{
		return ""
	}
}