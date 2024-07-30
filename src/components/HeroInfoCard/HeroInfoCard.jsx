import React from 'react';
import { useTranslation } from 'react-i18next';
import { UserIcon, AreaIcon } from "../../assets/icons";
import { FaTicketAlt } from "react-icons/fa";

import "./HeroInfoCard.scss";
import "./HeroInfoCardMedia.scss";

const HeroInfoCard = ({ title, population, area, price }) => {

    const { t } = useTranslation();

    return (
        <div className="HeroInfoCard">
            <div className="HeroInfoCard-info">
                <UserIcon />
                <div>
                    <h5 className="HeroInfoCard-title">{t('banner1.population')}</h5>
                    <h5 className="HeroInfoCard-value">{population}</h5>
                </div>
            </div>

            <div className="HeroInfoCard-info">
                <AreaIcon />
                <div>
                    <h5 className="HeroInfoCard-title">{t('banner2.territory')}</h5>
                    <h5 className="HeroInfoCard-value">{area}</h5>
                </div>
            </div>

            <div className="HeroInfoCard-info">
                <FaTicketAlt />
                <div>
                    <h5 className="HeroInfoCard-title">{t('banner3.avgPrice')}</h5>
                    <h5 className="HeroInfoCard-value">{price}</h5>
                </div>
            </div>

            <a href="#contact" className="btn-default">{t("button.explore")}</a>
        </div>
    )
}

export default HeroInfoCard;
