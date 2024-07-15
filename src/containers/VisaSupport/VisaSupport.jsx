import React from 'react';
import MainTitle from "../../components/MainTitle/MainTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { CardIcon8, CardIcon9, CardIcon10 } from "../../assets/icons";
import Card from "../../components/Card/Card";
import CardImg9 from "../../assets/images/cardImg9.jpg";
import CardImg10 from "../../assets/images/cardImg10.jpg";
import CardImg11 from "../../assets/images/cardImg11.jpg";
import CardImg12 from "../../assets/images/cardImg12.jpg";
import CardImg13 from "../../assets/images/cardImg13.jpg";
import CardImg14 from "../../assets/images/cardImg14.jpg";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import "./VisaSupport.scss";

const data = [
    {
        id: 0,
        image: CardImg9,
        cityName: "Hong Kong",
        users: "234",
        bottomTitle: "Benefits of our Visa Support service:",
        items: [
            {
                icon: <CardIcon8 />,
                text: "Best Prices"
            },

            {
                icon: <CardIcon9 />,
                text: "Short Processing Time"
            },

            {
                icon: <CardIcon10 />,
                text: "Trustworthy Assistance"
            },
        ]
    },

    {
        id: 1,
        image: CardImg10,
        cityName: "India",
        users: "300",
        bottomTitle: "Benefits of our Visa Support service:",
        items: [
            {
                icon: <CardIcon8 />,
                text: "Best Prices"
            },

            {
                icon: <CardIcon9 />,
                text: "Short Processing Time"
            },

            {
                icon: <CardIcon10 />,
                text: "Trustworthy Assistance"
            },
        ]
    },

    {
        id: 2,
        image: CardImg11,
        cityName: "Japan",
        users: "234",
        bottomTitle: "Benefits of our Visa Support service:",
        items: [
            {
                icon: <CardIcon8 />,
                text: "Best Prices"
            },

            {
                icon: <CardIcon9 />,
                text: "Short Processing Time"
            },

            {
                icon: <CardIcon10 />,
                text: "Trustworthy Assistance"
            },
        ]
    },
    {
        id: 3,
        image: CardImg12,
        cityName: "Saudi Arabia",
        users: "200",
        bottomTitle: "Benefits of our Visa Support service:",
        items: [
            {
                icon: <CardIcon8 />,
                text: "Best Prices"
            },

            {
                icon: <CardIcon9 />,
                text: "Short Processing Time"
            },

            {
                icon: <CardIcon10 />,
                text: "Trustworthy Assistance"
            },
        ]
    },

    {
        id: 4,
        image: CardImg13,
        cityName: "Oman",
        users: "400",
        bottomTitle: "Benefits of our Visa Support service:",
        items: [
            {
                icon: <CardIcon8 />,
                text: "Best Prices"
            },

            {
                icon: <CardIcon9 />,
                text: "Short Processing Time"
            },

            {
                icon: <CardIcon10 />,
                text: "Trustworthy Assistance"
            },
        ]
    },

    {
        id: 5,
        image: CardImg14,
        cityName: "China",
        users: "234",
        bottomTitle: "Benefits of our Visa Support service:",
        items: [
            {
                icon: <CardIcon8 />,
                text: "Best Prices"
            },

            {
                icon: <CardIcon9 />,
                text: "Short Processing Time"
            },

            {
                icon: <CardIcon10 />,
                text: "Trustworthy Assistance"
            },
        ]
    }
];

const VisaSupport = () => {
    return (
        <div className="VisaSupport">
            <MainTitle
                title="Visa support"
                text="Experience stress-free travel with our expert visa support. 
                We provide seamless assistance and comprehensive guidance, ensuring a smooth journey."
            />

            <Swiper
                slidesPerView={3}
                spaceBetween={100}
                loop={true}
                autoplay={{
                    delay: 2500,
                    pauseOnMouseEnter: true,
                }}
                // navigation={true}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    data.map(el => (
                        <SwiperSlide key={el.id}>
                            <Card
                                image={el.image}
                                bottomTitle={el.bottomTitle}
                                icon={el.icon}
                                price={el.price}
                                cityName={el.cityName}
                                users={el.users}
                                items={[...el.items]}
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default VisaSupport;
