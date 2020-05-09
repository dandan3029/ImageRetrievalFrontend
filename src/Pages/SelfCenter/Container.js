import React from 'react';
import SelfCenter from './View';
import CardImageSrc from '../../Config/CARD_IMAGE';
import {PAGE_ID, PAGE_ID_TO_ROUTE} from '../../Config/ROUTE';
import Api from '../../Api/SelfCenter';

import message from 'antd/lib/message';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

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
        const {email} = this.props;
        Api.sendGetUserInfoAsync(email)
            .then(userInfoWrapper => {
                if(userInfoWrapper) {
                    const {userInfo, imageCardList} = userInfoWrapper;
                    const imageCardListFormat = [];
                    for(var i = 0 ; i < imageCardList.length; i ++ ) {
                        imageCardListFormat.push({
                            uid: imageCardList[i].imageId,
                            name: imageCardList[i].imageName,
                            status: 'done',
                            url: imageCardList[i].imageSrc,
                        })
                    }
                    this.setState({
                        userInfo,
                        imageCardList: imageCardListFormat,
                        hasGotData: true,
                        loading: false,
                    });
                }
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
        console.log(file);
        console.log(fileList);
        const length = fileList.length;
        if (length > 0) {
            if(file.uid === fileList[length -1].uid) {
                console.log("上传");
            } else {
                console.log("删除");
            }
        } else {
            console.log("删除");
        }
        this.setState({imageCardList: fileList});
    }

    onPreview(file) {
        const imageId = file.uid;
        this.props.history.push(`${PAGE_ID_TO_ROUTE[PAGE_ID.IMAGEDETAIL]}/${imageId}`);
    }

    render() {
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

const mapStatetoProps = (state) => {
    const {AuthProcessor: { email} } = state;
    return {email}
} 

SelfCenterContainer = withRouter(SelfCenterContainer)
// export default SelfCenterContainer;
export default connect(mapStatetoProps)(SelfCenterContainer);