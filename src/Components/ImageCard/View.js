import React from 'react';
import Style from './Style.module.scss';

function ImageCard (props) {
    const imageSrc = props.imageSrc;
    const categoryChinese = props.categoryChinese;
    return (
        <div className={Style.ImageCard}>
            <img src={imageSrc}/>
            <div className={Style.mask}></div>
            <span>{categoryChinese}</span>
        </div>
    )
}

export default ImageCard;