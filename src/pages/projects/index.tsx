import React from 'react';

import {Container, Content} from '../../styles/globals';

import Header from '../../partials/header';

const Projects: React.FC = () => {
    return (
        <Container>
           <Header />
            <Content>
                <h1>Projetos</h1>
            </Content>
        </Container>
    );
}

export default Projects;