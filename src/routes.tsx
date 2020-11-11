import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/home';
import Projects from './pages/projects';
import About from './pages/about';
import Contact from './pages/contact';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact />   
            <Route component={Projects} path="/projetos" />   
            <Route component={About} path="/sobre" />   
            <Route component={Contact} path="/contato" />   
        </BrowserRouter>
    );
};

export default Routes;