import React from 'react';
import { useTranslation } from "react-i18next";
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
import "./VisaSupportMedia.scss";

const VisaSupport = () => {
    
    const { t } = useTranslation();

    const data = [
        {
            id: 0,
            image: CardImg9,
            cityName: t("country.hong"),
            users: "234",
            bottomTitle: t("visaCard.h5"),
            items: [
                {
                    icon: <CardIcon8 />,
                    text: t("visaCard.p1")
                },

                {
                    icon: <CardIcon9 />,
                    text: t("visaCard.p2")
                },

                {
                    icon: <CardIcon10 />,
                    text: t("visaCard.p3")
                },
            ]
        },

        {
            id: 1,
            image: CardImg10,
            cityName: t("country.india"),
            users: "300",
            bottomTitle: t("visaCard.h5"),
            items: [
                {
                    icon: <CardIcon8 />,
                    text: t("visaCard.p1")
                },

                {
                    icon: <CardIcon9 />,
                    text: t("visaCard.p2")
                },

                {
                    icon: <CardIcon10 />,
                    text: t("visaCard.p3")
                },
            ]
        },

        {
            id: 2,
            image: CardImg11,
            cityName: t("country.japan"),
            users: "234",
            bottomTitle: t("visaCard.h5"),
            items: [
                {
                    icon: <CardIcon8 />,
                    text: t("visaCard.p1")
                },

                {
                    icon: <CardIcon9 />,
                    text: t("visaCard.p2")
                },

                {
                    icon: <CardIcon10 />,
                    text: t("visaCard.p3")
                },
            ]
        },
        {
            id: 3,
            image: CardImg12,
            cityName: t("country.saudia"),
            users: "200",
            bottomTitle: t("visaCard.h5"),
            items: [
                {
                    icon: <CardIcon8 />,
                    text: t("visaCard.p1")
                },

                {
                    icon: <CardIcon9 />,
                    text: t("visaCard.p2")
                },

                {
                    icon: <CardIcon10 />,
                    text: t("visaCard.p3")
                },
            ]
        },

        {
            id: 4,
            image: CardImg13,
            cityName: t("country.oman"),
            users: "400",
            bottomTitle: t("visaCard.h5"),
            items: [
                {
                    icon: <CardIcon8 />,
                    text: t("visaCard.p1")
                },

                {
                    icon: <CardIcon9 />,
                    text: t("visaCard.p2")
                },

                {
                    icon: <CardIcon10 />,
                    text: t("visaCard.p3")
                },
            ]
        },

        {
            id: 5,
            image: CardImg14,
            cityName: t("country.china"),
            users: "234",
            bottomTitle: t("visaCard.h5"),
            items: [
                {
                    icon: <CardIcon8 />,
                    text: t("visaCard.p1")
                },

                {
                    icon: <CardIcon9 />,
                    text: t("visaCard.p2")
                },

                {
                    icon: <CardIcon10 />,
                    text: t("visaCard.p3")
                },
            ]
        }
    ];

    return (
        <div className="VisaSupport">
            <MainTitle
                title={t("visa.h2")}
                text={t("visa.p")}
            />

            <Swiper
                slidesPerView={2}
                spaceBetween={250}
                loop={true}
                autoplay={{
                    delay: 3000,
                    pauseOnMouseEnter: true,
                }}
                breakpoints={{
                    275: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                    375: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                    400: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                    450: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                    500: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                    561: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                    576: {
                        slidesPerView: 1.3,
                        spaceBetween: 250,
                    },
                    640: {
                        slidesPerView: 1.3,
                        spaceBetween: 240,
                    },
                    700: {
                        slidesPerView: 1.5,
                        spaceBetween: 190,
                    },
                    768: {
                        slidesPerView: 1.5,
                        spaceBetween: 190,
                    },
                    800: {
                        slidesPerView: 1.5,
                        spaceBetween: 190,
                    },
                    850: {
                        slidesPerView: 1.8,
                        spaceBetween: 170,
                    },
                    900: {
                        slidesPerView: 2,
                        spaceBetween: 190,
                    },
                    992: {
                        slidesPerView: 2,
                        spaceBetween: 190,
                    },
                    1000: {
                        slidesPerView: 2,
                        spaceBetween: 200,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 200,
                    },
                    1100: {
                        slidesPerView: 2.4,
                        spaceBetween: 190,
                    },
                    1200: {
                        slidesPerView: 2.7,
                        spaceBetween: 190,
                    },
                    1300: {
                        slidesPerView: 2.8,
                        spaceBetween: 180,
                    },
                    1440: {
                        slidesPerView: 3,
                        spaceBetween: 170,
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
