import React from 'react';
import SelfCenter from './View';
import {PAGE_ID, PAGE_ID_TO_ROUTE} from '../../Config/ROUTE';
import Api from '../../Api/SelfCenter';

import message from 'antd/lib/message';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import axios from 'axios';

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
                    console.log(userInfoWrapper);
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

    customRequest({file, filename, onSuccess}) {
        console.log("uploading...");
        var formData = new FormData();
        formData.append(filename,file);
        formData.append("imageId", file.uid.split('-')[2]);
        axios.post(`/selfCenter/uploadImage`, formData)
            .then(res => {
                console.log(res);
                onSuccess(res, file);
            });
    }
        // Api.sendPostUploadImageAsync(file)
        //     .then(dataWrapper => {
        //         if (dataWrapper) {
        //             console.log(dataWrapper);
        //         }}) 
        //     }

    onChange ({ file, fileList }) {
        console.log(file);
        if (file.status === 'done') {
            console.log("upload successfully");
            message.success(`${file.name} file uploaded successfully`);
        } else if (file.status === 'error') {
            message.error(`${file.name} file upload failed`);
        }
        this.setState({imageCardList:fileList});
    }

    onPreview(file) {
        this.componentDidMount();
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
                        customRequest={this.customRequest.bind(this)}
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