// import React, { useState } from 'react';
import "./FormSection.scss";
import { InstaIcon, LocationIcon2, MailIcon, PhoneIcon, TelegramIcon2 } from '../../assets/icons';
import FormCard from '../../components/FormCard/FormCard';
// import ContactCard from "../../components/ContactCard/ContactCard";

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
        url: "https://www.instagram.com/aurum_avia/?utm_source=ig_web_button_share_sheet"
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
                        <a className="FormSection-number" href="+99890 987-0-987">+99890 987-0-987</a>
                        <a className="FormSection-number" href="+99890 986-0-986">+99890 986-0-986</a>

                    </div>
                    <div className="FormSection-callChild">
                        <MailIcon />
                        <h3 className="FormSection-numberName">Telefon Raqam</h3>
                        <a className="FormSection-number" href="aurum_avia@gmail.com">aurum_avia@gmail.com</a>
                    </div>
                </div>
            </div>



            <iframe id="directions" className="FormSection-map" title="map" src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d23982.003115599753!2d69.15900491721803!3d41.29253665872771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sToshkent%20shahar%2C%20Uchtepa%20tumani%2C%2014-mavze%2C%201-uy!5e0!3m2!1sru!2s!4v1721202334477!5m2!1sru!2s" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}

export default FormSection;
