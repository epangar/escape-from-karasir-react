import Controls from './Controls';
import Screen from './Screen';
import { Game } from '../Classes/Game-class';
import { useState, useEffect } from 'react';

const game = new Game();
     
const Play = () =>{
    const [gameState, setGameState] = useState<Game>(game);
    const [orderState, setOrderState] = useState<string>('')

    //console.log("Game = ",game)

    useEffect(() => {
        // Perform any actions related to the gameState here
        console.log("gamState changed")
      }, [gameState]);

   
    
    const handleOrder = (order:string):void =>{
        setGameState(game)
        handleShip(order)
    };

    const handleShip = (input:string) => {
        

        let noteToSend:string = ""

        switch(input){
            case 'drink':
                noteToSend = game.ship.drink();
                break;
            
            case 'moderate':
                noteToSend = game.ship.moderate();
                break;
            
            case 'full':
                noteToSend = game.ship.full();
                break;
            
            case 'quit':
                noteToSend = game.ship.quit();
                break;
            
            case 'restart':
                noteToSend = game.ship.restart();
                break;
            
            case 'stop':
                noteToSend = game.ship.stop();
                break;
            
        }
        console.log(">>>>>> T ", game.ship.thirst)
        console.log(">>>>>> W ", game.ship.water)
        setGameState(game)
        handleNotes(noteToSend);
    }

    const handleNotes = (noteToSend:string)=>{
        setGameState(game)
        
        if(noteToSend.length > 0){
            setOrderState(noteToSend)
        }
    }
    
    
    return  <div className='game'>
        <Screen 
        order={orderState} 
        game={gameState}></Screen>
        <Controls callback={handleOrder} game={gameState}></Controls>
    </div>
}

export default Play;

