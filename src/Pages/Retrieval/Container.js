import React from 'react';
import Api from '../../Api';
import Retrieval from './View';

import CardImageSrc from '../../Config/CARD_IMAGE';

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
            imageCardList,
            hasGotData: true,
        })
    }

    render() {
        const {imageCardList, hasGotData} = this.state;
        return <Retrieval imageCardList={imageCardList} hasGotData={hasGotData} />
    }
}

export default RetrievalContainer;
