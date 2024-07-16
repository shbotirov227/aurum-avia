import React from 'react';
import ContactCard from "../../components/ContactCard/ContactCard";
import { PhoneIcon, MailIcon, LocationIcon } from "../../assets/icons";

import "./Contact.scss";

const data = [
    {
        id: 0,
        icon: <PhoneIcon />,
        title: "Telefon Raqam",
        text: "+998 90 987 09 87",
        url: "tel:+998 90 987 09 87",
        number: "+998 90 986 09 86",
        numberUrl: "tel:+998 90 986 09 86"
    },

    {
        id: 1,
        icon: <MailIcon />,
        title: "Email",
        text: "aurum_avia@gmail.com",
        url: "mailto:aurum_avia@gmail.com"
    },

    {
        id: 2,
        icon: <LocationIcon />,
        title: "Manzil",
        text: "Toshkent shahar, Uchtepa tumani, 14-mavze, 1-uy",
        url: "https://yandex.uz/maps/-/CDSJFM8C"
    },
]

const Contact = () => {
    return (
        <div className="Contact container" id="directions">
            {data.map(el => <ContactCard key={el.id} icon={el.icon} title={el.title} text={el.text} url={el.url} number={el.number} numberUrl={el.numberUrl} />)}
        </div>
    )
}

export default Contact;
