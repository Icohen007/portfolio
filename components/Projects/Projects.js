import styled from 'styled-components';
import { useContext } from 'react';
import UnderLine from '../Shared/UnderLine.style';
import StyledContainer from '../Container.style';
import ProjectContainer from './ProjectContainer';
import { ScrollContext } from '../../hooks/ScrollProvider';

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
  scroll-snap-align: start;
  scroll-margin-top: 100px;
`;

const ProjectsContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
margin-top: 100rem;
`;

function Projects() {
  const { projectsRef } = useContext(ScrollContext);

  return (
    <Container id="projects" ref={projectsRef}>
      <StyledContainer>
        <SectionTitle>
          My
          {' '}
          <span>Projects</span>
          <UnderLine />
        </SectionTitle>
        <ProjectsContainer>
          <ProjectContainer />
          <ProjectContainer />
          <ProjectContainer />
          <ProjectContainer />
        </ProjectsContainer>
      </StyledContainer>
    </Container>
  );
}

export default Projects;
