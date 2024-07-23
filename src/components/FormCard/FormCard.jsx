import React from 'react'

import "./FormCard.scss"
import "./FormCardMedia.scss"

const FormCard = ({ icon, title, text, url, insta }) => {
    return (
        <div className="FormCard">
            {icon}
            <h4 className="FormCard-title">{title}</h4>
            <a href={url} className="FormCard-text" target="_blank" rel="noreferrer">{text}</a>
        </div>
    )
}

export default FormCard;