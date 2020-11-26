import styled from 'styled-components';


export const AboutWrapper = styled.div`
    width: 100%;

    h2 {
        font-size: 32px;
        color: #fff;
        padding-left: 180px;
        text-shadow: 0 0 40px #ccc;
        line-height: 42px;

        @media screen and (max-width: 920px) {
            padding-left: 50px;
            max-width: 100%;
            padding-right: 50px;
        }
    }

    h3 {
        font-size: 26px;
        color: #fff;
        line-height: 32px;
        padding-left: 180px;
        margin-top: 30px;
        margin-bottom: 30px;

        @media screen and (max-width: 920px) {
            padding-left: 50px;
            max-width: 100%;
            padding-right: 50px;
        }
    }

    p {
        color: #fff;
        font-size: 16px;
        line-height: 26px;
        padding-left: 180px;
        max-width: 60%;
        margin-bottom: 15px;

        @media screen and (max-width: 920px) {
            padding-left: 50px;
            max-width: 100%;
            padding-right: 50px;
        }
    }
    .contact-description {
        margin-top: 40px;
        font-size: 16px;
        line-height: 26px;

        @media screen and (max-width: 920px) {
            
        }
        a {
            color: yellow;
            text-decoration: underline;
            
        }
    }
`;