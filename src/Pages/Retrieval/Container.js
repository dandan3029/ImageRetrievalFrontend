import React from 'react';
import Api from '../../Api';
import Retrieval from './View';
import {Actions as ActiveImageCardProcessorActions} from '../../Components/ActiveImageCardProcessor';

import CardImageSrc from '../../Config/CARD_IMAGE';

import {connect} from 'react-redux';

class RetrievalContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageCardList: [],
            hasGotData: false,
        };
    }

    componentDidMount() {
        const imageCardList = [
            {
                imageId: 0,
                imageSrc: CardImageSrc[0],
                description: '人',
            },
            {
                imageId: 1,
                imageSrc: CardImageSrc[1],
                description: '鸟',
            },
            {
                imageId: 2,
                imageSrc: CardImageSrc[2],
                description: '花',
            },
            {
                imageId: 3,
                imageSrc: CardImageSrc[3],
                description: '鱼',
            },
            {
                imageId: 4,
                imageSrc: CardImageSrc[4],
                description: '大虾',
            },
            {
                imageId: 5,
                imageSrc: CardImageSrc[5],
                description: '人物',
            },
            {
                imageId: 6,
                imageSrc: CardImageSrc[6],
                description: '餐具',
            },
            {
                imageId: 7,
                imageSrc: CardImageSrc[7],
                description: '水果',
            },
            {
                imageId: 8,
                imageSrc: CardImageSrc[8],
                description: '蔬菜',
            },
            {
                imageId: 9,
                imageSrc: CardImageSrc[9],
                description: '飞盘',
            },
            {
                imageId: 10,
                imageSrc: CardImageSrc[10],
                description: '游泳衣',
            },
            {
                imageId: 11,
                imageSrc: CardImageSrc[11],
                description: '动物',
            },
        ]
        this.setState({
            imageCardList,
            hasGotData: true,
        })
        const {setActiveImageCardList} = this.props;
        setActiveImageCardList(imageCardList);
    }

    render() {
        const {imageCardList, hasGotData} = this.state;
        return <Retrieval imageCardList={imageCardList} hasGotData={hasGotData} />
    }
}

const mapStateToProps = state => {

}

const mapDispatchToProps = {
    setActiveImageCardList: ActiveImageCardProcessorActions.setActiveImageCardList,
};

export default connect(mapStateToProps, mapDispatchToProps)(RetrievalContainer);
