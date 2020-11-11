import React from 'react';

import {Container, Content} from '../../styles/globals';
import { ProjectsWrapper } from './styles';

import Header from '../../partials/header';
import ProjectBlock from '../../partials/project-block';

import data from '../../data/projects.data.json';

const Projects: React.FC = () => {
    return (
        <Container>
           <Header />
            <Content>
                <ProjectsWrapper>
                    <h2>Projetos</h2>
                    <div className="projects-list">
                        {data.map((item, key) => (
                            <ProjectBlock key={key} itemData={item} />
                        ))}
                    </div> 
                </ProjectsWrapper>
            </Content>
        </Container>
    );
}

export default Projects;