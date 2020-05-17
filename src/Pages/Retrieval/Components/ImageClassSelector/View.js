import React from 'react';
import Style from './Style.module.scss';
import Selector, {Object as SelectorObject} from '../../../../Components/Selector';
import {IMAGE_INTEREST_OBJECT_CLASS_ID, IMAGE_INTEREST_OBJECT_CLASS_ID_TO_TEXT} from '../../../../Constant/IMAGE_INTEREST_OBJECT_CLASS';

function ImageClassSelector(props)
{
    const {Series, Item} = SelectorObject;
    const {imageClassId, changeFilterClassId} = props;
    const seriesArray = [
        new Series('精选图片', Object.values({...IMAGE_INTEREST_OBJECT_CLASS_ID}).map(classId => new Item(IMAGE_INTEREST_OBJECT_CLASS_ID_TO_TEXT[classId],
            () => {
                changeFilterClassId(classId);
            }, imageClassId === classId ))),
    ]
    return <Selector seriesArray={seriesArray} className={Style.ImageClassSelector} />;
}

export default ImageClassSelector;