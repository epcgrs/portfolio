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
                        Gaúcho de Porto Alegre e apaixonado por tecnologia, em 2017 me formei no técnico em informática que me fez ingressar com tudo no mundo da programação, me aprimorando cada vez mais em desenvolvimento de soluções.  
                    </p>

                    <p>
                        Atualmente trabalho como desenvolvedor full-stack na empresa ECS, sou formado em Análise e Desenvolvimento de Sistemas pela Uniasselvi. 
                    </p>

                    <p>
                        Eu sempre acreditei que ajudar as pessoas seria uma coisa boa, e ajudar as pessoas a tornar seus sonhos e expectativas em realidade virou o meu. Gosto do que faço e sempre estou disposto a ajudar.
                    </p>
                </AboutWrapper>
            </Content>
        </Container>
    );
}

export default About;