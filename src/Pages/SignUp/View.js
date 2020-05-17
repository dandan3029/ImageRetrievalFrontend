import React from 'react';

import AccountPageCard from '../../Components/AccountPageCard';
import Style from './Style.module.scss';
import {PAGE_ID, PAGE_ID_TO_ROUTE} from '../../Config/ROUTE';
import {REGEX_TEXT} from '../../Config';

import Button from 'antd/lib/button';
import Input from 'antd/lib/input';
import {Link, withRouter} from 'react-router-dom';

function SignUp (props)
{
    const { userNameText, passwordText, confirmPasswordText, emailText, vertificationCodeText, 
            hasSendVerificationCode, timeToNextSend,signUpHasSucceeded} = props;
    const { onUserNameChange, onPasswordChange, onConfirmPasswordChange, onEmailChange, onVertificationCodeChange, 
            onGetVerificationCodeButtonClick, onSubmit} = props;
    return (
        <AccountPageCard>
            <div className={Style.SignUp}>
                {signUpHasSucceeded ?
                    <div className={Style.signUpSuccessPart}>
                        <div className={Style.title}>注册成功</div>
                        <div className={Style.buttonWrapper}>
                            <Button className={Style.toLoginButton} onClick={() => {
                                props.history.push(`${PAGE_ID_TO_ROUTE[PAGE_ID.LOGIN]}`);
                            }}>去登录
                            </Button>
                        </div>
                    </div>:
                    <div className={Style.signUpPart}>
                        <div className={Style.title}>注册</div>
                        <form className={Style.signUpForm} onSubmit={onSubmit}>
                            <div className={Style.inputWrapper}>
                                <Input className={Style.input}
                                        type="text"
                                        placeholder={`用户名 (${REGEX_TEXT.USERNAME})`}
                                        autoFocus={true}
                                        value={userNameText}
                                        onChange={onUserNameChange} 
                                        />
                                <Input className={Style.input}
                                       type="password"
                                       placeholder={`密码 (${REGEX_TEXT.PASSWORD})`}
                                       value={passwordText}
                                       onChange={onPasswordChange}
                                       />
                                <Input className={Style.input}
                                       type="password"
                                       placeholder={'确认密码'}
                                       value={confirmPasswordText}
                                       onChange={onConfirmPasswordChange} 
                                       />
                                <Input className={Style.input}
                                       type="email"
                                       placeholder={'邮箱 (接收验证码的邮箱)'}
                                       value={emailText}
                                       onChange={onEmailChange}                                    
                                       />
                                <Input type="text"
                                       placeholder={'验证码'}
                                       className={Style.input}
                                       value={vertificationCodeText}
                                       onChange={onVertificationCodeChange}
                                       addonAfter={
                                           <span className={Style.verificationCodeInputLabel}
                                                 onClick={onGetVerificationCodeButtonClick}>
                                                    {
                                                        hasSendVerificationCode ? timeToNextSend : '发送'
                                                    }
                                            </span>
                                       } />
                            </div>
                            <div className={Style.linkWrapper}>
                                <Link to={PAGE_ID_TO_ROUTE[PAGE_ID.LOGIN]}>已有帐号？去登录</Link>
                            </div>
                            <div className={Style.buttonWrapper}>
                                <Button htmlType={'button'}
                                        className={Style.submitButton}
                                        onClick={onSubmit}>确认</Button>
                            </div>
                        </form>
                    </div>

                }

            </div>
        </AccountPageCard>
    )
}

SignUp = withRouter(SignUp);
export default SignUp;