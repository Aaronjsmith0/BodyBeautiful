import React from "react";
import "./style.css";

function CardBtn(props) {
    return (
        <button onClick={props.onClick} className={`btn btn-danger1 ${props["data-value"]}`} {...props}>Choose Plan</button>
    );
}

export default CardBtn;