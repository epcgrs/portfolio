import styled from 'styled-components';

export const ProjectBlock = styled.div`
    padding: 30px;
    margin: 15px;
    background-color: transparent;
    border-radius: 15px;
    border: 3px solid orange;
    flex: 1 1 auto;
    width: 45%;

    a {
        display: block;
        margin-top: 30px;
        background-color: orange;
        color: #000;
        padding: 8px 20px;
        border-radius: 5px;
        max-width: 50%;
        border: 2px solid orange;
        transition: 0.4s;
        text-align: center;
        font-weight: 700;
        &:hover, &:focus, &:active {
            text-decoration: none;
            background-color: black;
            color: #fff;
        }
    }
    .project-title {
        font-size: 20px;
        color: #fff;
        border-radius: 10px;
        margin-bottom: 20px;
        text-shadow: 0 0 30px #ccc;
    }
    .project-tag {
        font-size: 13px;
        color: white;
        background-color: magenta;
        padding: 8px 20px;
        border-radius: 5px;
        display: inline-block;
        margin-right: 5px;
        font-weight: 700;
        &:not(:first-of-type) {
            margin-left: 5px;
        }
    }
    .project-description {
        margin-top: 20px;
        color: #fff;
        font-size: 16px;
        max-width: 90%;
        line-height: 24px;
    }
`;