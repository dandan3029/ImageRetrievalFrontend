import React from 'react';
import Style from './Style.module.scss';
import Card from '../../Components/Card';

import Skeleton from 'antd/lib/skeleton';
import {LoadingOutlined, PlusOutlined} from '@ant-design/icons';
import Upload from 'antd/lib/upload';

function SelfCenter(props) {
    const {userInfo, imageCardList, hasGotData, loading, beforeUpload, customRequest, onChange, onPreview } = props;
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
                    {/* <div className={Style.item}>
                        <span className={Style.itemKey}>密码：</span>
                        <span className={Style.itemValue}>{userInfo.password}</span>
                    </div> */}
                    <div className={Style.item}>
                        <span className={Style.itemKey}>注册邮箱：</span>
                        <span className={Style.itemValue}>{userInfo.email}</span>
                    </div>
                </div>

                <div className={Style.imageWrapper}>
                    <div className={Style.title}>个人作品</div>
                    <div className={Style.imageCardWrapper}>
                        <Skeleton loading={!hasGotData} active={true}>
                            <Upload listType="picture-card"
                                    className={Style.imageCardWrapper}
                                    fileList={imageCardList}
                                    beforeUpload={beforeUpload}
                                    onPreview={onPreview}
                                    onChange={onChange}
                                    customRequest={customRequest}
                                    >
                                {loading?<LoadingOutlined/>: <PlusOutlined /> }
                            </Upload>
                        </Skeleton>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default SelfCenter;