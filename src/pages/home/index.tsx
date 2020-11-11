import React from 'react';

import {Container, Content} from '../../styles/globals';
import { HomeWrapper } from './styles';
import ParticlesBg from 'particles-bg';

import Header from '../../partials/header';

const Home: React.FC = () => {
    return (
        <Container>
           <Header />
            <Content>
                <HomeWrapper>
                    <h1>Olá, me chamo Emmanuel Pires, <br/> sou desenvolvedor Full-Stack Jr.</h1>
                </HomeWrapper>
                <ParticlesBg  type="square" color="#000000" bg={true} num={10} />
            </Content>
        </Container>
    );
}

export default Home;