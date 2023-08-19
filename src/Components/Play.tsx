import Controls from './Controls';
import Screen from './Screen';
import { Game } from '../Classes/Game-class';
import { useState, useEffect } from 'react';


const Play = () =>{
    const game = new Game();
    const [gameState, setGameState] = useState<Game>(game);

    console.log("Game = ",game)

    
    const handleOrder = (order:string) =>{
        handleShip(order)
    };

    const handleShip = (input:string) => {
        debugger
        console.log(game)
        console.log(game.ship)
    }
    
    
    return  <div className='game'>
        <Screen 
        //order={orderState} 
        game={game}></Screen>
        <Controls callback={handleOrder} game={game}></Controls>
    </div>
}

export default Play;

