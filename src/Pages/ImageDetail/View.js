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
                            <Button type="primary" shape="round" icon={<DownloadOutlined />} size='large'>
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