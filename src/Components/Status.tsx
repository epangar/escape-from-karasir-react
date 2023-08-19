import { Game } from "../Classes/Game-class";

interface input {
    game: Game;
}

const Status = (game: input) =>{

    
    return <div className="status"> 
            <h3>STATUS</h3>
            <p>Distance travelled so far: <span>{game.game.ship.distance}</span>/200</p>
            <p>Distance to safety: <span>{game.game.ship.distanceToCamp}</span>/200</p>
            <p>Your thirst: <span>{game.game.ship.thirst}</span>/6</p>
            <p>Water in your canteen:  <span>{game.game.ship.water}</span>/<span>{game.game.ship.maxWater}</span></p>
            <p>Ship's state: <span>{game.game.ship.shipHeat}</span>/<span>{game.game.ship.maxShipHeat}</span></p>
            
        </div>
}

export default Status;
