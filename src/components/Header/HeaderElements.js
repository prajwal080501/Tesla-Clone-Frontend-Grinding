import styled from "styled-components";
import {Link} from "react-router-dom";
import {AiFillCloseCircle} from "react-icons/ai";


export const Container = styled.div`
display: flex;
flex-direction: row;
min-height:60px;
position: fixed;
align-items: center;
justify-content: space-between;
padding: 0 20px;
top: 0;
left: 0;
right: 0;
z-index:1;
`

export const Logo = styled(Link)`
    display: flex;
    height: 40px;
    justify-self: flex-start;
    padding: 10px;
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
transition: all 0.3s linear;

&:hover{
    transition: all 0.5s linear;
    transform: scale(1.2);
}
`;

export const RightMenu = styled.div`

display: flex;
align-items: center;

@media screen and (max-width: 768px) {
}


a{
    padding: 0 10px;
    cursor: pointer;
    transition: all 0.3s linear;
    font-weight: 500;

    &:hover{
        transition: all 0.5s linear;
        transform: scale(1.2);
    }        
}
`;

export const SideBar = styled.div`
position: fixed;
top: 0;
bottom: 0;
padding: 20px;
right: -100%;
background: #fff;
width: 250px;
z-index: 100;
display: flex;
flex-direction: column;


li{
    text-decoration: none;
    list-style: none;
    margin: 10px;
    text-align: left;
    margin-left: 20px;
    font-size: 14px;
    transition: all 0.3s linear;
    cursor: pointer;

    
    &:hover{
        transition: all 0.5s linear;
        transform: scale(1.1);
    }
}

`;


export const CloseIcon = styled(AiFillCloseCircle)`
align-self: flex-end;
transition: all 0.3s linear;
cursor: pointer;

&:hover{
    transition: all 0.5s linear;
    transform: scale(1.2);
    color: red;
}


`;