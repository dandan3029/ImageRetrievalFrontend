import React from 'react';
import Style from './Style.module.scss';

function ImageCard (props) {
    const imageSrc = props.imageSrc;
    const description = props.description;
    return (
        <div className={Style.ImageCard}>
            <img src={imageSrc}/>
            <div className={Style.mask}></div>
            <span>{description}</span>
        </div>
    )
}

export default ImageCard;