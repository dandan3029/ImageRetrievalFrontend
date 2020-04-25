import React from 'react';
import Style from './Style.module.scss';
import Card from '../../Components/Card';
import ImageCard from '../../Components/ImageCard';
import {PAGE_ID, PAGE_ID_TO_ROUTE} from '../../Config/ROUTE';

import Skeleton from 'antd/lib/skeleton';
import {Link} from 'react-router-dom';

function SelfCenter(props) {
    const {userInfo, imageCardList, hasGotData, onUploadImage} = props;
    return (
        <div className={Style.SelfCenter}>
            <div className={Style.background} />
            <Card className={Style.contentWrapper}>
                <div className={Style.userInfoWrapper}>
                    <div className={Style.title}>个人信息</div>
                    <div className={Style.item}>
                        <span className={Style.itemKey}>用户名：</span>
                        <span className={Style.itemValue}>{userInfo.username}</span>
                    </div>
                    <div className={Style.item}>
                        <span className={Style.itemKey}>密码：</span>
                        <span className={Style.itemValue}>{userInfo.password}</span>
                    </div>
                    <div className={Style.item}>
                        <span className={Style.itemKey}>注册邮箱：</span>
                        <span className={Style.itemValue}>{userInfo.email}</span>
                    </div>
                </div>

                <div className={Style.imageWrapper}>
                    <div className={Style.title}>个人作品</div>
                    <div className={Style.imageCardWrapper}>
                        <Skeleton loading={!hasGotData} active={true}>
                            {
                                imageCardList.map( (imageCardInfo, i) => (
                                    <Link  key={i} to={`${PAGE_ID_TO_ROUTE[PAGE_ID.IMAGEDETAIL]}/${imageCardInfo.imageId}`}>
                                        <ImageCard imageSrc={imageCardInfo.imageSrc} description={imageCardInfo.description}/>
                                    </Link>))
                            }
                            <div className={Style.uploadImage} onClick={onUploadImage}>
                                +
                            </div>
                        </Skeleton>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default SelfCenter;