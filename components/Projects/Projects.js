import styled from 'styled-components';
import React, { useContext } from 'react';
import Bounce from 'react-reveal/Bounce';
import UnderLine from '../Shared/UnderLine.style';
import StyledContainer from '../Container.style';
import ProjectContainer from './ProjectContainer';
import { ScrollContext } from '../../hooks/ScrollProvider';
import { projects } from '../../lib/data';
import { useMobile } from '../../lib/queries';

const SectionTitle = styled.h1`
display: inline-block;
font-size: 60rem;
font-family: Chewy,cursive;
font-weight: 400;
color: #ececec;

span {
color: #e22837;
}
`;

const Container = styled.section`
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
  position: relative;
  padding: 100rem 15rem;
  background:  url("/BrushedAlu171717.png");
  text-align: center;
  display: flex;
  justify-content: center;
  z-index: 0;
`;

const ProjectsContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
margin-top: 100rem;
`;

const getProjectCardClassName = (isMobile, index) => {
  if (isMobile) {
    return index % 2 !== 0 ? 'primary' : 'secondary';
  }
  return (index % 4 === 2 || index % 4 === 3) ? 'secondary' : 'primary';
};

function Projects() {
  const { projectsRef } = useContext(ScrollContext);
  const isMobile = useMobile();
  return (
    <Container id="projects" ref={projectsRef}>
      <StyledContainer>
        <SectionTitle>
          <Bounce left>
            <div>
              My
              {' '}
              <span>Projects</span>
            </div>
          </Bounce>
          <Bounce left delay={200}>
            <UnderLine />
          </Bounce>
        </SectionTitle>
        <ProjectsContainer>
          {projects.map((projectData, index) => (
            <ProjectContainer
              key={index}
              projectCardClassName={getProjectCardClassName(isMobile, index + 1)}
              projectData={projectData}
            />
          ))}
        </ProjectsContainer>
      </StyledContainer>
    </Container>
  );
}

export default Projects;
