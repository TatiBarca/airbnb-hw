import React from "react";
import './style.css';
import heroes from '../images/gridimg.png';

export const Heroes = () => {
    return (
        <div className="heroImage">
            <img className="heroimg" src={heroes} alt="" />
        </div>
    )
}