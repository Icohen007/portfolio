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

const CLOSE = 'close';
const CLOSING = 'closing';
const OPEN = 'open';

const ProjectContainer = React.memo(({ projectData }) => {
  const [modalState, setModalState] = useState(CLOSE);
  const isMobile = useMobile();
  const router = useRouter();

  const onAnimationEnd = () => {
    if (modalState === CLOSING) {
      setModalState(CLOSE);
      router.push('/', undefined, { scroll: false });
    }
  };

  useEffect(() => {
    const isMatch = router?.query?.projectId === projectData.id;

    if (isMatch) {
      setModalState(OPEN);
    } else {
      setModalState(CLOSE);
    }

    return () => {
      setModalState(CLOSE);
    };
  }, [router?.query?.projectId, projectData.id]);

  return (
    <>
      <ProjectCard
        id={projectData.id}
        title={projectData.title}
        subTitle={projectData.subTitle}
        previewImage={projectData.previewImage}
        onClick={() => setModalState(OPEN)}
      />
      {(modalState === OPEN || modalState === CLOSING) && (
        <ClientOnlyPortal selector="#__next">
          <Rodal
            visible={modalState === OPEN}
            onClose={() => setModalState(CLOSING)}
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
