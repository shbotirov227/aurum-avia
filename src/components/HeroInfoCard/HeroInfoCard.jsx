import React from 'react';
import { UserIcon, AreaIcon, HomeIcon } from "../../assets/icons";

import "./HeroInfoCard.scss";

const HeroInfoCard = ({ title, population, area, price }) => {
    return (
        <div className="HeroInfoCard">
            <div className="HeroInfoCard-info">
                <UserIcon />
                <div>
                    <h5 className="HeroInfoCard-title">Population:</h5>
                    <h5 className="HeroInfoCard-value">{population}</h5>
                </div>
            </div>

            <div className="HeroInfoCard-info">
                <AreaIcon />
                <div>
                    <h5 className="HeroInfoCard-title">Territory:</h5>
                    <h5 className="HeroInfoCard-value">{area}</h5>
                </div>
            </div>

            <div className="HeroInfoCard-info">
                <HomeIcon />
                <div>
                    <h5 className="HeroInfoCard-title">AVG Price:</h5>
                    <h5 className="HeroInfoCard-value">{price}</h5>
                </div>
            </div>

            <a href="#contact" className="btn-default">Explore More</a>
        </div>
    )
}

export default HeroInfoCard;
