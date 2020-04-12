import React from 'react';
import Style from './Style.module.scss';

function ImageDetail (props) {
    var imageId = props.location.search;
    imageId = imageId.split('=')[1];
    console.log(imageId)
    return (
        <div className={Style.ImageDetail}>
            ImageDetail
            {imageId}
        </div>
    )
}

export default ImageDetail;