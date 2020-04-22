import React from 'react';

import Style from './Style.module.scss';

function Card (props) {
    const {children, className} = props;
    return (
        <div className={`${Style.Card} ${className}`}>
            {children}
        </div>
    );
}

export default Card;