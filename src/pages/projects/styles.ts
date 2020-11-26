import styled from 'styled-components';


export const ProjectsWrapper = styled.div`
    width: 100%;

    h2 {
        font-size: 32px;
        color: #fff;
        padding-left: 180px;
        text-shadow: 0 0 40px #ccc;
        line-height: 42px;
        margin-bottom: 20px;
    }

    .projects-list {
        max-width: 80%;
        display: flex;
        margin: auto;
        flex-wrap: wrap;
        max-height: 85vh;
        overflow: auto;
        @media screen and (max-width: 920px) {
            padding-bottom: 80px;
        }
    }
`;