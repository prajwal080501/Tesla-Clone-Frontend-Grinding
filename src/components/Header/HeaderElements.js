import styled from "styled-components";
import {Link} from "react-router-dom";


export const Container = styled.div`
display: flex;
flex-direction: row;
min-height:60px;
position: fixed;
align-items: center;
padding: 0 20px;
top: 0;
left: 0;
right: 0;
`

export const Logo = styled(Link)`
    display: flex;
    justify-self: flex-start;
    padding: 15px;
    margin-left: 10px;
    transition: all 0.3s linear;

    &:hover {
        transition: all 0.5s linear;
        color: #fff;
        transform: scale(1.1);
    }

    img{
        font-size: 1rem;

        @media screen and (max-width: 768px) {
            display: flex;
            justify-self: flex-start;
            width: 80px;
        }
`;

export const Menu = styled.div`

display: flex;
align-items: center;
flex-direction: row;
position; absolute;
justify-content: center;
justify-self: center;
align-items: center;
flex: 1;


@media screen and (max-width: 768px) {
    display: none;
}

`;


export const MenuItem = styled(Link)`
color: #000;
text-align: center;
margin: 15px;
text-decoration: none;
font-size: 15px;
font-weight: 400;
padding: 0 5px;
flex-wrap: no-wrap;

&:hover{
    transition: all 0.5s linear;
    border-radius: 15px;
    background-color: #6b6a6700;
    backdrop-filter: blur(20px);
    padding: 5px;
}
`;

export const RightMenu = styled.div`

display: flex;
align-items: center;


@media screen and (max-width: 768px) {
    display: none;
}
`;