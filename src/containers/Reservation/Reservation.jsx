import React from 'react';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Contact from "../Contact/Contact";

import "./Reservation.scss";
import "./ReservationMedia.scss";
import { FaTelegramPlane } from "react-icons/fa";

const Reservation = () => {

    const { t } = useTranslation();
    return (
        <div className="Reservation-box">
            <div className="Reservation" id="contact">
                <h4 className="Reservation-text">{t("reservation.h4")}</h4>
                <h3 className="Reservation-title">{t("reservation.h2")}</h3>
                <Link to="https://t.me/aurum_aviakassa" className="Reservation-btn" target="_blank">
                    {t("button.reservation.1")}
                    <FaTelegramPlane />
                </Link>
            </div>
            <Contact />
        </div>
    )
}


export default Reservation;