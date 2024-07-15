import React from 'react';
import { CardIcon1 } from "../../assets/icons";

import "./Card.scss";

const Card = ({ image, cityName, users, price, items, bottomTitle }) => {
    return (
        <div className="Card">
            <div className="Card-img">
                <img src={image} alt="Card-img" />
            </div>

            <div className="Card-body">
                <div className="Card-top">
                    <div className="Card-top-name">
                        <h4 className="Card-top-title">{cityName}</h4>

                        <div className="flex align-items-center">
                            <CardIcon1 />
                            <span className="Card-top-users">{users} Check Ins</span>
                        </div>
                    </div>

                    {price ?
                        <div className="Card-top-price">
                            <h4 className="Card-top-price-value">{price}</h4>
                            <span className="Card-top-price-title">/person</span>
                        </div>
                        : undefined}
                </div>

                <div className="Card-bottom">
                    <h4 className="Card-bottom-title">{bottomTitle ? bottomTitle : "Deal Includes:"}</h4>
                    <ul className="Card-bottom-items">
                        {
                            items.map((el, id) => (
                                <li className="Card-bottom-item" key={id}>
                                    {el.icon}
                                    <span>{el.text}</span>
                                </li>
                            ))
                        }
                    </ul>

                    <a href="#contact" className="btn-default">Make a Reservation</a>
                </div>
            </div>
        </div>
    )
}

export default Card;
