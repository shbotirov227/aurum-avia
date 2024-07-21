import React from 'react'
import { useTranslation } from "react-i18next";
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
// import "./PricesMedia.scss";


const Prices = () => {
    const { t } = useTranslation();

    const data = [
        {
            id: 0,
            image: CardImg1,
            cityName: t("banner1.h1"),
            users: "234",
            price: "$420",
            items: [
                {
                    icon: <CardIcon2 />,
                    text: t("weeklyCard.p1")
                },

                {
                    icon: <CardIcon3 />,
                    text: t("weeklyCard.p2")
                },

                {
                    icon: <CardIcon4 />,
                    text: t("weeklyCard.p3")
                },
            ]
        },

        {
            id: 1,
            image: CardImg2,
            cityName: t("banner2.h1"),
            users: "300",
            price: "$700",
            items: [
                {
                    icon: <CardIcon2 />,
                    text: t("weeklyCard.p1")
                },

                {
                    icon: <CardIcon3 />,
                    text: t("weeklyCard.p2")
                },

                {
                    icon: <CardIcon4 />,
                    text: t("weeklyCard.p3")
                },
            ]
        },

        {
            id: 2,
            image: CardImg3,
            cityName: t("banner3.h1"),
            users: "500",
            price: "$999",
            items: [
                {
                    icon: <CardIcon2 />,
                    text: t("weeklyCard.p1")
                },

                {
                    icon: <CardIcon3 />,
                    text: t("weeklyCard.p2")
                },

                {
                    icon: <CardIcon4 />,
                    text: t("weeklyCard.p3")
                },
            ]
        },
        {
            id: 3,
            image: CardImg4,
            cityName: t("banner4.h1"),
            users: "200",
            price: "$999",
            items: [
                {
                    icon: <CardIcon2 />,
                    text: t("weeklyCard.p1")
                },

                {
                    icon: <CardIcon3 />,
                    text: t("weeklyCard.p2")
                },

                {
                    icon: <CardIcon4 />,
                    text: t("weeklyCard.p3")
                },
            ]
        },

        {
            id: 4,
            image: CardImg5,
            cityName: t("country.usa"),
            users: "400",
            items: [
                {
                    icon: <CardIcon2 />,
                    text: t("weeklyCard.p1")
                },

                {
                    icon: <CardIcon3 />,
                    text: t("weeklyCard.p2")
                },

                {
                    icon: <CardIcon4 />,
                    text: t("weeklyCard.p3")
                },
            ]
        },

        {
            id: 5,
            image: CardImg6,
            cityName: t("country.england"),
            users: "234",
            items: [
                {
                    icon: <CardIcon2 />,
                    text: t("weeklyCard.p1")
                },

                {
                    icon: <CardIcon3 />,
                    text: t("weeklyCard.p2")
                },

                {
                    icon: <CardIcon4 />,
                    text: t("weeklyCard.p3")
                },
            ]
        },

        {
            id: 6,
            image: CardImg7,
            cityName: t("country.canada"),
            users: "345",
            items: [
                {
                    icon: <CardIcon2 />,
                    text: t("weeklyCard.p1")
                },

                {
                    icon: <CardIcon3 />,
                    text: t("weeklyCard.p2")
                },

                {
                    icon: <CardIcon4 />,
                    text: t("weeklyCard.p3")
                },
            ]
        },

        {
            id: 7,
            image: CardImg8,
            cityName: t("country.europe"),
            users: "345",
            items: [
                {
                    icon: <CardIcon2 />,
                    text: t("weeklyCard.p1")
                },

                {
                    icon: <CardIcon3 />,
                    text: t("weeklyCard.p2")
                },

                {
                    icon: <CardIcon4 />,
                    text: t("weeklyCard.p3")
                },
            ]
        },
    ];

    return (
        <div className="Prices">
            <MainTitle
                title={t("weekly.h2")}
                text={t("weekly.p")}
            />

            <Swiper
                slidesPerView={3}
                spaceBetween={100}
                // lazy={true}
                // loop={true}
                autoplay={{
                    delay: 2300,
                    pauseOnMouseEnter: false,
                }}
                // navigation={true}
                breakpoints={{
                    375: {
                        slidesPerView: 1,
                        spaceBetween: 5,
                    },
                    568: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
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
            {/* <Swiper
                slidesPerView={1}
                spaceBetween={125}
                loop={true}
                autoplay={{
                    delay: 3500,
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
                        slidesPerView: 6,
                        spaceBetween: 60,
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
            </Swiper> */}
        </div>
    )
}

export default Prices;
