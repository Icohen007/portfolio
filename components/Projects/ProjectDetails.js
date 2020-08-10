import Slider from 'react-slick';
import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';
import React, { useEffect, useLayoutEffect } from 'react';
import { slickSettings } from '../../lib/config';
import ShinyLink from '../Shared/ShinyLink.style';
import useLockBodyScroll from '../../hooks/useLockBodyScroll';
import SubSectionTitle from '../Shared/SubSectionTitle';

const ProjectFirstRow = styled.div`
display: flex;
justify-content: center;
align-items: flex-start;
margin-top: 20rem;

.slick-container {
min-height: 0; 
min-width: 0;
width: 100%;

}

img {
width: 70% !important;
height: 100%;
border: 10px ridge #adadad;
border-radius: 3px;
}
`;

const ProjectDetailsContainer = styled.div`
margin-top: 20rem;
padding: 10rem;
width: 100%;
text-align: center;
`;

const AboutProject = styled.div`
//mix-height: 400rem;
width: 100%;
max-width: 400rem;

`;

function ProjectDetails(props) {
  useLockBodyScroll();

  return (
    <ProjectDetailsContainer>
      <ShinyLink
        href="https://flixtime.now.sh"
        target="_blank"
        rel="noopener noreferrer"
        size="30rem"
        center
      >
        <span className="text-link">
          FLIXTIME.NOW.SH
        </span>
      </ShinyLink>
      <ProjectFirstRow>
        <AboutProject>
          <SubSectionTitle>About</SubSectionTitle>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, dignissimos earum excepturi, expedita hic labore maiores quidem quo quos repudiandae similique unde vel. Laboriosam, placeat.</p>
          <SubSectionTitle>Key Features</SubSectionTitle>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, dignissimos earum excepturi, expedita hic labore maiores quidem quo quos repudiandae similique unde vel. Laboriosam, placeat.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, dignissimos earum excepturi, expedita hic labore maiores quidem quo quos repudiandae similique unde vel. Laboriosam, placeat.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, dignissimos earum excepturi, expedita hic labore maiores quidem quo quos repudiandae similique unde vel. Laboriosam, placeat.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, dignissimos earum excepturi, expedita hic labore maiores quidem quo quos repudiandae similique unde vel. Laboriosam, placeat.</p>
        </AboutProject>
        <div className="slick-container">
          <Slider {...slickSettings}>
            <img src="/projects/flixtime-showcase.webp" alt="screenshot 1" />
            <img src="/projects/flixtime-devices.webp" alt="screenshot 1" />
            <img src="/projects/flixtime-showcase.webp" alt="screenshot 1" />
            <img src="/projects/flixtime-devices.webp" alt="screenshot 1" />
          </Slider>
        </div>

      </ProjectFirstRow>
    </ProjectDetailsContainer>
  );
}

export default ProjectDetails;
