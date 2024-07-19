import React from 'react';
import { useTranslation } from "react-i18next";
import ContactCard from "../../components/ContactCard/ContactCard";
// import { PhoneIcon, MailIcon, LocationIcon } from "../../assets/icons";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

import "./Contact.scss";

const Contact = () => {
    
    const { t } = useTranslation();

    const data = [
        {
            id: 0,
            icon: <FaPhoneAlt />,
            title: t("info.phone"),
            text: "+998 90 987 09 87",
            url: "tel:+998 90 987 09 87",
            number: "+998 90 986 09 86",
            numberUrl: "tel:+998 90 986 09 86"
        },
    
        {
            id: 1,
            icon: <IoIosMail />,
            title: t("info.email"),
            text: "aurum_avia@gmail.com",
            url: "mailto:aurum_avia@gmail.com"
        },
    
        {
            id: 2,
            icon: <FaLocationDot />,
            title: t("info.location"),
            text: t("info.place"),
            url: "https://yandex.uz/maps/-/CDSJFM8C"
        },
    ];

    return (
        <div className="Contact container">
            {data.map(el => <ContactCard key={el.id} icon={el.icon} title={el.title} text={el.text} url={el.url} number={el.number} numberUrl={el.numberUrl} />)}
        </div>
    )
}

export default Contact;
