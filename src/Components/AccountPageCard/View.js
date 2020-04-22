import React from 'react';
import Style from './Style.module.scss';

import Card from '../Card';

function AccountPageCard (props) {
    const {children} = props;
    return (
        <div className={Style.AccountPageCard}>
            <div className={Style.background} />
            <Card className={Style.contentWrapper}>
                <div className={Style.imageWrapper}>
                    <div className={Style.image} />
                </div>
                <div className={Style.childrenWrapper}>
                    {children}
                </div>
            </Card>
        </div>
    )
}

export default AccountPageCard;