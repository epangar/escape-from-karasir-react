import { Smugglers } from "./Smugglers-class";
import { Ship } from "./Ship-class";
import { Notes } from "./Notes-class";
import { Player } from "./Player-class";

export class Game {

    notes : Notes;
    player: Player;
    smugglers :  Smugglers;
    ship : Ship;

	constructor(){
		this.smugglers = new Smugglers();
		this.ship = new Ship();
        this.notes = new Notes();
        this.player = new Player();
	}

	roll(minimum : number, maximum : number) : number{
        return Math.floor(Math.random() * maximum ) + minimum;
    }

    roll20() : number{
        return this.roll(1,20)
    }

    roll6() : number {
        return this.roll(1,6);
    }

	start (){
        
    }

    checkWin() : boolean{
        return (this.ship.distanceToCamp < 0 
            && this.ship.distance >= 200
            && this.ship.thirst <= 6);
    }

    getToTown(){

    }

    findTheCyborg(){

    }

    sandStorm(){
        
    }
}