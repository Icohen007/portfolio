import React from 'react';
import styled from 'styled-components';
import UnderLine from '../Shared/UnderLine.style';
import ProjectCard from './ProjectCard';
import StyledContainer from '../Container.style';

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

function Projects() {
  return (
    <Container>
      <StyledContainer>
        <SectionTitle>
          My
          {' '}
          <span>Projects</span>
          <UnderLine />
        </SectionTitle>
        <ProjectsContainer>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </ProjectsContainer>
      </StyledContainer>
    </Container>
  );
}

export default Projects;
