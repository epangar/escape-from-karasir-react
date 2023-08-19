import { Game } from "../Classes/Game-class";
import Button from "./Button";

interface Props {
    callback: any;
    game: Game;
}

const Dashboard =(props: Props)=>{


    const handleClick =(buttonCallback: string) :void=>{
            props.callback(buttonCallback)
    }
    
    return <div className="dashboard">
        <div className="dashboard__buttonblock">
            <Button game={props.game} callBack={handleClick} value={'drink water'}></Button>
            <Button game={props.game} callBack={handleClick} value={'moderate speed'}></Button>
            <Button game={props.game} callBack={handleClick} value={'full speed'}></Button>
            <Button game={props.game} callBack={handleClick} value={'stop'}></Button>
            <Button game={props.game} callBack={handleClick} value={'restart'}></Button>
            <Button game={props.game} callBack={handleClick} value={'quit'}></Button>
        </div>

    </div>
}
export default Dashboard;