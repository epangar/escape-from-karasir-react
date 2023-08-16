interface buttonProps {
    value: string;
    callBack : any
}

const Button = (props: buttonProps)=>{

    
    return <div>
        <button className="button" onClick={props.callBack}>{props.value.toUpperCase()}</button>
    </div>
}

export default Button;