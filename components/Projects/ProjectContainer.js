import React, { useState } from 'react';
import Rodal from 'rodal';
import ProjectCard from './ProjectCard';
import ProjectDetails from './ProjectDetails';
import ClientOnlyPortal from '../Shared/ClientOnlyPortal';
import { useMobile } from '../../lib/queries';

const customStylesDesktop = {
  width: '90vw',
  height: 'fit-content',
  maxHeight: '93vh',
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

const ProjectContainer = React.memo(({ projectData }) => {
  const [modalState, setModalState] = useState('close');
  const isMobile = useMobile();
  return (
    <>
      <ProjectCard
        title={projectData.title}
        subTitle={projectData.subTitle}
        previewImage={projectData.previewImage}
        onClick={() => setModalState('open')}
      />
      {(modalState === 'open' || modalState === 'closing') && (
      <ClientOnlyPortal selector="#__next">
        <Rodal
          visible={modalState === 'open'}
          onClose={() => setModalState('closing')}
          onAnimationEnd={() => modalState === 'closing' && setModalState('close')}
          closeOnEsc
          customStyles={isMobile ? customStylesMobile : customStylesDesktop}
        >
          <ProjectDetails {...projectData} />
        </Rodal>
      </ClientOnlyPortal>
      )}
    </>
  );
});

export default ProjectContainer;
