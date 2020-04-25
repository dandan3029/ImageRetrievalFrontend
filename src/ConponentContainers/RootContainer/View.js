import React from 'react';
import Root from '../../Components/Root';
import {PAGE_ID, PAGE_ID_TO_ROUTE, ROUTE_TO_PAGE_ID} from '../../Config/ROUTE';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class RootContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    shouldRetrievalLinkActive (pageId) {
        return (
            pageId === PAGE_ID.RETRIEVAL ||
            pageId === PAGE_ID.RETRIEVALRESULT ||
            pageId === PAGE_ID.IMAGEDETAIL
        );
    }

    shouldLoginLinkActive (pageId) {
        return (
            pageId === PAGE_ID.LOGIN
        );
    }

    shouldSignUpLinkActive (pageId) {
        return (
            pageId === PAGE_ID.SIGNUP
        );
    }

    shouldSelfCenterLinkActive (pageId) {
        return (
            pageId === PAGE_ID.SELFCENTER
        );
    }

    render () {
        const {children, hasLoggedIn} = this.props;
        const currentPageId = ROUTE_TO_PAGE_ID[this.props.location.pathname];
        return (
            <Root hasLoggedIn={hasLoggedIn}
                  isRetrievalLinkActive={this.shouldRetrievalLinkActive(currentPageId)}
                  isLoginLinkActive={this.shouldLoginLinkActive(currentPageId)}
                  isSignUpLinkActive={this.shouldSignUpLinkActive(currentPageId)}
                  isSelfCenterLinkActive={this.shouldSelfCenterLinkActive(currentPageId)}
                  >{children}</Root>
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

RootContainer = withRouter(RootContainer);

export default connect(mapStateToProps)(RootContainer);