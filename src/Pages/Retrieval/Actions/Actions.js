import * as ACTION_TYPE from './ACTION_TYPE';

export function changeFilterClassIdAction(imageClassId) {
    return {
        type: ACTION_TYPE.CHANGE_FILTER_CLASS_ID,
        imageClassId: imageClassId
    }
}