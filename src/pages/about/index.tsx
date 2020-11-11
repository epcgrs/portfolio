import React from 'react';

import {Container, Content} from '../../styles/globals';
import { AboutWrapper } from './styles';

import Header from '../../partials/header';

const About: React.FC = () => {
    return (
        <Container>
           <Header />
            <Content>
                <AboutWrapper>
                    <h2>Sobre</h2>

                    <h3>Experiências</h3>
                    
                    <p>
                        Atualmente trabalho como desenvolvedor full-stack na empresa Santins, sou formado em Técnico em informática e curso Análise e Desenvolvimento de Sistemas na Uniasselvi. Moro em Porto Alegre e a tecnologia é minha paixão.
                    </p>

                    <p>
                        Eu sempre acreditei que ajudar as pessoas seria uma coisa boa, e ajudar as pessoas a tornar seus sonhos e expectativas em realidade virou o meu. Gosto do que faço e sempre estou disposto a ajudar
                    </p>
                </AboutWrapper>
            </Content>
        </Container>
    );
}

export default About;