import React from "react";
import "./Container.css";

const Container = props => (
    <div className="container text-center">{props.children}</div>
)

export default Container;