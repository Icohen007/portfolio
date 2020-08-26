import Slider from 'react-slick';
import styled from 'styled-components';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import React from 'react';
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
padding: 20rem 20rem 15rem 20rem;
text-align: center;
width: 100%;

p {
margin-top: 0;
}

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

p {
font-weight: 500;
padding-right: 10rem;
white-space: pre-wrap;
}
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
align-items: center;
text-align: center;
padding: 5rem;

  @media only screen and (max-width: 768px) {
  padding: 0 15rem;
  }
`;

const KeyFeatures = styled.div`
grid-area: key-features;
text-align: left;
  @media only screen and (max-width: 768px) {
  padding: 0 15rem;
  }

ul{
padding: 0 10rem;
margin: 0;
font-weight: 500;
  @media only screen and (max-width: 768px) {
  padding: 0 0 0 25rem;
  }

li {
padding: 5rem 0;
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

&.one-button{
justify-content: center;
}
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
  
  &:hover{
    background-color: ${({ bgHoverColor }) => bgHoverColor};
  }
  
  
`;

const StyledTechUsedIcon = styled.div`
align-items: center;
display: flex;
flex-direction: column;
font-family: 'Roboto', sans-serif;
font-size: 12rem;
font-weight: 700;
text-align: center;
padding: 10rem;

span {
padding-top: 2rem;
}


img{
display: block;
height: 45px;
width: 45px;
}
`;

const TechUsedIcon = ({ iconSrc, iconTitle }) => (
  <StyledTechUsedIcon>
    <img src={iconSrc} alt={iconTitle} />
    <span>{iconTitle}</span>
  </StyledTechUsedIcon>
);

function ProjectDetails({
  title,
  about,
  sliderImages,
  keyFeatures,
  techUsedIcons,
  sourceCodeLink,
  liveDemoLink,
  liveSiteLink,
}) {
  useLockBodyScroll();

  return (
    <ProjectDetailsContainer>
      <ShinyLink
        href="https://flixtime.now.sh"
        target="_blank"
        rel="noopener noreferrer"
        size="30rem"
        center
        style={{ marginBottom: '15rem', textTransform: 'uppercase' }}
      >
        <span className="text-link spacing">
          {title}
        </span>
      </ShinyLink>
      <ProjectGrid>
        <AboutProject>
          <SubSectionTitle>About</SubSectionTitle>
          <p>
            {about}
          </p>
        </AboutProject>
        <div className="slick-container">
          <Slider {...slickSettings}>
            {sliderImages.map(({ imgAlt, imgSrc }) => (
              <img
                className="slider-image"
                key={imgSrc}
                src={imgSrc}
                alt={imgAlt}
              />
            )) }
          </Slider>
        </div>
        <KeyFeatures>
          <SubSectionTitle>Key Features</SubSectionTitle>
          <ul>
            {keyFeatures.map((keyFeature) => <li key={keyFeature}>{keyFeature}</li>)}
          </ul>
        </KeyFeatures>
        <TechUsed>
          <SubSectionTitle>Tech Used</SubSectionTitle>
          <TechUsedIcons>
            {techUsedIcons.map(({ iconSrc, iconTitle }) => (
              <TechUsedIcon
                key={iconSrc}
                iconSrc={iconSrc}
                iconTitle={iconTitle}
              />
            ))}
          </TechUsedIcons>
        </TechUsed>
        <ButtonsContainer>
          <Buttons className={(liveSiteLink && !sourceCodeLink) ? 'one-button' : ''}>
            {sourceCodeLink && (
              <Button
                href={sourceCodeLink}
                target="_blank"
                rel="noopener noreferrer"
                bgColor="hsl(0, 0%, 20%)"
                bgHoverColor="hsl(0, 0%, 10%)"
              >
                <span>
                  Source Code
                </span>
                {' '}
                <FaGithub />
              </Button>
            )}
            {liveDemoLink && (
              <Button
                href={liveDemoLink}
                target="_blank"
                rel="noopener noreferrer"
                bgColor="hsl(207,100%,25%)"
                bgHoverColor="hsl(207,100%,20%)"
              >
                <span>
                  Live Demo
                </span>
                {' '}
                <FaExternalLinkAlt />
              </Button>
            )}
            {liveSiteLink && (
              <Button
                href={liveSiteLink}
                target="_blank"
                rel="noopener noreferrer"
                bgColor="hsl(127,100%,25%)"
                bgHoverColor="hsl(127,100%,20%)"
              >
                <span>
                  Live Site
                </span>
                {' '}
                <FaExternalLinkAlt />
              </Button>
            )}
          </Buttons>
        </ButtonsContainer>
      </ProjectGrid>
    </ProjectDetailsContainer>
  );
}

export default ProjectDetails;
