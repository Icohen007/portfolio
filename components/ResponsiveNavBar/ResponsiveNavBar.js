import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { animated, config, useSpring } from 'react-spring';
import { useMediaQuery } from 'react-responsive';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import BurgerButton from './BurgerButton';
import MobileMenu from './MobileMenu';

function scrollEventListener(setScrolled) {
  return () => {
    if (window.pageYOffset < 15) {
      setScrolled(false);
      // setNavBarStyle({ color: 'transparent', borderBottom: '1px' });
    } else {
      // setNavBarStyle({color: '#272727ab', borderBottom: '1px solid');
      setScrolled(true);
    }
  };
}

const ResponsiveNavBar = () => {
  const [openNav, setOpenNav] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const [navBarStyle, setNavBarStyle] = useState({ color: 'transparent', borderBottom: 'none' });
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', scrollEventListener(setScrolled));
    window.removeEventListener('scroll', scrollEventListener(setScrolled));
  }, []);

  const barAnimation = useSpring({
    from: { transform: 'translate3d(0, -100rem, 0)' },
    transform: 'translate3d(0, 0, 0)',
  });

  const linkAnimation = useSpring({
    from: { transform: 'translate3d(0, 30rem, 0)', opacity: 0 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    delay: 800,
    config: config.wobbly,
  });

  const toggleNav = () => setOpenNav((open) => !open);
  return (
    <>
      {isMobile ? (
        <NavBar style={barAnimation}>
          <FlexContainer>
            <BurgerWrapper>
              <BurgerButton
                openNav={openNav}
                toggleNav={toggleNav}
              />
            </BurgerWrapper>
          </FlexContainer>
          <MobileMenu
            openNav={openNav}
            toggleNav={toggleNav}
          />
        </NavBar>
      )
        : (
          <NavBar style={barAnimation} scrolled={scrolled}>
            <FlexContainer>
              <NavLinks style={linkAnimation}>
                <MainTitle>
                  <p className="main-text">Itamar Cohen</p>
                  <p className="sub-text">Full Stack Developer</p>
                </MainTitle>
                <Link href="#"><a className="text-link">About</a></Link>
                <Link href="#"><a className="text-link">Portfolio</a></Link>
                <Link href="#"><a className="text-link">Contact</a></Link>
              </NavLinks>
              <NavLinks style={linkAnimation}>
                <a
                  className="icon-link"
                  href="https://github.com/Icohen007"
                  target="_blank"
                  title="GitHub"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="icon" />
                </a>
                <a
                  className="icon-link"
                  href="https://linkedin.com/in/itamar-cohen-007/"
                  target="_blank"
                  title="Linkedin"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="icon" />
                </a>
                <a
                  className="icon-link"
                  href="https://github.com/Icohen007"
                  target="_blank"
                  title="GitHub"
                  rel="noopener noreferrer"
                >
                  <IoMdMail className="icon" />
                </a>
                <a
                  className="icon-link"
                  href="https://github.com/Icohen007"
                  target="_blank"
                  title="GitHub"
                  rel="noopener noreferrer"
                >
                  <FaFileDownload className="icon" />
                </a>
              </NavLinks>
            </FlexContainer>
          </NavBar>
        )}
    </>
  );
};

export default ResponsiveNavBar;

const NavBar = styled(animated.nav)`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: ${(props) => (props.scrolled ? '#272727ab' : 'transparent')};
  border-bottom: ${(props) => (props.scrolled ? `1px solid ${props.theme.font.orange}` : 'none')};
  font-size: 16rem;
  z-index: 200;
  
  transition: all 0.3s ease-in;
  transition-property: background, border-bottom;
  
  @media only screen and (max-width: 768px) {
  background: rgba(0, 0, 0, 0.92);
  }
`;

const FlexContainer = styled.div`
  max-width: 100%;
  display: flex;
  align-items: center;
  margin: auto;
  padding: 0 20rem;;
  justify-content: space-between;
  height: 60rem;
  z-index: 200
`;

const NavLinks = styled(animated.ul)`
  justify-self: end;
  list-style-type: none;
  margin: auto 0;
  display: flex;
  align-items: center;
  padding: 0;
  line-height: 1;

  & .text-link {
    color: #dfe6e9;
    font-weight: 600;
    border-bottom: 1rem solid transparent;
    margin: 0 15rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #adcdfd;
      border-bottom: 1rem solid #adcdfd;
    }
    }
    
        
    & .icon-link {
    color: #dfe6e9;
    margin: 0 5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;
    
    svg {
    width: 25px;
    height: 25px;
    }

    &:hover {
      color: #c80404;
    }
  }

`;

const BurgerWrapper = styled.div`
  margin: auto 0;
  user-select: none;
`;

const MainTitle = styled.div`
 text-transform: uppercase;
 padding-right: 20rem;
 
 p {
 margin: 0;
 padding: 0;
 line-height: 1.1;
 letter-spacing: 1px;
 font-family: 'Chewy', cursive;
 }
.main-text{
  font-size: 25rem;
  color: rgb(246, 245, 243);
}

.sub-text{
  font-size: 15rem;
  color: ${({ theme }) => theme.font.orange};
  font-style: italic;
}
`;
