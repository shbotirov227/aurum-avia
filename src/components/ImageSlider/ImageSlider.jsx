import React, { useState } from 'react';

import "./ImageSlider.scss";
import "./ImageSliderMedia.scss";

const ImageSlider = ({ children, data }) => {

    const [active, setActive] = useState(1)

    return (
        <div className="ImageSlider mini-container">
            {data.map((child, id) => (
                <div key={id} className={`ImageSlider-slide ${id === active ? "active" : ""}`} onClick={() => setActive(id)}>
                    <div className="slide-info">
                        <div className="slide-title">{child.title}</div>
                        <div className="slide-population">{child.population}</div>
                    </div>
                    <img src={child.img} alt={`Slide ${id + 1}`} />
                </div>
            ))}
        </div>
    );
}

export default ImageSlider;
