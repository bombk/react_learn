import React from "react";

const Button = (props) => {
    return (  
        <a href={props.link}><button className="button">{props.name}</button></a>  
    )
}

export default Button
