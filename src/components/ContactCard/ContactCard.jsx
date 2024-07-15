import React from 'react';

import "./ContactCard.scss";

const ContactCard = ({ icon, title, text, url }) => {
    return (
        <div className="ContactCard">
            {icon}
            <h4 className="ContactCard-title">{title}</h4>
            <a href={url} className="ContactCard-text" target="_blank" rel="noreferrer">{text}</a>
        </div>
    )
}

export default ContactCard;
