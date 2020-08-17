import React, { useContext, useRef } from 'react';
import useTyped from 'use-typed';
import Particles from 'react-particles-js';
import styled from 'styled-components';
import { particlesConfig } from '../../lib/config';
import AnimatedArrow from './AnimatedArrow';
import { ScrollContext, scrollToRef } from '../../hooks/ScrollProvider';

function Intro() {
  const { aboutRef, introRef } = useContext(ScrollContext);

  const typedRef = useRef(null);
  useTyped(typedRef, {
    strings: [
      "I'm a Full Stack Developer",
      'Love to code and design',
      'I build quality software solutions',
      "I'm detail-oriented and mission-driven",
    ],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true,
    backDelay: 1500,
    smartBackspace: true,
  });

  return (
    <Container id="intro" ref={introRef}>
      <Particles className="particles" params={particlesConfig} />
      <FlexContainer>
        <FloatingAvatar>
          <img src="/avatar.svg" alt="Itamar Avatar" />
        </FloatingAvatar>
        <div>
          <h1>
            Hello, I&apos;m
            <ColoredText> Itamar Cohen </ColoredText>
          </h1>
          <div className="typed-container">
            <span className="typed" ref={typedRef} />
          </div>
        </div>
      </FlexContainer>
      <AnimatedArrow onClick={() => scrollToRef(aboutRef)} />
    </Container>
  );
}

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
    font-family: 'Raleway', sans-serif;

    h1 {
    color: ${({ theme }) => theme.font.white};
    font-size: 50rem;
    
    @media only screen and (max-width: 768px) {
    font-size: calc(15rem + 4vw);
    }
    }
    
    .typed-container{
    height: 80rem;
    }
    
    .typed {
    color: ${({ theme }) => theme.font.white};
    margin: 15rem 0;
    font-size: 35rem;
    
        @media only screen and (max-width: 768px) {
    font-size: calc(10rem + 4vw);
    }
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
  box-shadow: 0 5px 15px 0 rgba(255,255,255,0.3);
  transform: translatey(0px);
  animation: float 5s ease-in-out infinite;
  margin-bottom: 10rem;
  
      @media only screen and (max-width: 768px) {
    width: 150px;
    height: 150px;
    }
  
  img { 
  width: 100%; 
  height: auto; 
  }
  
@keyframes float { 
  0% { box-shadow: 0 5px 15px 0 rgba(255,255,255,0.3); transform: translatey(0px); } 
  50% { box-shadow: 0 10px 15px 0 rgba(255,255,255,0.2); transform: translatey(-15px); } 
  100% { box-shadow: 0 5px 15px 0 rgba(255,255,255,0.3); transform: translatey(0px); } 
}
`;

export default Intro;
