import React from 'react';
import Style from './Style.module.scss';
import {useParams} from 'react-router-dom';

function RetrievalResult () {
    let { searchKey } = useParams();
    console.log(searchKey)
    return (
        <div className={Style.RetrievalResult}>
            retrieval result{searchKey}
        </div>
    )
}

export default RetrievalResult;