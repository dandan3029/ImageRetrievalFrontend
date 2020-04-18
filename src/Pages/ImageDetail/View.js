import React from 'react';
import Style from './Style.module.scss';
import {useParams} from 'react-router-dom';

function ImageDetail () {
    let { imageId } = useParams();
    return (
        <div className={Style.ImageDetail}>
            ImageDetail
            {imageId}
        </div>
    )
}

export default ImageDetail;