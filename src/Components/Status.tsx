/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Game } from "../Classes/Game-class";

interface input {
    game: Game;
}




const Status = (game: input) =>{
    console.log(game.game.ship.water)
    debugger
    const [water, setWater] = useState<number>(game.game.ship.water);

    useEffect(()=>{
        setWater(game.game.ship.water);
    
    }, [game.game.ship.water])

    return <div className="status"> 
                <h3>STATUS</h3>
                <p>Distance travelled so far: <span>{game.game.ship.distance}</span>/200</p>
                <p>Distance to safety: <span>{game.game.ship.distanceToCamp}</span>/200</p>
                <p>Your thirst: <span>{game.game.ship.thirst}</span>/6</p>
                <p>Water in your canteen:  <span>{water}</span>/<span>{game.game.ship.maxWater}</span></p>
                <p>Ship's heat: <span>{game.game.ship.shipHeat}</span>/<span>{game.game.ship.maxShipHeat}</span></p>
                
            </div>
    
    
}

export default Status;


