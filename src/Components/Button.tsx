import { Game } from "../Classes/Game-class";

interface buttonProps {
    value: string;
    callBack : any;
    game: Game
}

const Button = (props: buttonProps)=>{

    const handleClik = () :void =>{

        let method;
        switch(props.value){
            case('drink water'):
                method = props.game.player.drink;
                break;
            case('moderate speed'):
                method = props.game.player.moderate;
                break;
            case('full speed'):
                method = props.game.player.full;
                break;
            case('stop'):
                method = props.game.player.stop;
                break;
            case('restart'):
                method = props.game.player.restart;
                break;
            case('quit'):
                method = props.game.player.quit;
                break;
        }
        props.callBack(method)
    }
    
    return <div>
        <button className="button" onClick={handleClik}>{props.value.toUpperCase()}</button>
    </div>
}

export default Button;