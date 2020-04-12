import React from 'react';
import Style from './Style.module.scss';
import {Link} from 'react-router-dom';
import {PAGE_ID, PAGE_ID_TO_ROUTE} from '../../Config/ROUTE';

import Banner from './Components/Banner';
import ImageClassSelector from './Components/ImageClassSelector';
import ImageCard from './Components/ImageCard';

import CardImageSrc from '../../Config/CARD_IMAGE';

function Retrieval ()
{
    const imageCardList = [
        {
            imageId: 0,
            imageSrc: CardImageSrc[0],
            description: '',
        },
        {
            imageId: 1,
            imageSrc: CardImageSrc[1],
            description: '',
        },
        {
            imageId: 2,
            imageSrc: CardImageSrc[2],
            description: '',
        },
        {
            imageId: 3,
            imageSrc: CardImageSrc[3],
            description: '',
        },
        {
            imageId: 4,
            imageSrc: CardImageSrc[4],
            description: '',
        },
        {
            imageId: 5,
            imageSrc: CardImageSrc[5],
            description: '',
        },
        {
            imageId: 6,
            imageSrc: CardImageSrc[6],
            description: '',
        },
        {
            imageId: 7,
            imageSrc: CardImageSrc[7],
            description: '',
        },
        {
            imageId: 8,
            imageSrc: CardImageSrc[8],
            description: '',
        },
        {
            imageId: 9,
            imageSrc: CardImageSrc[9],
            description: '',
        },
        {
            imageId: 10,
            imageSrc: CardImageSrc[10],
            description: '',
        },
        {
            imageId: 11,
            imageSrc: CardImageSrc[11],
            description: '',
        },
        {
            imageId: 12,
            imageSrc: CardImageSrc[12],
            description: '',
        },
    ]
    return (
        <div className={Style.Retrieval}>
            <Banner />
            <div className={Style.ContentWrapper}>
                <ImageClassSelector />
                <div className={Style.ImageCardWrapper}>
                    {
                    imageCardList.map( (imageCardInfo, i) => (
                        <Link  key={i} to={`${PAGE_ID_TO_ROUTE[PAGE_ID.IMAGEDETAIL]}?imageId=${imageCardInfo.imageId}`}>
                            <ImageCard imageSrc={imageCardInfo.imageSrc} description={imageCardInfo.description}/>
                        </Link>))
                    }
                </div>
                <div className={Style.Bottom}>
                    喵~我也是有底线的
                </div>
            </div>
        </div>
    )
}

export default Retrieval;