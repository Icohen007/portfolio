import { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import Rodal from 'rodal';
import ProjectCard from './ProjectCard';
import ProjectDetails from './ProjectDetails';
import ClientOnlyPortal from '../Shared/ClientOnlyPortal';

const customStyles = {
  width: '90vw',
  height: '90vh',
  maxWidth: '1400rem',
  overflow: 'auto',
  zIndex: 101,
};

function ProjectContainer() {
  const [modalState, setModalState] = useState('close');
  return (
    <>
      <ProjectCard onClick={() => setModalState('open')} />
      {(modalState === 'open' || modalState === 'closing') && (
      <ClientOnlyPortal selector="#__next">
        <Rodal
          visible={modalState === 'open'}
          onClose={() => setModalState('closing')}
          onAnimationEnd={() => modalState === 'closing' && setModalState('close')}
          closeOnEsc
          customStyles={customStyles}
        >
          <ProjectDetails />
        </Rodal>
      </ClientOnlyPortal>
      )}
    </>
  );
}

export default ProjectContainer;
