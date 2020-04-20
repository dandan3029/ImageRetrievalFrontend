import React from 'react';
import Style from './Style.module.scss';
import SearchBar from '../../Components/SearchBar';
import HorizontalLine from '../../Components/HorizontalLine';
import ImageSrc from '../../Static/000000131444.jpg';
import previousSrc from '../../Static/left.png';
import nextSrc from '../../Static/right.png';
import {PAGE_ID, PAGE_ID_TO_ROUTE} from '../../Config/ROUTE';

import Button from 'antd/lib/button';
import {DownloadOutlined} from '@ant-design/icons';
import {withRouter} from 'react-router-dom';

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
        const imageInfo = {
            imageId: '0',
            imageName: '1.png',
            imageSrc: ImageSrc,
            height: 400,
            width: 500,
            objects: "人物"
        }
        this.setState({
            imageId: imageId,
            imageInfo: imageInfo
        })
    }

    handleOnSearch(value) {
        if(value !== '') {
            this.props.history.push(`${PAGE_ID_TO_ROUTE[PAGE_ID.RETRIEVALRESULT]}/${value}`);
        }
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

    render() {
        const imageInfo = this.state.imageInfo;
        return (
            <div className={Style.ImageDetail}>
                <SearchBar onSearch={this.handleOnSearch.bind(this)}/>
                <HorizontalLine />
                <div className={Style.ContentWrapper}>
                    <div className={Style.LeftContent}>
                        <div className={Style.ImageView}>
                            <div className={Style.Previous}>
                                <img src={previousSrc} />
                            </div>
                            <img src={this.state.imageInfo.imageSrc} />
                            <div className={Style.Next}>
                                <img src={nextSrc} />
                            </div>
                        </div>
                        <div className={Style.DownloadButton}>
                            <Button type="primary" 
                                    shape="round" 
                                    icon={<DownloadOutlined />}
                                    size='large' 
                                    onClick={this.downloadImage.bind(this, imageInfo.imageSrc, imageInfo.imageName)}>
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
                            <span>{imageInfo.objects}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

ImageDetail = withRouter(ImageDetail);
export default ImageDetail;