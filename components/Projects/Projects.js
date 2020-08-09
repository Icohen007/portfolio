import React from 'react';
import styled from 'styled-components';
import UnderLine from "../Shared/UnderLine.style";

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
`;

function Projects() {
  return (
    <Container>
      <SectionTitle>
        My
        {' '}
        <span>Projects</span>
        <UnderLine />
      </SectionTitle>
    </Container>
  );
}

export default Projects;
