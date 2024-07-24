import React from 'react';
import Contact from "../Contact/Contact";

import "./Reservation.scss";
import "./ReservationMedia.scss";

const Reservation = () => {
    return (
        <div className="Reservation-box">
            <div className="Reservation" id="contact">
                <h4 className="Reservation-text">Book Prefered Deal Here</h4>
                <h3 className="Reservation-title">Make Your Reservation</h3>
                <a href="#contact" className="Reservation-btn">Discover More</a>
            </div>
            <Contact />

        </div>
    )
}


export default Reservation;