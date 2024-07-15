import React from 'react';

import "./MainTitle.scss";

const MainTitle = ({ title, text }) => {
    return (
        <div className="MainTitle">
            <h3 className="MainTitle-title">{title}</h3>
            <p className="MainTitle-text">{text}</p>
        </div>
    )
}

export default MainTitle;
