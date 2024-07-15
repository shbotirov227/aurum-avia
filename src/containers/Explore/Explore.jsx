import React from 'react';
import MainTitle from "../../components/MainTitle/MainTitle";
import ExploreCard from "../../components/ExploreCard/ExploreCard";
import ExploreCardImg1 from "../../assets/images/exploreCardImg1.jpg";
import ExploreCardImg2 from "../../assets/images/exploreCardImg2.jpg";

import "./Explore.scss";

const data = [
    {
        id: 0,
        image: ExploreCardImg1,
        title: "Cheap Railway Tickets With Us",
        author: "Whole world",
        text: `Embark on a railway adventure and explore destinations worldwide.
        Whether it's the picturesque landscapes, bustling cities, or cultural gems, our rail services offer a
        unique and comfortable way to traverse the globe. Immerse yourself in the beauty of different cultures,
        all accessible through our extensive railway network.`,
    },

    {
        id: 1,
        image: ExploreCardImg2,
        title: "Discover Exciting Air Travel Deals",
        author: "Global Destinations",
        text: `Embark on an airborne adventure and explore destinations worldwide.
        Whether it's the breathtaking landscapes, vibrant cities, or cultural treasures,
        our airline services provide a convenient and exhilarating way to navigate the globe.
        Immerse yourself in the richness of diverse cultures, all easily accessible through
        our extensive air travel network.`,
    },
];

const Explore = () => {
    return (
        <div className="Explore container">
            <MainTitle
                title="Explore Destinations with Ease"
                text="Find the best deals on railway and airplane tickets in each city,
                carefully selected for you."
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
