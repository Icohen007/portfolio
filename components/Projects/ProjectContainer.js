import React, { useEffect, useState } from 'react';
import Rodal from 'rodal';
import { useRouter } from 'next/router';
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
  const router = useRouter();

  const onAnimationEnd = () => {
    if (modalState === 'closing') {
      setModalState('close');
      router.push('/');
    }
  };

  useEffect(() => {
    const isMatch = router?.query?.projectId === projectData.id;

    if (isMatch) {
      setModalState('open');
    } else {
      setModalState('close');
    }

    return () => {
      setModalState('close');
    };
  }, [router?.query?.projectId, projectData.id]);

  return (
    <>
      <ProjectCard
        id={projectData.id}
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
          onAnimationEnd={onAnimationEnd}
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
