import React from 'react';
import Header from './Header';
import Footer from './Footer';

function Rooter (props)
{
    const {children} = props;
    return (
        <div>
            <header>
                <Header />
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