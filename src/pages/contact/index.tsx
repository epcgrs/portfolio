import React from 'react';

import {Container, Content} from '../../styles/globals';
import { AboutWrapper } from '../about/styles';

import Header from '../../partials/header';

const Contact: React.FC = () => {
    return (
        <Container>
           <Header />
            <Content>
                <AboutWrapper>
                    <h2>Contato</h2>
                    
                    <p className="contact-description">
                        Para entrar em contato basta mandar um email para <a href="mailto:emmanuelf988@gmail.com" rel="noreferrer">emmanuelf988@gmail.com</a>, <br/>
                        ou acessar meu <a href="https://www.linkedin.com/in/emmanuel-pires/" rel="noreferrer" target="_blank">Linkedin</a> 
                    </p>

                </AboutWrapper>
            </Content>
        </Container>
    );
}

export default Contact;