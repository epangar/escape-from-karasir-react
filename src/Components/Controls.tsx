import { Game } from "../Classes/Game-class";
import Dashboard from "./Dashboard";
import Status from "./Status";

interface Input {
    game: Game;
    callback: any;
}

const Controls = (props: Input)=>{

    const handleInput = (callBack:()=>void):void=>{
        props.callback(callBack)
    }

    return <div className="controls">
            <Status game={props.game}></Status>
            <Dashboard game={props.game} callback={handleInput}></Dashboard>
    </div>
} 

export default Controls;