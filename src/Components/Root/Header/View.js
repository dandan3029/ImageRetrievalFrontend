import React from 'react';
import {Link} from 'react-router-dom';
import Style from './Style.module.scss';

function Header (props)
{
    const {hasLoggedIn, isRetrievalLinkActive, isSelfCenterLinkActive, isLoginLinkActive, isSignUpLinkActive} = props;
    return (
        <nav className={Style.Header}>
            <div className={Style.navBox}>
                <Link className={`${Style.navItem} ${isRetrievalLinkActive ? Style.active : null}`}
                      to="/Retrieval">首页</Link>
            </div>
            <div className={Style.navBox}>
                {
                    hasLoggedIn
                    ? <Link className={`${Style.navItem} ${isSelfCenterLinkActive ? Style.active : null}`}
                            to="/SelfCenter">个人中心</Link>
                    :   [<Link className={`${Style.navItem} ${isLoginLinkActive ? Style.active : null}`}
                               to="/Login" key='/Login'>登录</Link>,' / ',
                         <Link className={`${Style.navItem} ${isSignUpLinkActive ? Style.active : null}` }
                               to="/SignUp" key='/SignUp'>注册</Link>]
                }
            </div>
        </nav>
    )
}

export default Header;