import React from 'react';
import Style from './Style.module.scss';
import Skeleton from 'antd/lib/skeleton';
import {Link} from 'react-router-dom';

import {PAGE_ID, PAGE_ID_TO_ROUTE} from '../../Config/ROUTE';
import ImageCard from '../../Components/ImageCard';
import SearchBar from '../../Components/SearchBar';
import HorizontalLine from '../../Components/HorizontalLine';
import Api from '../../Api/RetrievalResult';

import {withRouter} from 'react-router-dom';

class RetrievalResult extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchKey: '',
            hasGotData: false,
            imageCardList: [],
        }
    }
    
    handleOnSearch = (value)  => {
        if (value !== '') {
            Api.sendGetRetrievalResultAsync(value)
                .then(imageCardListWrapper => {
                    const {imageCardList} = imageCardListWrapper;
                    this.setState({
                        searchKey: value,
                        hasGotData: true,
                        imageCardList: imageCardList
                    });
        });
        }
    }

    componentDidMount() {
        const {searchKey} = this.props.match.params;
        Api.sendGetRetrievalResultAsync(searchKey)
        .then(imageCardListWrapper => {
            const {imageCardList} = imageCardListWrapper;
            this.setState({
                searchKey: searchKey,
                hasGotData: true,
                imageCardList: imageCardList
            })
        })
        // const imageCardList = [
        //     {
        //         imageId: 0,
        //         imageSrc: CardImageSrc[0],
        //         description: '',
        //     },
        //     {
        //         imageId: 1,
        //         imageSrc: CardImageSrc[1],
        //         description: '',
        //     },
        //     {
        //         imageId: 2,
        //         imageSrc: CardImageSrc[2],
        //         description: '',
        //     },
        //     {
        //         imageId: 3,
        //         imageSrc: CardImageSrc[3],
        //         description: '',
        //     },
        //     {
        //         imageId: 4,
        //         imageSrc: CardImageSrc[4],
        //         description: '',
        //     },
        //     {
        //         imageId: 5,
        //         imageSrc: CardImageSrc[5],
        //         description: '',
        //     },
        //     {
        //         imageId: 6,
        //         imageSrc: CardImageSrc[6],
        //         description: '',
        //     },
        //     {
        //         imageId: 7,
        //         imageSrc: CardImageSrc[7],
        //         description: '',
        //     },
        //     {
        //         imageId: 8,
        //         imageSrc: CardImageSrc[8],
        //         description: '',
        //     },
        //     {
        //         imageId: 9,
        //         imageSrc: CardImageSrc[9],
        //         description: '',
        //     },
        //     {
        //         imageId: 10,
        //         imageSrc: CardImageSrc[10],
        //         description: '',
        //     },
        //     {
        //         imageId: 11,
        //         imageSrc: CardImageSrc[11],
        //         description: '',
        //     },
        // ]
        // this.setState({
        //     searchKey: searchKey,
        //     hasGotData: true,
        //     imageCardList: imageCardList,
        // });
    }

    render() {
        return (
        <div className={Style.RetrievalResult}>
            <SearchBar onSearch={this.handleOnSearch.bind(this)}/>
            <HorizontalLine />
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