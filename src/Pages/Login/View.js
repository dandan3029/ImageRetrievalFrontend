import React from 'react';
import AccountPageCard from '../../Components/AccountPageCard';
import Style from './Style.module.scss';

import Input from 'antd/lib/input';
import Button from 'antd/lib/button';
import {Link} from 'react-router-dom';

function Login (props)
{
    const {username, password, onUsernameChange, onPasswordChange, onSubmit} = props;
    return (
        <AccountPageCard>
            <div className={Style.Login}>
                <div className={Style.Login}>
                    <div className={Style.title}>登录</div>
                    <form className={Style.loginForm} onSubmit={onSubmit}>
                        <div className={Style.inputWrapper}>
                            <Input className={Style.input}
                                    size={'large'}
                                    type="text"
                                    placeholder={'用户名'}
                                    autoFocus={true}
                                    value={username} 
                                    onChange={onUsernameChange} />
                            <Input className={Style.input}
                                    size={'large'}
                                    type="password"
                                    placeholder={'密码'}
                                    value={password}
                                    onChange={onPasswordChange} />
                        </div>
                        <div className={Style.linkWrapper}>
                            <Link to={'#'}>忘记密码？</Link>
                        </div>
                        <div className={Style.buttonWrapper}>
                            <Button htmlType={'button'}
                                    type={'primary'}
                                    className={Style.submitButton}
                                    onClick={onSubmit}>确认</Button>
                        </div>
                    </form>
                </div>
            </div>
        </AccountPageCard>
    )
}

export default Login;