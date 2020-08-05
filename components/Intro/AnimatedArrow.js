import styled from 'styled-components';

const StyledAnimatedArrow = styled.div`
position: absolute;
bottom: -30px;
left: 50%;
transform: translate(-50%, -50%);
cursor: pointer;
padding: 20px;

span {
display: block;
width: 30px;
height: 30px;
border-bottom: 1px solid ${({ theme }) => theme.font.orange};
border-right: 1px solid ${({ theme }) => theme.font.orange};
transform: rotate(45deg) translate(0, -20px);
animation: animate 2s infinite;

    @media only screen and (max-width: 768px) {
    width: 25px;
    height: 25px;
    }

&:nth-child(2){
animation-delay: -0.2s;
transform: rotate(45deg) translate(-20px, -20px);
}

&:nth-child(3){
animation-delay: -0.4s;
transform: rotate(45deg) translate(-20px, -20px);
}
}

@keyframes animate {
0% {
opacity: 0;
transform: rotate(45deg) translate(-20px, -20px);

}

50% {
opacity: 1;
border-bottom: 2px solid ${({ theme }) => theme.font.orange};
border-right: 2px solid ${({ theme }) => theme.font.orange};
}

100% {
opacity: 0;
transform: rotate(45deg) translate(20px, 20px);

}
}

`;

function AnimatedArrow({ onClick }) {
  return (
    <StyledAnimatedArrow onClick={onClick}>
      <span />
      <span />
      <span />
    </StyledAnimatedArrow>
  );
}

export default AnimatedArrow;
