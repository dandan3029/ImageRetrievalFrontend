import React from 'react';
import SelfCenter from './View';
import CardImageSrc from '../../Config/CARD_IMAGE';
import {PAGE_ID, PAGE_ID_TO_ROUTE} from '../../Config/ROUTE';

import message from 'antd/lib/message';
import {withRouter} from 'react-router-dom';

class SelfCenterContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {},
            imageCardList: [],
            hasGotData: false,
            loading: false,
        }
    }

    componentDidMount() {
        const imageCardList = [
            {
                uid: 0,
                name: 'image.png',
                status: 'done', 
                url: CardImageSrc[0],
                description: '人物',
            },
            {
                uid: 1,
                name: 'image.png',
                status: 'done',
                url: CardImageSrc[1],
                description: '动物',
            },
            {
                uid: 2,
                name: 'image.png',
                status: 'done',
                url: CardImageSrc[2],
                description: '鸟',
            },
            {
                uid: 3,
                name: 'image.png',
                status: 'done',
                url: CardImageSrc[3],
                description: '鱼',
            },
            {
                uid: 4,
                name: 'image.png', 
                status: 'done',
                url: CardImageSrc[4],
                description: '厨具',
            },
            {
                uid: 5,
                name: 'image.png', 
                status: 'done',
                url: CardImageSrc[5],
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
            loading: false,
            userInfo: userInfo,
            imageCardList: imageCardList,
            hasGotData: hasGotData
        })
    }

    getBase64(img, callback) {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }

    beforeUpload(file) {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('You can only upload JPG/PNG file!');
        }
        const isLt6M = file.size / 1024 / 1024 < 10;
        if (!isLt6M) {
            message.error('Image must smaller than 6MB!');
        }
        return isJpgOrPng && isLt6M;
    }

    onChange ({ file, fileList }) {
        this.setState({imageCardList: fileList});
    }

    onPreview(file) {
        const imageId = file.uid;
        this.props.history.push(`${PAGE_ID_TO_ROUTE[PAGE_ID.IMAGEDETAIL]}/${imageId}`);
    }

    render() {
        // const {userInfo, loading, imageCardList, hasGotData} = this.state;
        return (
            <SelfCenter userInfo={this.state.userInfo}
                        imageCardList={this.state.imageCardList}
                        hasGotData={this.state.hasGotData}
                        loading={this.state.loading}
                        beforeUpload={this.beforeUpload.bind(this)}
                        onChange={this.onChange.bind(this)}
                        onPreview={this.onPreview.bind(this)}
                        />
        )
    }
}

SelfCenterContainer = withRouter(SelfCenterContainer)
export default SelfCenterContainer;