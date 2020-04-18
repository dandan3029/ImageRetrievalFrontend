import React from 'react';
import Style from './Style.module.scss';
import {Link} from 'react-router-dom';
import {PAGE_ID, PAGE_ID_TO_ROUTE} from '../../Config/ROUTE';

import Banner from './Components/Banner';
import ImageClassSelector from './Components/ImageClassSelector';
import ImageCard from './Components/ImageCard';

import Skeleton from 'antd/lib/skeleton';

function Retrieval (props)
{
    const {imageCardList, hasGotData} = props;
    return (
        <div className={Style.Retrieval}>
            <Banner />
            <div className={Style.ContentWrapper}>
                <ImageClassSelector />
                <div className={Style.ImageCardWrapper}>
                    <Skeleton loading={!hasGotData} active={true}>
                        {
                            imageCardList.map( (imageCardInfo, i) => (
                                <Link  key={i} to={`${PAGE_ID_TO_ROUTE[PAGE_ID.IMAGEDETAIL]}/${imageCardInfo.imageId}`}>
                                    <ImageCard imageSrc={imageCardInfo.imageSrc} description={imageCardInfo.description}/>
                                </Link>))
                        }
                    </Skeleton>
                </div>
                <div className={Style.Bottom}>
                    喵~我也是有底线的
                </div>
            </div>
        </div>
    )
}

export default Retrieval;