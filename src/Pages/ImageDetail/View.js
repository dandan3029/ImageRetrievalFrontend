import React from 'react';
import Style from './Style.module.scss';
import SearchBar from '../../Components/SearchBar';
import HorizontalLine from '../../Components/HorizontalLine';
import previousSrc from '../../Static/left.png';
import nextSrc from '../../Static/right.png';
import {PAGE_ID, PAGE_ID_TO_ROUTE} from '../../Config/ROUTE';
import {Actions as ActiveImageCardProcessorAction} from '../../Components/ActiveImageCardProcessor';
import Api from '../../Api/ImageDetail';

import Button from 'antd/lib/button';
import message from 'antd/lib/message';
import {DownloadOutlined} from '@ant-design/icons';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import axios from 'axios';

class ImageDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageId: '',
            imageInfo: {}
        }
    }

    componentDidMount() {
        const {imageId} = this.props.match.params;
        const {activeImageCardList, setActiveImageCardIndex} = this.props;
        var activeImageCardIndex = 0
        for(var i = 0 ; i < activeImageCardList.length; i ++ ) {
            var currentId = activeImageCardList[i].imageId;
            if (currentId == imageId) {
                activeImageCardIndex = i;
                setActiveImageCardIndex(activeImageCardIndex);
                break;
            }
        }
        // send api request to get the imageInfo
        Api.sendGetImageDetailAsync(imageId)
            .then(imageDetailWrapper => {
                if(imageDetailWrapper) {
                    const imageInfo = imageDetailWrapper;
                    this.setState({
                        imageId: imageId,
                        imageInfo: imageInfo
                    });
                }
            })
    }

    handleOnSearch(value) {
        if(value !== '') {
            this.props.history.push(`${PAGE_ID_TO_ROUTE[PAGE_ID.RETRIEVALRESULT]}/${value}`);
        }
    }

    downloadImageAsync(src, name) {
        const email = this.props.email;
        console.log(email);
        Api.sendGetDownloadImageAsync(email)
            .then(okWrapper => {
                if(okWrapper) {
                    const {ok} = okWrapper;
                    if (ok) {
                        this.downloadImage(src, name);
                    } else {
                        message.warning("积分不足，请上传图片以获得积分!");
                    }
                }
            })
    }

    downloadImage(src, name) {
        // 调用方式
        // 参数一： 图片的URL
        // 参数二： 图片名称，可选
        const image = new Image();
        // 解决跨域 canvas 污染问题
        image.setAttribute("crossOrigin", "anonymous");
        image.onload = function() {
          const canvas = document.createElement("canvas");
          canvas.width = image.width;
          canvas.height = image.height;
          const context = canvas.getContext("2d");
          context.drawImage(image, 0, 0, image.width, image.height);
          //得到图片的base64编码数据
          const url = canvas.toDataURL("image/png");
          // 生成一个 a 标签
          const a = document.createElement("a");
          // 创建一个点击事件
          const event = new MouseEvent("click");
          // 将 a 的 download 属性设置为我们想要下载的图片的名称，若 name 不存在则使用'图片'作为默认名称
          a.download = name || "图片";
          // 将生成的 URL 设置为 a.href 属性
          a.href = url;
          // 触发 a 的点击事件
          a.dispatchEvent(event);
          // return a;
        };
        image.src = src;
    }

    switchImage(instruct) {
        const {activeImageCardIndex, activeImageCardList, setActiveImageCardIndex} = this.props;
        var currentImageCardIndex = 0
        if ( instruct === 'prev') {
            if (activeImageCardIndex > 0) {
                currentImageCardIndex = activeImageCardIndex - 1;
            } else {
                currentImageCardIndex = activeImageCardIndex;
            }
        } else if (instruct === 'next') {
            if (activeImageCardIndex < activeImageCardList.length - 1) {
                currentImageCardIndex = activeImageCardIndex + 1;
            } else {
                currentImageCardIndex = activeImageCardIndex;
            }
        }
        setActiveImageCardIndex(currentImageCardIndex);
        const currentImageId = activeImageCardList[currentImageCardIndex].imageId;
        // send api request to get the imageInfo
        Api.sendGetImageDetailAsync(currentImageId).
            then(imageDetailWrapper => {
                if(imageDetailWrapper) {
                    const imageInfo = imageDetailWrapper;
                    this.setState({
                        imageId: currentImageId,
                        imageInfo: imageInfo
                    });
                }
            })
    }

    render() {
        const imageInfo = this.state.imageInfo;
        return (
            <div className={Style.ImageDetail}>
                <SearchBar onSearch={this.handleOnSearch.bind(this)}/>
                <HorizontalLine />
                <div className={Style.ContentWrapper}>
                    <div className={Style.LeftContent}>
                        <div className={Style.ImageView}>
                            <div className={Style.Previous} onClick={this.switchImage.bind(this, 'prev')}>
                                <img src={previousSrc} />
                            </div>
                            <img src={this.state.imageInfo.imageSrc} />
                            <div className={Style.Next} onClick={this.switchImage.bind(this, 'next')}>
                                <img src={nextSrc} />
                            </div>
                        </div>
                        <div className={Style.DownloadButton}>
                            <Button type="primary" 
                                    shape="round" 
                                    icon={<DownloadOutlined />}
                                    size='large' 
                                    onClick={this.downloadImageAsync.bind(this, imageInfo.imageSrc, imageInfo.imageName)}>
                                Download
                            </Button>
                        </div>
                    </div>
                    <div className={Style.RightContent}>
                        <div className={Style.ImageInfoHeader}>
                            <span>图片信息</span>
                        </div>
                        <div className={Style.ImageInfoItem}>
                            <span className={Style.label}>尺寸：</span>
                            <span>{imageInfo.width}px × {imageInfo.height}px</span>
                        </div>
                        <div className={Style.ImageInfoItem}>
                            <span className={Style.label}>兴趣物体：</span>
                            <span>{imageInfo.categoryChinese}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const {ActiveImageCardProcessor: {activeImageCardList, activeImageCardIndex}, AuthProcessor: { email} } = state; 
    return {
        email,
        activeImageCardList,
        activeImageCardIndex
    };
};

const mapDispatchToProps = {
    setActiveImageCardIndex: ActiveImageCardProcessorAction.setActiveImageCardIndex,
    setActiveImageCardList: ActiveImageCardProcessorAction.setActiveImageCardList,
};

ImageDetail = withRouter(ImageDetail);
export default connect(mapStateToProps, mapDispatchToProps)(ImageDetail);