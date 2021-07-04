import { useEffect, useState } from 'react';

const useSafari = () => {
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    const isSafariFound = navigator.userAgent.indexOf('Safari') > -1;
    const isChromeFound = navigator.userAgent.indexOf('Chrome') > -1;
    setIsSafari(isSafariFound && !isChromeFound);
  }, []);

  return isSafari;
};

export default useSafari;
