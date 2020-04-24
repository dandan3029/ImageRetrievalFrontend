import React from 'react';
import SignUp from './View'; 
import {REGEX} from '../../Config'

import message from 'antd/lib/message';

class SignUpContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userNameText: '',
            passwordText: '',
            confirmPasswordText: '',
            emailText: '',
            vertificationCodeText: '',

            hasSendVerificationCode: false,
            timeToNextSend: 0,
            signUpHasSucceeded: false,
        }
    }


    componentDidMount() {

    }

    onUserNameChange(ev) {
        this.setState({
            userNameText: ev.target.value,
        })
    }

    onPasswordChange(ev) {
        this.setState({
            passwordText: ev.target.value,
        })
    }
    
    onConfirmPasswordChange(ev) {
        this.setState({
            confirmPasswordText: ev.target.value,
        })
    }

    onEmailChange(ev) {
        this.setState({
            emailText: ev.target.value,
        })
    }

    onVertificationCodeChange(ev) {
        this.setState({
            vertificationCodeText: ev.target.value,
        })
    }

    onGetVerificationCodeButtonClick() {
        console.log("get verification code button click!");
        this.setState({
            hasSendVerificationCode: true,
            timeToNextSend: 30,
        }, () =>
        {
            const interval = setInterval(() =>
            {
                const {timeToNextSend} = this.state;
                this.setState({
                    timeToNextSend: timeToNextSend - 1,
                });
            }, 1000);

            setTimeout(() =>
            {
                clearInterval(interval);
                this.setState({
                    hasSendVerificationCode: false,
                });
            }, 30 * 1000);
        })
    }

    onSubmit = async e =>
    {
        e.preventDefault();
        const username = this.state.userNameText;
        const password = this.state.passwordText;
        const confirmPassword = this.state.confirmPasswordText;
        const email = this.state.emailText;
        const verificationCode = this.state.vertificationCodeText;

        if (!REGEX.USERNAME.test(username))
        {
            message.warning('请输入有效的用户名');
        }
        else if (!REGEX.PASSWORD.test(password))
        {
            message.warning('请输入有效的密码');
        }
        else if (password !== confirmPassword)
        {
            message.warning('两次输入密码不一致');
        }
        else if (!REGEX.EMAIL.test(email))
        {
            message.warning('请输入有效的邮箱');
        }
        else if (!REGEX.VERIFICATION_CODE.test(verificationCode))
        {
            message.warning('请输入有效的验证码');
        }
        else
        {
            const requestIsSuccessful = true;
            // const requestIsSuccessful = await Api.sendPostSignUpRequestAsync(username, password, name, age, address, email, verificationCode);
            console.log(username, password, email, verificationCode)
            if (requestIsSuccessful)
            {
                this.setState({
                    signUpHasSucceeded: true,
                });
            }
        }
    };

    render() {
        return (
            <SignUp userNameText={this.state.userNameText}
                    passwordText={this.state.passwordText}
                    confirmPasswordText={this.state.confirmPasswordText}
                    emailText={this.state.emailText}
                    vertificationCodeText={this.state.vertificationCOdeText}
                    hasSendVerificationCode={this.state.hasSendVerificationCode}
                    timeToNextSend={this.state.timeToNextSend}
                    signUpHasSucceeded={this.state.signUpHasSucceeded}
                    onUserNameChange={this.onUserNameChange.bind(this)}
                    onPasswordChange={this.onPasswordChange.bind(this)}
                    onConfirmPasswordChange={this.onConfirmPasswordChange.bind(this)}
                    onEmailChange={this.onEmailChange.bind(this)}
                    onVertificationCodeChange={this.onVertificationCodeChange.bind(this)}
                    onGetVerificationCodeButtonClick={this.onGetVerificationCodeButtonClick.bind(this)}
                    onEmailChange={this.onEmailChange.bind(this)}
                    onSubmit={this.onSubmit.bind(this)}
            />
        )
    }
}

export default SignUpContainer;