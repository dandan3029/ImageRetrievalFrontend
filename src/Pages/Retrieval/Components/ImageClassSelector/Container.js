import React from 'react';
import {connect} from 'react-redux';
import ImageClassSelector from './View';
import {changeFilterClassIdAction} from '../../Actions/Actions';

class ImageClassSelectorContainer extends React.Component {

    render() {
        const {imageClassId, changeFilterClassId} = this.props;
        return <ImageClassSelector imageClassId={imageClassId}
                                   changeFilterClassId={changeFilterClassId} 
                                   />
    }
}

const mapStateToProps = (state) => {
    const {Retrieval: {imageClassId}} = state;
    return {imageClassId};
}

const mapDispatchToProps = {
    changeFilterClassId: changeFilterClassIdAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageClassSelectorContainer);