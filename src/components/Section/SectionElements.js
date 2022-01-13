import styled, {keyframes} from "styled-components";


export const Wrap = styled.div`
width: 100vw;
height: 100vh;
background-image: url('./images/model-s.jpg');
background-size: cover;
object-fit: cover;
background-position: center;
background-repeat: no-repeat;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
background-image : ${props => `url("/images/${props.bgImage}")`}


`;

export const ItemText = styled.div`
z-index: 100;
padding-top: 15vh;
text-align: center;
`;

export const ButtonGroup = styled.div`
display: flex;
margin-bottom : 5px;

@media screen and (max-width: 768px){
    display: flex;
    flex-direction: column;
}
`;

export const LeftButton = styled.div`
background-color: rgba(23,26,32,0.8);
height: 35px;
width: 225px;
color: white;
display: flex;
justify-content: center;
align-items: center;
border-radius: 100px;
opacity: 0.8;
text-transform: uppercase;
font-size: 12px;
backdrop-filter: blur(100px);
cursor: pointer;
margin: 8px;
transition: all 0.5s linear;



&:hover {
    transition: all 0.5s ease;
    transform: scale(1.07);
    opacity: 1;
}
`;

export const RightButton = styled(LeftButton)`
background-color:#fff;
color: #000;
opacity: 0.65;
transition: all 0.5s ease;


&:hover {
    transition: all 0.5s ease;
    transform: scale(1.07);
    opacity: 1;
}
`;

export const ArrowAnimation = keyframes`
0% 20% 50% 80% 100% {
    transform: translateY(0px);
}
40% {
    transform: translateY(5px);
}
60% {
    transform: translateY(3px);
`

export const DownArrow = styled.img`
height: 40px;
transition: all 0.5s linear;
animation-name: ${ArrowAnimation};
animation-duration: 1s;
animation-iteration-count: infinite;
animation-timing-function: ease;
overflow-x: hidden;
`;

export const Button = styled.div``;

export const AccessoryButton = styled.div`
background-color: rgba(23,26,32,0.8);
height: 35px;
width: 225px;
color: white;
display: flex;
justify-content: center;
align-items: center;
border-radius: 100px;
opacity: 0.8;
text-transform: uppercase;
font-size: 12px;
backdrop-filter: blur(100px);
cursor: pointer;
margin: 8px;
transition: all 0.5s linear;
margin: auto;
`;