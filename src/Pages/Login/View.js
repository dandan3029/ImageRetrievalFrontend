import React from 'react';
import AccountPageCard from '../../Components/AccountPageCard';
import Style from './Style.module.scss';

function Login ()
{
    return (
        <AccountPageCard>
            <div className={Style.Login}>
                Login
            </div>
        </AccountPageCard>
    )
}

export default Login;