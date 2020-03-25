import React from 'react';
import {Link} from 'react-router-dom';

function Header (props)
{
    return (
        <div>
            <ul>
                <li><Link to="/Retrieval">Retrieval</Link></li>
                <li><Link to="/Login">Login</Link></li>
                <li><Link to="/SignUp">SignUp</Link></li>
                <li><Link to="/SelfCenter">SelfCenter</Link></li>
            </ul>
        </div>
    )
}

export default Header;