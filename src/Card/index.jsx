import React from "react";
import './style.css';



export const People = (props) => {
    return (
        <div className="card">
            <p className="descript">{props.description}</p>
            <div className="divImg">
                <img className="img" src={props.img} alt="" />
            </div>
            <div>
                <ul className="class">
                    <li><img className="starimg" src={props.star} alt="" /></li>
                    <li>{props.rating}</li>
                    <li class='classItem'>{props.reviewCount}</li>
                    <li class='classItem2'>{props.country}</li>
                </ul>
                <p>{props.title}</p>
                <div>
                    <span className="classPrice">{props.price}</span>
                    <span>{props.person}</span>
                </div>
            </div>
        </div>
    )
};
