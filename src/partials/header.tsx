import React from 'react';

import { FiHome, FiUser, FiCode } from "react-icons/fi";
import { Link } from 'react-router-dom';

import {Nav} from './header.styles';

const MainNav: React.FC = () => {
    return (
        <Nav className="main-nav">
            <ul>
                <li> 
                    <Link to='/' title="Home">
                        <FiHome />
                    </Link> 
                </li>
                <li> 
                    <Link to='/sobre' title="Sobre">
                        <FiUser />
                    </Link> 
                </li>
                <li> 
                    <Link to='/projetos' title="Projetos">
                        <FiCode />
                    </Link> 
                </li>
            </ul>
        </Nav>
    );

}

export default MainNav;