import React from 'react';
import styled from 'styled-components';
import useSafari from '../../hooks/useSafari';

const StyledShinyLink = styled.a`
    color: ${({ theme }) => theme.link.blue};
    display: inline-flex;
    align-items: center;
    justify-content: ${({ center }) => (center ? 'center' : 'flex-start')};
    cursor: pointer;
    font-weight: 600;
    font-size: ${({ size = '20rem' }) => size};
    background-image: linear-gradient(to right, ${({ theme }) => theme.link.green} ,${({ theme }) => theme.link.green} 50%, ${({ theme }) => theme.link.blue} 50%);
    background-position: 100%;
    background-size: 200% 100%;
    ${({ isSafari }) => (!isSafari ? '-webkit-text-fill-color: transparent' : '')};
    -webkit-background-clip: text;
    transition: all .5s;
    margin-bottom: 3px;
    text-align: center;
    text-shadow: 0px 0px #00000000;
    
    .text-link {
    margin-left: 8px;
    
    @media only screen and (max-width: 768px) {
          margin-left: 0;
        }
    }
    
    .icon-link {
    width: 25px;
    height: 25px;
    }
    
    &:hover {
      background-position: 0;
      color: ${({ theme }) => theme.link.green}; // compatibility
    } 
    
    @media only screen and (max-width: 768px) {
    flex-direction: column;
    }
`;

const ShinyLink = ({ children, ...rest }) => {
  const isSafari = useSafari();
  return <StyledShinyLink isSafari={isSafari} {...rest}>{children}</StyledShinyLink>;
};

export default ShinyLink;
