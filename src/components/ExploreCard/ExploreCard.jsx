import React from 'react';
import { ArrowIcon, ExploreCardIcon1, ExploreCardIcon2, ExploreCardIcon3 } from "../../assets/icons";
import { useTranslation } from "react-i18next";

import "./ExploreCard.scss";

const ExploreCard = ({ image, title, author, text, peoples, area, price }) => {
    
    const { t } = useTranslation();

    return (
        <div className="ExploreCard">
            <img src={image} alt="" />

            <div className="ExploreCard-info">
                <div className="ExploreCard-top">
                    <div>
                        <h3 className="ExploreCard-title">{title}</h3>
                        <span className="ExploreCard-author">{author}</span>
                    </div>

                    <a href="#contact" className="btn-default">{t("button.explore")}</a>
                </div>

                <p className="ExploreCard-bottom">{text}</p>

                {
                    peoples ?
                        <div className="ExploreCard-additional">
                            <ul className="ExploreCard-additional-items">
                                <li className="Explore-additional-item">
                                    <ExploreCardIcon1 />
                                    <span className="ExploreCard-additional-title">{peoples} {t("visitCard.mil")} {t("checks.person")}</span>
                                </li>

                                <li className="Explore-additional-item">
                                    <ExploreCardIcon2 />
                                    <span className="ExploreCard-additional-title">{area} {t("visitCard.km")}</span>
                                </li>

                                <li className="Explore-additional-item">
                                    <ExploreCardIcon3 />
                                    <span className="ExploreCard-additional-title">${price}</span>
                                </li>
                            </ul>

                            <a href="#directions" className="ExploreCard-additional-link">{t("button.direction")} <ArrowIcon /></a>
                        </div>
                        : undefined
                }
            </div>

        </div>
    )
}

export default ExploreCard;
