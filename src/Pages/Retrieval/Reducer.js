import * as ACTION_TYPE from './Actions/ACTION_TYPE';

export default (state={}, action) => {
    const {type} = action;
    switch(type) {
        case ACTION_TYPE.CHANGE_FILTER_CLASS_ID: {
            const {imageClassId} = action;
            return {
                ...state,
                imageClassId
            }
        }
        default: {
            return state;
        }
    }
}