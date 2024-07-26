import React from 'react';
import { useTranslation } from "react-i18next";
import { InstaIcon, LocationIcon2, MailIcon, PhoneIcon, TelegramIcon2 } from '../../assets/icons';
import FormCard from '../../components/FormCard/FormCard';

import "./FormSection.scss";
import "./FormSectionMedia.scss";

const FormSection = () => {

    const { t } = useTranslation();

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
            url: "https://t.me/adkhamov_987"
        },

        {
            id: 2,
            icon: <InstaIcon />,
            text: "aurum_avia",
            url: "https://www.instagram.com/aurum_avia"
        },
    ];

    return (
        <div className="FormSection" id="directions">
            <div className="FormSection-inner container">
                <div className="FormSection-info">
                    {
                        data.map((item, id,) => (
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
                            <h3 className="FormSection-numberName">{t("info.phone")}</h3>
                            <a className="FormSection-number" href="tel:+998909870987">+99890 987-0-987</a>
                            <a className="FormSection-number" href="tel:+998909860986">+99890 986-0-986</a>

                        </div>
                        <div className="FormSection-callChild">
                            <MailIcon />
                            <h3 className="FormSection-numberName">{t("info.email")}</h3>
                            <a className="FormSection-number" href="mailto:aurum_avia@gmail.com">aurum_avia@gmail.com</a>
                        </div>
                    </div>
                </div>
                {/* 41.294548, 69.193444 */}
                <iframe id="directions" className="FormSection-map" title="map" src="https://yandex.ru/map-widget/v1/?ll=69.193444%2C41.294548&z=14&l=map&pt=69.193444%2C41.294548%2Cpm2rdl" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}

export default FormSection;
