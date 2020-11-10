import styled from 'styled-components';

export const Nav = styled.nav`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: rgba(0,0,0,0.15);
    ul {
        padding-left: 15px;
        padding-right: 15px;
        li {
            list-style: none;
            margin-top: 15px;
            margin-bottom:  15px;
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