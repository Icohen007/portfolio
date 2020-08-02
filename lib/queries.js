import { useMediaQuery } from 'react-responsive';

export const useMobile = () => useMediaQuery({ query: '(max-width: 768px)' });
export const useMobileLandscape = () => useMediaQuery({ query: '(max-width: 1000px) and (orientation:landscape)' });
