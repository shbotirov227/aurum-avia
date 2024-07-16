// import React, { useState } from 'react';
import "./FormSection.scss";
import { InstaIcon, LocationIcon2, MailIcon, PhoneIcon, TelegramIcon2 } from '../../assets/icons';
import FormCard from '../../components/FormCard/FormCard';
import ContactCard from "../../components/ContactCard/ContactCard";

const data = [
    {
        id: 0,
        icon: <LocationIcon2 />,
        title: "Mo'ljal: Afruz to'yxona, Choponota",
        url: "https://yandex.uz/maps/-/CDSJFM8C"
    },

    {
        id: 1,
        icon: <TelegramIcon2 />,
        text: "aviakassa_aurum",
        url: "https://t.me/@adkhamov_987"
    },

    {
        id: 2,
        icon: <InstaIcon />,
        text: "aurum_avia",
        url: "https://yandex.uz/maps/-/CDSJFM8C"
    },
]

const FormSection = () => {

    return (
        <div className="FormSection container" id="formSection">

            <div className="FormSection-info">
                {
                    data.map((item, id,) => (
                        // console.log(item)
                        <FormCard
                            key={id}
                            icon={item.icon}
                            title={item.title}
                            text={item.text}
                            url={item.url}
                        />
                    ))
                }

                <div className="FormSection-call">
                    <div className="FormSection-callChild">

                        <PhoneIcon />
                        <h3 className="FormSection-numberName">Telefon Raqam</h3>
                        <a className="FormSection-number" href="">+99890 987-0-987</a>
                        <a className="FormSection-number" href="">+99890 986-0-986</a>

                    </div>
                    <div className="FormSection-callChild">
                        <MailIcon />
                        <h3 className="FormSection-numberName">Telefon Raqam</h3>
                        <a className="FormSection-number" href="">aurum_avia@gmail.com</a>
                    </div>
                </div>
            </div>



            <iframe id="directions" className="FormSection-map" title="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5425.907410211136!2d69.199668!3d41.289032!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae89a274fdb9b7%3A0x2b8bc58608ca7fb2!2sChilanzar-25%2C%20100152%2C%20Tashkent%2C%20Tashkent%20Region%2C%20Uzbekistan!5e1!3m2!1sen!2sus!4v1717765098456!5m2!1sen!2sus" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}

export default FormSection;
