import { Game } from "../Classes/Game-class";


interface Input {
    game: Game;
    order: string;
}
const Screen = (props:Input) =>{
    

    return (
        <div className="screen">
            <p>Screen</p>
            {<p>{props.order}</p>}
        </div>
    )
}

export default Screen;