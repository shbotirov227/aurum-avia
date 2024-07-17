import React from 'react';
import { useTranslation } from "react-i18next";
import MainTitle from "../../components/MainTitle/MainTitle";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import Image1 from "../../assets/images/bgImg1.jpg";
import Image2 from "../../assets/images/bgImg2.jpg";
import Image3 from "../../assets/images/bgImg3.jpg";
import Image4 from "../../assets/images/bgImg4.jpg";
import Image5 from "../../assets/images/cardImg5.jpg";

import "./Locations.scss";

const Locations = () => {

    const { t } = useTranslation();

    const data = [
        {
            id: 0,
            img: Image3,
            title: t('banner3.h1'),
            population: `${t('banner1.population')} 2 ${t('visitCard.mil')}`
        },
        
        {
            id: 1,
            img: Image1,
            title: t('banner1.h1'),
            population: `${t('banner1.population')} 4.1 ${t('visitCard.mil')}`
        },

        {
            id: 2,
            img: Image2,
            title: t('banner2.h1'),
            population: `${t('banner1.population')} 3.5 ${t('visitCard.mil')}`
        },

        {
            id: 3,
            img: Image4,
            title: t('banner4.h1'),
            population: `${t('banner1.population')} 4 ${t('visitCard.mil')}`
        },

        {
            id: 4,
            img: Image5,
            title: t('country.usa'),
            population: `${t('banner1.population')} 3 ${t('visitCard.mil')}`
        },
    ];
    
    return (
        <div className="Locations container">
            <MainTitle
                title={t("best.h2")}
                text={t("best.p")}
            />

            <div className="Location-images">
                <ImageSlider data={data} />
            </div>

        </div>
    )
}

export default Locations;
