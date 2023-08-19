import { Game } from "../Classes/Game-class";

interface buttonProps {
    value: string;
    callBack : (method:string)=>void;
    game: Game
}

const Button = (props: buttonProps)=>{

    const handleClik = () :void =>{

        let method:string = '';
        switch(props.value){
            case('drink water'):
                method = "drink";
                break;
            case('moderate speed'):
                method = "moderate";
                break;
            case('full speed'):
                method = "full";
                break;
            case('stop'):
                method = "stop";
                break;
            case('restart'):
                method = "restart";
                break;
            case('quit'):
                method = "quit";
                break;
        }
        props.callBack(method)
    }
    
    return <div>
        <button className="button" onClick={handleClik}>{props.value.toUpperCase()}</button>
    </div>
}

export default Button;