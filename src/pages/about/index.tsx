import React from 'react';

import {Container, Content} from '../../styles/globals';

import Header from '../../partials/header';

const About: React.FC = () => {
    return (
        <Container>
           <Header />
            <Content>
                <h1>Sobre</h1>
            </Content>
        </Container>
    );
}

export default About;