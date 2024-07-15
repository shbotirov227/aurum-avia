import React from 'react';
import MainTitle from "../../components/MainTitle/MainTitle";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import Image1 from "../../assets/images/bgImg1.jpg";
import Image2 from "../../assets/images/bgImg2.jpg";
import Image3 from "../../assets/images/bgImg3.jpg";
import Image4 from "../../assets/images/bgImg4.jpg";
import Image5 from "../../assets/images/cardImg5.jpg";

import "./Locations.scss";

const Locations = () => {

    const data = [
        {
            id: 0,
            img: Image3,
            title: "Dubai",
            population: "2M"
        },
        
        {
            id: 1,
            img: Image1,
            title: "Istanbul",
            population: "4.1M"
        },

        {
            id: 2,
            img: Image2,
            title: "Antalya",
            population: "3.5M"
        },

        {
            id: 3,
            img: Image4,
            title: "Sharm El-Sheikh",
            population: "4M"
        },

        {
            id: 4,
            img: Image5,
            title: "USA",
            population: "3M"
        },
    ];
    
    return (
        <div className="Locations container">
            <MainTitle
                title="Best Locations"
                text="Discover the best offers in each city,
                curated just for you.Immerse yourself in a world
                of savings and indulge in unparalleled experiences."
            />

            <div className="Location-images">
                <ImageSlider data={data} />
            </div>

        </div>
    )
}

export default Locations;
