import React from 'react';
import Style from './Style.module.scss';
import LogoSrc from '../../../../Static/Retrieval/logo.png';
import {PAGE_ID, PAGE_ID_TO_ROUTE} from '../../../../Config/ROUTE'

import {withRouter} from 'react-router-dom';
import axios from 'axios';

import Input from 'antd/lib/input';
import Upload from 'antd/lib/upload';
import message from 'antd/lib/message';
import {CameraOutlined, InboxOutlined, CloseOutlined} from '@ant-design/icons';

class Banner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showUploadModal: false,
        }
    }

    handleOnSearch = (value)  => {
        if (value !== '') {
            this.props.history.push(`${PAGE_ID_TO_ROUTE[PAGE_ID.RETRIEVALRESULT]}/${value}`);
        }
    }

    handleOnOpenUploadModal = () => {
        this.setState({showUploadModal: true});
    }

    handleOnCloseUploadModal = () => {
        this.setState({showUploadModal: false});
    }
    handleOnUpload = () => {

    }

    handleOnChange(info) {
        const { status } = info.file;
        if (status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (status === 'done') {
          message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
          message.error(`${info.file.name} file upload failed.`);
        }
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

    customRequest({file, filename}) {
        console.log("uploading...");
        var formData = new FormData();
        formData.append(filename,file);
        formData.append("username", "wangdandan");
        axios.post(`/selfCenter/uploadImage`, formData)
            .then(res => {
                console.log('res=>',res);
                message.success("文件上传成功！");
                this.props.history.push(`${PAGE_ID_TO_ROUTE[PAGE_ID.RETRIEVALRESULT]}/${'飞机'}`);
            });
    }

    render () {
        const { Search } = Input;
        const { Dragger } = Upload;
        const suffix = (
            <CameraOutlined
                onClick={this.handleOnOpenUploadModal.bind(this)}
                style={{
                    fontSize: 22,
                    width: 60,
                    color: 'white',
                    cursor: 'pointer'
                }}
            />
          );
        const {showUploadModal} = this.state;
        return (
            <div className={Style.Banner}>
                <div className={Style.MainBox}>
                    <div className={Style.SkinBox}></div>
                    <div className={Style.ContentBox}>
                        <div className={Style.HomeSearch}>
                            {
                                showUploadModal?
                                <div className={Style.UploadModal}>
                                    <div className={Style.UploadModalHeader}>
                                        <CloseOutlined style={{color: 'white', cursor:'pointer', fontSize: 16}}
                                                       onClick={this.handleOnCloseUploadModal.bind(this)}/>
                                    </div>
                                    <Dragger name="file"
                                             multiple={false}
                                             onChange={this.handleOnChange.bind(this)}
                                             customRequest={this.customRequest.bind(this)}
                                             beforeUpload={this.beforeUpload.bind(this)}
                                             showUploadList={false}
                                             >
                                        <p className="ant-upload-drag-icon"><InboxOutlined /></p>
                                        <p className="ant-upload-text">请点击或者将图片拖拽到此处上传</p>
                                        <p className="ant-upload-hint">请上传大小不超过10M的图片</p>
                                    </Dragger>
                                </div>
                                :null
                            }
                            <div className={Style.Logo}>
                                <img src={LogoSrc} />
                            </div>
                            <div className={Style.Search}>
                                <Search placeholder="请输入您想要搜索的内容" 
                                        enterButton
                                        suffix={suffix}
                                        onSearch={this.handleOnSearch.bind(this)} 
                                         />
                            </div>
                            <div className={Style.HotQuery}>
                                <span>热门搜索：</span>
                                <a onClick={this.handleOnSearch.bind(this, '汽车')}>汽车</a>
                                <a onClick={this.handleOnSearch.bind(this, '行人')}>行人</a>
                                <a onClick={this.handleOnSearch.bind(this, '飞盘')}>飞盘</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Banner = withRouter(Banner);
export default Banner;