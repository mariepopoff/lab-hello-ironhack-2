import React from "react";
import "./PrincipleComponent.css"

export default function MyPrincipleComponent(props) {
    return <div>
        <h3>{props.title}</h3>
        <h4>{props.text}</h4>
    </div>
    
}