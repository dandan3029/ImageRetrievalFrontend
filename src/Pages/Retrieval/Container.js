import React from 'react';
import Api from '../../Api/Retrieval';
import Retrieval from './View';
import {Actions as ActiveImageCardProcessorActions} from '../../Components/ActiveImageCardProcessor';
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
        Api.sendGetImageCardListAsync()
            .then(imageCardListWrapper => {
                if(imageCardListWrapper) {
                    const {imageCardList} = imageCardListWrapper;
                    this.setState({
                        imageCardList,
                        dataSource: imageCardList,
                        hasGotData: true,
                        imageClassId
                    });
                    const {setActiveImageCardList} = this.props;
                    setActiveImageCardList(imageCardList);
                }
            })
    }

    componentWillReceiveProps(nextProps) {
        const dataSource = [];
        const {imageClassId} = nextProps;
        const {imageCardList} = this.state;
        if (imageClassId !== this.state.imageClassId) {
            imageCardList.forEach(imageCardInfo => {
                var { supercategory } = imageCardInfo;
                supercategory = supercategory.split(",");
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
