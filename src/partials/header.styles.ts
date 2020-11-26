import styled from 'styled-components';

export const Nav = styled.nav`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: rgba(0,0,0,0.15);
    @media screen and (max-width: 920px) {
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 60px;
    }
    ul {
        padding-left: 15px;
        padding-right: 15px;
        @media screen and (max-width: 920px) {
            display: flex;
        }
        li {
            list-style: none;
            margin-top: 15px;
            margin-bottom:  15px;
            @media screen and (max-width: 920px) {
                margin-left: 15px;
                margin-right: 15px;
            }
            a {
                svg {
                    color: white;
                    transition: 0.4s;
                    font-size: 24px;
                }
                &:hover {
                    svg {
                        color: yellow;
                    }
                }
            }
        }
    }
`;