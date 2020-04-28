import * as ACTION_TYPE from './Actions/ACTION_TYPE';

export default (state={}, action) => {
    const {type} = action;
    switch(type) {
        case ACTION_TYPE.SET_ACTIVE_IMAGE_CARD_LIST: {
            const {activeImageCardList} = action;
            return {
                ...state,
                activeImageCardList
            }
        };
        case ACTION_TYPE.SET_ACTIVE_IMAGE_CARD_INDEX: {
            const {activeImageCardIndex} = action;
            return {
                ...state,
                activeImageCardIndex
            }
        };
        default: {
            return {
                ...state,
            }
        }
    }
}