import React from 'react';
import Style from './Style.module.scss';
import Skeleton from 'antd/lib/skeleton';
import {Link} from 'react-router-dom';

import {PAGE_ID, PAGE_ID_TO_ROUTE} from '../../Config/ROUTE';
import ImageCard from '../../Components/ImageCard';
import SearchBar from '../../Components/SearchBar';
import HorizontalLine from '../../Components/HorizontalLine';
import Api from '../../Api/RetrievalResult';
import {Actions as ActiveImageCardProcessorActions} from '../../Components/ActiveImageCardProcessor';

import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

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
                    const {setActiveImageCardList} = this.props;
                    setActiveImageCardList(imageCardList);
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
            });
            const {setActiveImageCardList} = this.props;
            setActiveImageCardList(imageCardList);
        })
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
                                    <ImageCard imageSrc={imageCardInfo.imageSrc} categoryChinese={imageCardInfo.categoryChinese}/>
                                </Link>))
                        }
                    </Skeleton>
                </div>
            </div>
        </div>
    )
    }
}

const mapStateToProps = state => {
    const { 
        ActiveImageCardProcessor: {
            activeImageCardList,
            activeImageCardIndex
        } } = state;
    return {activeImageCardList, activeImageCardIndex};
}

const mapDispatchToProps = {
    setActiveImageCardList: ActiveImageCardProcessorActions.setActiveImageCardList,
};

RetrievalResult = withRouter(RetrievalResult);
// export default RetrievalResult;
export default connect(mapStateToProps, mapDispatchToProps)(RetrievalResult);