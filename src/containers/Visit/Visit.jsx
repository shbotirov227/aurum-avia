import React from "react";
import MainTitle from "../../components/MainTitle/MainTitle";
import ExploreCard from "../../components/ExploreCard/ExploreCard";
import VisitCardImg1 from "../../assets/images/visitCardImg1.jpg";
import VisitCardImg2 from "../../assets/images/visitCardImg2.jpg";
import VisitCardImg3 from "../../assets/images/visitCardImg3.jpg";
import VisitCardImg4 from "../../assets/images/visitCardImg4.jpg";

import "./Visit.scss";

const data = [
    {
        id: 0,
        image: VisitCardImg1,
        title: "Dubai",
        author: "United Arab Emirated",
        peoples: 8.66,
        area: 41.290,
        price: 1.125000,
        text: `Dubai is a city and emirate in the United Arab Emirates known for luxury shopping,
        ultramodern architecture and a lively nightlife scene. Burj Khalifa, an 830m-tall tower,
        dominates the skyscraper-filled skyline. At its foot lies Dubai Fountain, with jets and
        lights choreographed to music.On artificial islands just offshore is Atlantis, The Palm,
        a resort with water and marine-animal parks.`,
    },

    {
        id: 1,
        image: VisitCardImg2,
        title: "Antalya",
        author: "Turkey",
        peoples: 44.48,
        area: 275.400,
        price: 946.000,
        text: `Antalya is the fastest-growing city in Turkey, and tourists from around the world
        are discovering its fabulous mix of great beaches and traditional Turkish culture.
        Kids will love the Beach Park, which features Aqua Land (a waterslide-fanatic's dream)
        and Dolphin Land (home to dolphins, sea lions and white whales). Make sure to explore the
        old town center and to see Hadrian's Gate.`,
    },

    {
        id: 2,
        image: VisitCardImg3,
        title: "Sharm El-Sheikh",
        author: "Egypt",
        peoples: 67.41,
        area: 551.500 ,
        price: 425.600,
        text: `Sharm El Sheikh is the center of tourism action in Sinai Peninsula and it has
        the world top diving sites. Specially the underwater wonders of Ras Mohammed national
        park that took Sharm city to whole different level. The city has diving and shipwreck
        sites that attract both advanced and recreational divers from around the world to discover
        the un parallel marine life deep down the red sea.`,
    },

    {
        id: 3,
        image: VisitCardImg4,
        title: "Istanbul",
        author: "Turkey",
        peoples: 67.41,
        area: 551.500 ,
        price: 425.600,
        text: `Istanbul is the most populous city in Turkey and its cultural,
        economic and historic center.It is located in north-western part of Turkey,
        divided into European and Asian side by Bosphorus, which connects the Sea of
        Marmara and Black Sea. It is the only city in the world that sits on two continents.`,
    },
];

const Visit = () => {
    return (
        <div className="Visit container" id="tours">
            <MainTitle
                title="Visit One Of Our Countries Now"
                text="Discover the best offers in each city, curated just for you. Immerse
                yourself in a world of savings and indulge in unparalleled experiences."
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
