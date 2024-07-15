import React from 'react';
import ContactCard from "../../components/ContactCard/ContactCard";
import { PhoneIcon, MailIcon, LocationIcon } from "../../assets/icons";

import "./Contact.scss";

const data = [
    {
        id: 0,
        icon: <PhoneIcon />,
        title: "Make a Phone Call",
        text: "+998 99 299 99 96",
        url: "tel:+998 99 299 99 96"
    },

    {
        id: 1,
        icon: <MailIcon />,
        title: "Contact Us via Email",
        text: "zamonbiznestour@mail.ru",
        url: "mailto:zamonbiznestour@mail.ru"
    },

    {
        id: 2,
        icon: <LocationIcon />,
        title: "Visit Our Offices",
        text: "15/25, Chilanzar - 9, Tashkent city",
        url: "https://yandex.uz/maps/-/CDfz7BJf"
    },
]

const Contact = () => {
    return (
        <div className="Contact container" id="directions">
            {data.map(el => <ContactCard key={el.id} icon={el.icon} title={el.title} text={el.text} url={el.url} />)}
        </div>
    )
}

export default Contact;
