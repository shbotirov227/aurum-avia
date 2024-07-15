import React from 'react'
import MainTitle from "../../components/MainTitle/MainTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Card from "../../components/Card/Card";
import { CardIcon2, CardIcon3, CardIcon4 } from "../../assets/icons";
import CardImg1 from "../../assets/images/cardImg1.jpg";
import CardImg2 from "../../assets/images/cardImg2.jpg";
import CardImg3 from "../../assets/images/cardImg3.jpg";
import CardImg4 from "../../assets/images/cardImg4.jpg";
import CardImg5 from "../../assets/images/cardImg5.jpg";
import CardImg6 from "../../assets/images/cardImg6.jpg";
import CardImg7 from "../../assets/images/cardImg7.jpg";
import CardImg8 from "../../assets/images/cardImg8.jpg";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import "./Prices.scss";

const data = [
    {
        id: 0,
        image: CardImg1,
        cityName: "Istanbul",
        users: "234",
        price: "$420",
        items: [
            {
                icon: <CardIcon2 />,
                text: "5 Days Trip > Hotel Included"
            },

            {
                icon: <CardIcon3 />,
                text: "Airplane Bill Included"
            },

            {
                icon: <CardIcon4 />,
                text: "Daily Places Visit"
            },
        ]
    },

    {
        id: 1,
        image: CardImg2,
        cityName: "Dubai",
        users: "300",
        price: "$700",
        items: [
            {
                icon: <CardIcon2 />,
                text: "5 Days Trip > Hotel Included"
            },

            {
                icon: <CardIcon3 />,
                text: "Airplane Bill Included"
            },

            {
                icon: <CardIcon4 />,
                text: "Daily Places Visit"
            }
        ]
    },

    {
        id: 2,
        image: CardImg3,
        cityName: "Antalya",
        users: "500",
        price: "$999",
        items: [
            {
                icon: <CardIcon2 />,
                text: "5 Days Trip > Hotel Included"
            },

            {
                icon: <CardIcon3 />,
                text: "Airplane Bill Included"
            },

            {
                icon: <CardIcon4 />,
                text: "Daily Places Visit"
            }
        ]
    },
    {
        id: 3,
        image: CardImg4,
        cityName: "Sharm El-Sheikh",
        users: "200",
        price: "$999",
        items: [
            {
                icon: <CardIcon2 />,
                text: "5 Days Trip > Hotel Included"
            },

            {
                icon: <CardIcon3 />,
                text: "Airplane Bill Included"
            },

            {
                icon: <CardIcon4 />,
                text: "Daily Places Visit"
            }
        ]
    },

    {
        id: 4,
        image: CardImg5,
        cityName: "USA",
        users: "400",
        items: [
            {
                icon: <CardIcon2 />,
                text: "5 Days Trip > Hotel Included"
            },

            {
                icon: <CardIcon3 />,
                text: "Airplane Bill Included"
            },

            {
                icon: <CardIcon4 />,
                text: "Daily Places Visit"
            }
        ]
    },

    {
        id: 5,
        image: CardImg6,
        cityName: "England",
        users: "234",
        items: [
            {
                icon: <CardIcon2 />,
                text: "5 Days Trip > Hotel Included"
            },

            {
                icon: <CardIcon3 />,
                text: "Airplane Bill Included"
            },

            {
                icon: <CardIcon4 />,
                text: "Daily Places Visit"
            }
        ]
    },

    {
        id: 6,
        image: CardImg7,
        cityName: "Canada",
        users: "345",
        items: [
            {
                icon: <CardIcon2 />,
                text: "5 Days Trip > Hotel Included"
            },

            {
                icon: <CardIcon3 />,
                text: "Airplane Bill Included"
            },

            {
                icon: <CardIcon4 />,
                text: "Daily Places Visit"
            }
        ]
    },

    {
        id: 7,
        image: CardImg8,
        cityName: "European Union",
        users: "345",
        items: [
            {
                icon: <CardIcon2 />,
                text: "5 Days Trip > Hotel Included"
            },

            {
                icon: <CardIcon3 />,
                text: "Airplane Bill Included"
            },

            {
                icon: <CardIcon4 />,
                text: "Daily Places Visit"
            }
        ]
    },
];

const Prices = () => {
    return (
        <div className="Prices">
            <MainTitle
                title="Best Weekly Offers In Each City"
                text="Discover the best weekly offers in each city, curated just for you.
                Immerse yourself in a world of savings and indulge in unparalleled experiences."
            />

            {/* <div className="Prices-cards">

            </div> */}

            
            <Swiper
                slidesPerView={3}
                spaceBetween={100}
                loop={true}
                autoplay={{
                    delay: 2300,
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

export default Prices;
