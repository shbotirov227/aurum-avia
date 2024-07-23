import React from 'react';
import MainTitle from "../../components/MainTitle/MainTitle";
import ExploreCard from "../../components/ExploreCard/ExploreCard";
import ExploreCardImg1 from "../../assets/images/exploreCardImg1.jpg";
import ExploreCardImg2 from "../../assets/images/exploreCardImg2.jpg";
import { useTranslation } from "react-i18next";
import "./Explore.scss";
import "./ExploreMedia.scss";

const Explore = () => {

    const { t } = useTranslation();

    const data = [
        {
            id: 0,
            image: ExploreCardImg1,
            title: t("destinationCard.1.title"),
            author: t("destinationCard.1.subtitle"),
            text: t("destinationCard.1.parag"),
        },

        {
            id: 1,
            image: ExploreCardImg2,
            title: t("destinationCard.2.title"),
            author: t("destinationCard.2.subtitle"),
            text: t("destinationCard.2.parag"),
        },
    ];

    return (
        <div className="Explore container" id="about">
            <MainTitle
                title={t("destination.h2")}
                text={t("destination.p")}
            />

            {data.map(el => (
                <ExploreCard
                    key={el.id}
                    image={el.image}
                    title={el.title}
                    text={el.text}
                    author={el.author}
                />
            ))}
        </div>
    )
}

export default Explore;
