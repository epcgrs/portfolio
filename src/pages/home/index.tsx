import React from 'react';

import {Container, Content} from './styles';

import Header from '../../partials/header';

const Home: React.FC = () => {
    return (
        <Container>
           <Header />
            <Content>
                <h1>Hello</h1>
            </Content>
        </Container>
    );
}

export default Home;