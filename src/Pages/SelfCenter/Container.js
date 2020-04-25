import React from 'react';
import SelfCenter from './View';
import CardImageSrc from '../../Config/CARD_IMAGE';

class SelfCenterContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {},
            imageCardList: [],
            hasGotData: false,
        }
    }

    componentDidMount() {
        const imageCardList = [
            {
                imageId: 0,
                imageSrc: CardImageSrc[0],
                description: '人物',
            },
            {
                imageId: 1,
                imageSrc: CardImageSrc[1],
                description: '动物',
            },
            {
                imageId: 2,
                imageSrc: CardImageSrc[2],
                description: '鸟',
            },
            {
                imageId: 3,
                imageSrc: CardImageSrc[3],
                description: '鱼',
            },
            {
                imageId: 4,
                imageSrc: CardImageSrc[4],
                description: '厨具',
            },
            {
                imageId: 5,
                imageSrc: CardImageSrc[5],
                description: '牛奶',
            },
        ];
        const hasGotData = true;
        const userInfo = {
            username: '胖胖',
            password: '1234567890',
            email: '1766392942@qq.com',
        }
        this.setState({
            userInfo: userInfo,
            imageCardList: imageCardList,
            hasGotData: hasGotData
        })
    }

    onUploadImage() {
        console.log('upload image');
    }

    render() {
        const {userInfo, imageCardList, hasGotData} = this.state;
        return (
            <SelfCenter userInfo={userInfo}
                        imageCardList={imageCardList}
                        hasGotData={hasGotData}
                        onUploadImage={this.onUploadImage.bind(this)}
                        />
        )
    }
}

export default SelfCenterContainer;