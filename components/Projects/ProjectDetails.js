import Slider from 'react-slick';
import styled from 'styled-components';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import React from 'react';
import Ripples from 'react-ripples';
import { slickSettings } from '../../lib/config';
import ShinyLink from '../Shared/ShinyLink.style';
import useLockBodyScroll from '../../hooks/useLockBodyScroll';
import SubSectionTitle from '../Shared/SubSectionTitle';

const ProjectGrid = styled.div`
  display: grid;
  gap: 1px 1px;
  grid-template-areas: "about slider slider slider" "key-features slider slider slider" "key-features tech-used tech-used tech-used" "key-features tech-used tech-used tech-used" "buttons buttons buttons buttons";
  grid-template-columns: repeat(4, auto);
  grid-template-rows: repeat(5, auto);
   
      @media only screen and  (max-width: 1150px) {
      grid-template-columns: repeat(4, auto);
  grid-template-rows: repeat(4, auto);
  grid-template-areas: "slider slider slider slider" "about tech-used tech-used tech-used" "key-features key-features key-features key-features" "buttons buttons buttons buttons";
      }
      
      @media only screen and  (max-width: 980px) {
        display: grid;
  grid-template-columns: repeat(4, auto);
  grid-template-rows: repeat(5, auto);
  grid-template-areas: "slider slider slider slider" "about about about about" "key-features key-features key-features key-features" "tech-used tech-used tech-used tech-used" "buttons buttons buttons buttons";
      }
.about { grid-area: about; }

.slider { grid-area: slider; }

.key-features { grid-area: key-features; }

.tech-used { 
grid-area: tech-used;
 
 }

.slick-container {
grid-area: slider; 
margin-bottom: 35rem;
min-height: 0;
min-width: 0;
width: 100%;
}

img.slider-image {
border: 10px ridge #adadad;
border-radius: 3px;
height: 100%;
max-height: 450rem;

  @media only screen and (max-width: 768px) {
  border: none;
  }
}
`;

const ProjectDetailsContainer = styled.div`
margin-top: 20rem;
padding: 20rem;
padding-bottom: 15rem;
text-align: center;
width: 100%;

.spacing {
letter-spacing: 1px;
}

  @media only screen and (max-width: 768px) {
  padding: 15rem 0;
  }
`;

const AboutProject = styled.div`
grid-area: about;
text-align: left;
  @media only screen and (max-width: 768px) {
  padding: 0 15rem;
  }
`;

const TechUsed = styled.div`
grid-area: tech-used;
margin-bottom: 15px;
  @media only screen and (max-width: 768px) {
  padding: 0 15rem;
  }
`;

const TechUsedIcons = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
text-align: center;

  @media only screen and (max-width: 768px) {
  padding: 0 15rem;
  }

span {
align-items: center;
display: flex;
flex-direction: column;
font-family: 'Roboto', sans-serif;
font-size:12px;
font-weight:700;
text-align: center;
}

img{
display: block;
height: 45px;
width: 45px;
}
`;

const KeyFeatures = styled.div`
grid-area: key-features;
text-align: left;
  @media only screen and (max-width: 768px) {
  padding: 0 15rem;
  }

ul{
padding: 0 10px;

li {
padding: 5px 0;
}
}
`;

const ButtonsContainer = styled.div`
align-items: center;
border-top: 1px solid;
display: flex;
grid-area: buttons;
justify-content: center;
padding-top: 30rem;
`;

const Buttons = styled.div`
align-items: center;
display: flex;
justify-content: space-between;
max-width: 350rem;
padding: 0 15rem;
    width: 100%;
`;

const Button = styled.a`
  align-items: center;
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 4px;
  color: rgb(255, 255, 255);
  cursor: pointer;
  display: inline-flex;
  font-weight: 700;
  justify-content: center;
  padding: 5rem 10rem;
  transition: transform 0.1s linear 0s;
  
  span {
  margin-right: 5px;
  }
`;

// const SliderColumn = styled.div`
// max-width: 800rem;
// `;

function ProjectDetails() {
  useLockBodyScroll();

  return (
    <ProjectDetailsContainer>
      <ShinyLink
        href="https://flixtime.now.sh"
        target="_blank"
        rel="noopener noreferrer"
        size="30rem"
        center
        style={{ marginBottom: '15rem' }}
      >
        <span className="text-link spacing">
          FLIXTIME
        </span>
      </ShinyLink>
      <ProjectGrid>
        <AboutProject>
          <SubSectionTitle>About</SubSectionTitle>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, dignissimos earum excepturi, expedita hic labore maiores quidem quo quos repudiandae similique unde vel. Laboriosam, placeat.</p>
        </AboutProject>
        <div className="slick-container">
          <Slider {...slickSettings}>
            <img className="slider-image" src="/projects/flixtime-devices.webp" alt="screenshot 1" />
            <img className="slider-image" src="/projects/flixtime-showcase.webp" alt="screenshot 2" />
            <img className="slider-image" src="/projects/flixtime-devices.webp" alt="screenshot 3" />
            <img className="slider-image" src="/projects/flixtime-showcase.webp" alt="screenshot 4" />
          </Slider>
        </div>
        <KeyFeatures>
          <SubSectionTitle>Key Features</SubSectionTitle>
          <ul>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, dignissimos earum excepturi, expedita hic labore maiores quidem quo quos repudiandae similique unde vel. Laboriosam, placeat.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, dignissimos earum excepturi, expedita hic labore maiores quidem quo quos repudiandae similique unde vel. Laboriosam, placeat.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, dignissimos earum excepturi, expedita hic labore maiores quidem quo quos repudiandae similique unde vel. Laboriosam, placeat.</li>
          </ul>
        </KeyFeatures>
        <TechUsed>
          <SubSectionTitle>Tech Used</SubSectionTitle>
          <TechUsedIcons>
            <span>
              <img src="/devIcons/next-js.svg" />
              Next.js
            </span>
            <span>
              <img src="/devIcons/react.svg" />
              React
            </span>
            <span>
              <img src="/devIcons/css-in-js.png" />
              CSS-in-JS
            </span>
          </TechUsedIcons>
        </TechUsed>
        <ButtonsContainer>
          <Buttons>
            <Ripples during={1000}>
              <Button
                href="https://github.com/Icohen007"
                target="_blank"
                rel="noopener noreferrer"
                bgColor="#333333"
              >
                <span>
                  Source Code
                </span>
                {' '}
                <FaGithub />
              </Button>
            </Ripples>
            <Ripples during={1000}>
              <Button
                href="https://flixtime.now.sh"
                target="_blank"
                rel="noopener noreferrer"
                bgColor="#004681"
              >
                <span>
                  Live Demo
                </span>
                {' '}
                <FaExternalLinkAlt />
              </Button>
            </Ripples>
          </Buttons>
        </ButtonsContainer>
      </ProjectGrid>
    </ProjectDetailsContainer>
  );
}

export default ProjectDetails;
