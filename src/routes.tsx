import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/home';
import Projects from './pages/projects';
import About from './pages/about';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact />   
            <Route component={Projects} path="/projetos" />   
            <Route component={About} path="/sobre" />   
        </BrowserRouter>
    );
};

export default Routes;