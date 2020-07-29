import styled from 'styled-components';
import useTyped from 'use-typed';
import Particles from 'react-particles-js';
import { useRef } from 'react';
import ParticlesConfig from '../lib/particlesConfig';
import AnimatedArrow from "../components/AnimatedArrow";

const Container = styled.section`
  height: 100vh;
  overflow: hidden;
  position: relative;
  background: rgb(5,26,74);
  background: linear-gradient(180deg, rgba(5,26,74,1) 0%, rgba(11,6,36,1) 100%);

  .particles {
    position: absolute;
    right: 0;
    left: 0;
    z-index: 0 !important;
    canvas {
      height: 100vh !important;
      z-index: 0;
    }
  }
`;

const FlexContainer = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
    
    h1 {
    color: ${({ theme }) => theme.font.white};
    font-size: 50rem;
    font-family: 'Raleway', sans-serif;
    }
    
    .typed {
    color: ${({ theme }) => theme.font.white};
    margin: 15rem 0;
    font-size: 35rem;
    }
    
    .typed-cursor {
      color: ${({ theme }) => theme.font.white};
      font-size: 25rem;
    }
`;

const ColoredText = styled.span`
color: ${(props) => (props.color || props.theme.font.orange)};
`;

const FloatingAvatar = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 5px 15px 0px rgba(255,255,255,0.3);
  transform: translatey(0px);
  animation: float 5s ease-in-out infinite;
  margin-bottom: 10rem;
  img { 
  width: 100%; 
  height: auto; 
  }
  
@keyframes float { 
  0% { box-shadow: 0 5px 15px 0px rgba(255,255,255,0.3); transform: translatey(0px); } 
  50% { box-shadow: 0 10px 15px 0px rgba(255,255,255,0.2); transform: translatey(-15px); } 
  100% { box-shadow: 0 5px 15px 0px rgba(255,255,255,0.3); transform: translatey(0px); } 
}
`;

const Home = () => {
  const typedRef = useRef(null);
  useTyped(typedRef, {
    strings: [
      "I'm a Full Stack developer",
      'Love to Code and Design',
    ],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true,
    backDelay: 1500,
    smartBackspace: true,
  });

  return (
    <Container>
      <Particles className="particles" params={ParticlesConfig} />
      <FlexContainer>
        <div>
          <FloatingAvatar>
            <img src="/avatar.svg" alt="Skytsunami" />
          </FloatingAvatar>
          <h1>
            Hello, I'm
            <ColoredText color="#fca92e"> Itamar Cohen </ColoredText>
          </h1>
          <span className="typed" ref={typedRef} />
        </div>
      </FlexContainer>
      <AnimatedArrow />
    </Container>
  );
};

export default Home;
