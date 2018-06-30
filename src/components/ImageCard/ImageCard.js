import React from "react";
import "./ImageCard.css";

const ImageCard = props => (
    <img 
        id={props.id} 
        src={props.src} 
        alt="Click me!"
        onClick={() => props.handleClick(props.id)} 
    />
)

export default ImageCard;