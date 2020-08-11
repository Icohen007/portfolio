import { useState } from 'react';
import Rodal from 'rodal';
import ProjectCard from './ProjectCard';
import ProjectDetails from './ProjectDetails';
import ClientOnlyPortal from '../Shared/ClientOnlyPortal';
import { useMobile } from '../../lib/queries';

const customStylesDesktop = {
  width: '90vw',
  height: '90vh',
  maxWidth: '1400rem',
  overflow: 'auto',
  zIndex: 101,
};

const customStylesMobile = {
  width: '100vw',
  height: '100vh',
  overflow: 'auto',
  zIndex: 101,
};

function ProjectContainer() {
  const [modalState, setModalState] = useState('close');
  const isMobile = useMobile();
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
          customStyles={isMobile ? customStylesMobile : customStylesDesktop}
        >
          <ProjectDetails />
        </Rodal>
      </ClientOnlyPortal>
      )}
    </>
  );
}

export default ProjectContainer;
