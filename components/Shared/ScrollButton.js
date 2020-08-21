import styled from 'styled-components';
import { useContext } from 'react';
import { ScrollContext, scrollToRef } from '../../hooks/ScrollProvider';
import useScrollHeight from '../../hooks/useScrollHeight';

const StyledScrollButton = styled.div`
position: fixed;
bottom: 10px;
right: 2px;
background: rgba(0, 0, 0, 0.2);
border-radius: 20%;
cursor: pointer;
outline: none;
opacity: 0;
transform: translateY(20px);
transition: all .4s ease-in-out;
visibility: hidden;

&.visible {
opacity: 1;
transform: translateY(0px);
visibility: visible;
}

width: 60px;
z-index: 100;

img{
width: 100%;
}
`;

function ScrollButton() {
  const { introRef } = useContext(ScrollContext);
  const { scrollHeight } = useScrollHeight();

  return (
    <StyledScrollButton className={`${scrollHeight > 2500 ? 'visible' : ''}`} onClick={() => scrollToRef(introRef)}>
      <img src="/superhero.png" />
    </StyledScrollButton>
  );
}

export default ScrollButton;
