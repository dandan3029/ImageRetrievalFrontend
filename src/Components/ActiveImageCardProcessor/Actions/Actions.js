import * as ACTION_TYPE from './ACTION_TYPE';

export function setActiveImageCardList(activeImageCardList) {
    return {
        type: ACTION_TYPE.SET_ACTIVE_IMAGE_CARD_LIST,
        activeImageCardList: activeImageCardList
    };
}

export function setActiveImageCardIndex(activeImageCardIndex) {
    return {
        type: ACTION_TYPE.SET_ACTIVE_IMAGE_CARD_INDEX,
        activeImageCardIndex: activeImageCardIndex
    };
}