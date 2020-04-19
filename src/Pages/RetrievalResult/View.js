import React from 'react';
import Style from './Style.module.scss';
import Input from 'antd/lib/input';
import Skeleton from 'antd/lib/skeleton';
import {Link} from 'react-router-dom';

import {PAGE_ID, PAGE_ID_TO_ROUTE} from '../../Config/ROUTE';
import logoSrc from '../../Static/logo.png';
import CardImageSrc from '../../Config/CARD_IMAGE';
import ImageCard from '../../Components/ImageCard';
import SearchBar from '../../Components/SearchBar';

import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';

class RetrievalResult extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchKey: '',
            hasGotData: false,
            imageCardList: [],
        }
    }

    static contextTypes = {
        router: PropTypes.object.isRequired,
    }
    
    handleOnSearch = (value)  => {
        if (value !== '') {
            console.log(value);
        }
    }

    componentDidMount() {
        const {searchKey} = this.props.match.params;
        const imageCardList = [
            {
                imageId: 0,
                imageSrc: CardImageSrc[0],
                description: '',
            },
            {
                imageId: 1,
                imageSrc: CardImageSrc[1],
                description: '',
            },
            {
                imageId: 2,
                imageSrc: CardImageSrc[2],
                description: '',
            },
            {
                imageId: 3,
                imageSrc: CardImageSrc[3],
                description: '',
            },
            {
                imageId: 4,
                imageSrc: CardImageSrc[4],
                description: '',
            },
            {
                imageId: 5,
                imageSrc: CardImageSrc[5],
                description: '',
            },
            {
                imageId: 6,
                imageSrc: CardImageSrc[6],
                description: '',
            },
            {
                imageId: 7,
                imageSrc: CardImageSrc[7],
                description: '',
            },
            {
                imageId: 8,
                imageSrc: CardImageSrc[8],
                description: '',
            },
            {
                imageId: 9,
                imageSrc: CardImageSrc[9],
                description: '',
            },
            {
                imageId: 10,
                imageSrc: CardImageSrc[10],
                description: '',
            },
            {
                imageId: 11,
                imageSrc: CardImageSrc[11],
                description: '',
            },
        ]
        this.setState({
            searchKey: searchKey,
            hasGotData: true,
            imageCardList: imageCardList,
        });
    }

    render() {
        const { Search } = Input;
        console.log(this.state.searchKey)
        return (
        <div className={Style.RetrievalResult}>
            {/* <div className={Style.SearchBar}>
                <div className={Style.LogoBox}>
                    <img className={Style.LogoImg} src={logoSrc}/>
                </div>
                <div className={Style.SearchBox}>
                    <Search placeholder="请输入您想要搜索的内容" onSearch={this.handleOnSearch.bind(this)} enterButton />
                </div>
            </div> */}
            <SearchBar onSearch={this.handleOnSearch.bind(this)}/>
            <div className={Style.MainContent}>
                <div className={Style.ImageCardWrapper}>
                    <Skeleton loading={!this.state.hasGotData} active={true}>
                        {
                            this.state.imageCardList.map( (imageCardInfo, i) => (
                                <Link  key={i} to={`${PAGE_ID_TO_ROUTE[PAGE_ID.IMAGEDETAIL]}/${imageCardInfo.imageId}`}>
                                    <ImageCard imageSrc={imageCardInfo.imageSrc} description={imageCardInfo.description}/>
                                </Link>))
                        }
                    </Skeleton>
                </div>
            </div>
        </div>
    )
    }
}

RetrievalResult = withRouter(RetrievalResult);
export default RetrievalResult;