import React from "react";
import { People } from "../Card";
import './style.css';
import girl from '../images/img1.png';
import dress from '../images/img2.png';
import mount from '../images/img3.png';
import star from '../images/Star.png'


export const Experience = () => {
    const data = [
        {
            description:'sold out',
            img:girl,
            star: star,
            rating: '5.0',
            reviewCount: '(6)',
            country: 'USA',
            title: 'Life lessons with Katie Zeferes',
            price: 'From $136 ',
            person:'/ person'
        },
        {
            description:'online',
            img: dress,
            star: star,
            rating: '5.0',
            reviewCount: '(30)',
            country: 'USA',
            title: 'Learn wedding photography',
            price: 'From $125 ',
            person:'/ person'
        },
        {
            img: mount,
            rating: '4.8',
            star: star,
            reviewCount: '(2)',
            country: 'USA',
            title: 'Group Mountain Bikini',
            price: 'From $50 ',
            person:'/ person'

        }
    ]
    return (
        <div className="section">
            <h1 className="sectionTitle">Online Experiences</h1>
            <p>Join unique interactive activities led by <br /> one-of-a-kind hosts—all without leaving <br /> home.
            </p>

            <div className="div">
            {data.map((element) => {
                return (
                    <People
                        description={element.description} //doesnt work condition rendering
                        img={element.img}
                        star={element.star}
                        rating={element.rating}
                        reviewCount={element.reviewCount}
                        country={element.country}
                        title={element.title}
                        price={element.price}
                        person={element.person}
                    />
                )
            })}
            </div>
            
        </div>


    )
};
