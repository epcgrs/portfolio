import styled from 'styled-components';


export const HomeWrapper = styled.div`
    width: 100%;

    h1 {
        font-size: 40px;
        color: #fff;
        padding-left: 180px;
        text-shadow: 0 0 40px #ccc;
        line-height: 52px;
        @media screen and (max-width: 920px) {
            font-size: 32px;
            line-height: 42px;
            padding-left: 80px;
            padding-right: 80px;
        }
    }
`;