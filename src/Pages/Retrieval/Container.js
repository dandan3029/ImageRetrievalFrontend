import React from 'react';
import Api from '../../Api';
import Retrieval from './View';
import {Actions as ActiveImageCardProcessorActions} from '../../Components/ActiveImageCardProcessor';

import CardImageSrc from '../../Config/CARD_IMAGE';
import {IMAGE_INTEREST_OBJECT_CLASS_ID} from '../../Constant/IMAGE_INTEREST_OBJECT_CLASS';

import {connect} from 'react-redux';

class RetrievalContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageCardList: [],
            dataSource: [],
            hasGotData: false,
            imageClassId: props.imageClassId,
        };
    }

    componentDidMount() {
        const {imageClassId} = this.props;
        const imageCardList = [
            {
                imageId: 0,
                imageSrc: CardImageSrc[0],
                supercategory: ['animal', 'food', 'electronic'],
                description: '牛',
            },
            {
                imageId: 1,
                imageSrc: CardImageSrc[1],
                supercategory: ['animal', 'kitchen', 'vehicle'],
                description: '鸟',
            },
            {
                imageId: 2,
                imageSrc: CardImageSrc[2],
                supercategory: ['animal', 'builing', 'electronic'],
                description: '花',
            },
            {
                imageId: 3,
                imageSrc: CardImageSrc[3],
                supercategory: ['animal', 'water', 'electronic'],
                description: '鱼',
            },
            {
                imageId: 4,
                imageSrc: CardImageSrc[4],
                supercategory: ['plant', 'food', 'textile'],
                description: '大虾',
            },
            {
                imageId: 5,
                imageSrc: CardImageSrc[5],
                supercategory: ['plant', 'food', 'furniture'],
                description: '人物',
            },
            {
                imageId: 6,
                imageSrc: CardImageSrc[6],
                supercategory: ['sports', 'food', 'electronic'],
                description: '餐具',
            },
            {
                imageId: 7,
                imageSrc: CardImageSrc[7],
                supercategory: ['animal', 'food', 'electronic'],
                description: '水果',
            },
            {
                imageId: 8,
                imageSrc: CardImageSrc[8],
                supercategory: ['animal', 'food', 'electronic'],
                description: '蔬菜',
            },
            {
                imageId: 9,
                imageSrc: CardImageSrc[9],
                supercategory: ['animal', 'food', 'electronic'],
                description: '飞盘',
            },
            {
                imageId: 10,
                imageSrc: CardImageSrc[10],
                supercategory: ['animal', 'food', 'electronic'],
                description: '游泳衣',
            },
            {
                imageId: 11,
                imageSrc: CardImageSrc[11],
                supercategory: ['animal', 'food', 'electronic'],
                description: '动物',
            },
        ]
        this.setState({
            imageCardList,
            dataSource: imageCardList,
            hasGotData: true,
            imageClassId
        })
        const {setActiveImageCardList} = this.props;
        setActiveImageCardList(imageCardList);
    }

    componentWillReceiveProps(nextProps) {
        const dataSource = [];
        const {imageClassId} = nextProps;
        const {imageCardList} = this.state;
        if (imageClassId !== this.state.imageClassId) {
            imageCardList.forEach(imageCardInfo => {
                const { supercategory } = imageCardInfo;
                if (supercategory.indexOf(imageClassId) > -1 || imageClassId === IMAGE_INTEREST_OBJECT_CLASS_ID.ALL_CLASSES) {
                    dataSource.push(imageCardInfo);
                }
            })
            this.setState({
                dataSource,
                hasGotData: true,
                imageClassId
            })
        }
    }

    render() {
        const {dataSource, hasGotData} = this.state;
        return <Retrieval imageCardList={dataSource} hasGotData={hasGotData} />
    }
}

const mapStateToProps = state => {
    const {Retrieval: {imageClassId}} = state;
    return {imageClassId};
}

const mapDispatchToProps = {
    setActiveImageCardList: ActiveImageCardProcessorActions.setActiveImageCardList,
};

export default connect(mapStateToProps, mapDispatchToProps)(RetrievalContainer);
