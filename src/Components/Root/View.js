import React from 'react';
import Header from './Header';
import Footer from './Footer';

function Rooter (props)
{
    const {children} = props;
    const {hasLoggedIn, isRetrievalLinkActive, isSelfCenterLinkActive, isLoginLinkActive, isSignUpLinkActive} = props;
    return (
        <div>
            <header>
                <Header hasLoggedIn={hasLoggedIn}
                        isRetrievalLinkActive={isRetrievalLinkActive}
                        isSelfCenterLinkActive={isSelfCenterLinkActive}
                        isLoginLinkActive={isLoginLinkActive}
                        isSignUpLinkActive={isSignUpLinkActive}
                        />
            </header>
            <main>
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default Rooter;