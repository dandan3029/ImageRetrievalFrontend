import React from 'react';
import Style from './Style.module.scss';
import Selector, {Object as SelectorObject} from '../../../../Components/Selector';

function ImageClassSelector()
{
    const {Series, Item} = SelectorObject;
    const seriesArray = [
        new Series('图片类别', [
            new Item('全部', () => null, true),
            new Item('人物', () => null),
            new Item('美食', () => null),
            new Item('动物', () => null),
            new Item('电子产品', () => null),
            new Item('厨房用具', () => null),
        ]),
    ];
    return <Selector seriesArray={seriesArray} className={Style.ImageClassSelector} />;
}

export default ImageClassSelector;