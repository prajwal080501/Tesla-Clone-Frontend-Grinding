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
    height: 33px;
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
    font-weight: 600;
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
right: 0;
list-style: none;
background: #fff;
width: 250px;
text-decoration: none;
z-index: 100;
display: flex;
flex-direction: column;
border-radius: 10px;
transition: all 0.3s linear;
transition: opacity transform 0.3s;
transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
opacity: ${props => props.show ? '1' : '0'};

li{
    text-decoration: none;
    list-style: none;
    padding: 7px;
    text-align: left;
    margin-left: 20px;
    font-size: 14px;
    transition: all 0.3s linear;
    cursor: pointer;
    border-bottom: 1px solid rgba(0, 0, 0, .1);


    a{
        list-style: none;
        text-decoration: none;
        font-weight: 500;
    }

    
    &:hover{
        transition: all 0.5s linear;
        transform: scale(1.1);
    }
}

@media screen and (max-width: 768px) {
    position: fixed;
}


`;


export const CloseIcon = styled(AiFillCloseCircle)`
transition: all 0.3s linear;
cursor: pointer;

&:hover{
    transition: all 0.5s linear;
    transform: scale(1.2);
    color: red;
}

@media screen and (max-width: 768px) {
    position: fixed;
`;

export const CloseWrapper = styled.div`
display: flex;
justify-content: flex-end;

@media screen and (max-width: 768px) {
    margin-bottom: 20px;
}
`;