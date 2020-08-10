import { useState } from 'react';
import Rodal from 'rodal';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';

const ProjectFirstRow = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;


function ProjectContainer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ProjectCard onClick={() => setIsOpen(true)} />
      <Rodal visible={isOpen} onClose={() => setIsOpen(false)}>
        <div>Content</div>
      </Rodal>
    </>
  );
}

export default ProjectContainer;
