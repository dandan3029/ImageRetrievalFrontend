import React from 'react';
import Login from './View';
import {PAGE_ID, PAGE_ID_TO_ROUTE} from '../../Config/ROUTE';
import {REGEX} from '../../Config';
import {Actions as AuthProcessorActions} from '../../Components/AuthProcessor';

import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import message from 'antd/lib/message';

class LoginContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    componentDidMount() {
        const {hasLoggedIn} = this.props;
        if (hasLoggedIn) {
            message.warning('您已登录！')
            this.props.history.push(PAGE_ID_TO_ROUTE[PAGE_ID.RETRIEVAL]);
        }
    }

    onSubmit() {
        const {username, password }= this.state;
        if (!REGEX.USERNAME.test(username))
        {
            message.warning('用户名不正确');
        }
        else if (!REGEX.PASSWORD.test(password))
        {
            message.warning('密码不正确');
        }
        else
        {
            const {setLoggedIn} = this.props;
            setLoggedIn();
            this.props.history.push(PAGE_ID_TO_ROUTE[PAGE_ID.RETRIEVAL]);
            // const {setLoggedIn} = this.props;
            // const requestIsSuccessful = await Api.sendPostLoginRequestAsync(username, password);
            // if (requestIsSuccessful)
            // {
            //     setLoggedIn();
            //     browserHistory.push(PAGE_ID_TO_ROUTE[REQUIRE_LOGIN_PAGE_ID.INSURANCE_COMPANY_INSURANCE_LIST]);
            // }
        }
    }

    onUsernameChange(ev) {
        this.setState({
            username: ev.target.value,
        })
    }

    onPasswordChange(ev) {
        this.setState({
            password: ev.target.value,
        })
    }

    render() {
        return (
            <Login 
                username={this.state.username}
                password={this.state.password}
                onUsernameChange={this.onUsernameChange.bind(this)}
                onPasswordChange={this.onPasswordChange.bind(this)}
                onSubmit={this.onSubmit.bind(this)}
            />
        )
    }
}

const mapStateToProps = state =>
{
    const {AuthProcessor: {hasLoggedIn}} = state;
    return {
        hasLoggedIn,
    };
};

const mapDispatchToProps = {
    setLoggedIn: AuthProcessorActions.setLoggedInAction,
};

LoginContainer = withRouter(LoginContainer);
export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);