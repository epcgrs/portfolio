import React from 'react';

import { FiHome, FiUser } from "react-icons/fi";

import {Nav} from './header.styles';

const MainNav: React.FC = () => {
    return (
        <Nav className="main-nav">
            <ul>
                <li>
                    E
                </li>
            </ul>
            <ul>
                <li> <a href="#"><FiHome /></a>    </li>
                <li> <a href="#"><FiUser /></a>    </li>
            </ul>
        </Nav>
    );

}

export default MainNav;