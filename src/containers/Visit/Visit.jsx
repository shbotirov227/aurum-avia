import React from "react";
import { useTranslation } from "react-i18next";
import MainTitle from "../../components/MainTitle/MainTitle";
import ExploreCard from "../../components/ExploreCard/ExploreCard";
import VisitCardImg1 from "../../assets/images/visitCardImg1.jpg";
import VisitCardImg2 from "../../assets/images/visitCardImg2.jpg";
import VisitCardImg3 from "../../assets/images/visitCardImg3.jpg";
import VisitCardImg4 from "../../assets/images/visitCardImg4.jpg";

import "./Visit.scss";

const Visit = () => {

    const { t } = useTranslation()

    const data = [
        {
            id: 0,
            image: VisitCardImg1,
            title: t("banner3.h1"),
            author: t("visitCard.1.subtitle"),
            peoples: 8.66,
            area: 41.290,
            price: 1.125000,
            text: t("visitCard.1.parag"),
        },

        {
            id: 1,
            image: VisitCardImg2,
            title: t("banner2.h1"),
            author: t("visitCard.1.subtitle"),
            peoples: 44.48,
            area: 275.400,
            price: 946.000,
            text: t("visitCard.1.parag"),
        },

        {
            id: 2,
            image: VisitCardImg3,
            title: t("banner4.h1"),
            author: t("visitCard.1.subtitle"),
            peoples: 67.41,
            area: 551.500,
            price: 425.600,
            text: t("visitCard.1.parag"),
        },

        {
            id: 3,
            image: VisitCardImg4,
            title: t("banner1.h1"),
            author: t("visitCard.1.subtitle"),
            peoples: 67.41,
            area: 551.500,
            price: 425.600,
            text: t("visitCard.1.parag"),
        },
    ];

    return (
        <div className="Visit container" id="tours">
            <MainTitle
                title={t("visit.h2")}
                text={t("visit.p")}
            />

            {data.map((el) => (
                <ExploreCard
                    key={el.id}
                    image={el.image}
                    title={el.title}
                    text={el.text}
                    author={el.author}
                    peoples={el.peoples}
                    area={el.area}
                    price={el.price}
                />
            ))}
        </div>
    );
};

export default Visit;
