import { useEffect, useState } from 'react';

const scrollEventListener = (setScrollHeight) => () => {
  setScrollHeight(window.pageYOffset);
};

function useScrollHeight() {
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', scrollEventListener(setScrollHeight));
    return () => window.removeEventListener('scroll', scrollEventListener(setScrollHeight));
  }, []);

  return { scrollHeight };
}

export default useScrollHeight;
