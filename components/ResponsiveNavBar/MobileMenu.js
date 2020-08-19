import styled from 'styled-components';
import { useCallback, useContext } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { ScrollContext, scrollToRef } from '../../hooks/ScrollProvider';

const StyledMobileMenu = styled.div`

.prevent-clicks {
  content: ' ';
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
}

.navigation-menu {
  content: ' ';
  position: fixed;
  top: 0;
  right: 0;
  width: 330px;
  background: rgba(0,0,0,0.97);
  height: 100vh;
  transform: skewX(0deg) translate(100%,0);
  transform-origin: top right;
  transition: all .2s ease-in;
  z-index: 100;
  
  &.active {
  transform: skewX(8deg) translate(0,0);
  
  li {
  opacity: 1;
  transform: translate(0,0);
  transition: transform .2s ease-in 0s, opacity .2s ease-in 0s;
  
    &:nth-child(1) {
    transition-delay: .2s;
    }
    
    &:nth-child(2) {
      transition-delay: .4s;
    }
    &:nth-child(3) {
      transition-delay: .6s;
    }
    &:nth-child(4) {
      transition-delay: .8s;
    }
    
    &:nth-child(5) {
      transition-delay: 1s;
    }

&:hover {
color: ${({ theme }) => theme.font.orange}}
}

}
}
  
  ul {
  position: fixed;
  right: 90px;
  top: 120px;
  transform: skewX(-8deg);
  transform-origin: top left;
  text-align: right;
  
   li {
  position: relative;
  font-size: 32rem;
  color: white;
  margin-bottom: 12rem;
  opacity: 0;
  transform: translate(0, 10px);
  transition: all .0s ease-in .3s;
  list-style: none;
  font-family: impact,sans-serif;
  cursor: pointer;
}
}
}

.icons {
    & .icon-link {
    color: #dfe6e9;
    margin: 0 5rem;
    text-decoration: none;
    cursor: pointer;
    
    svg {
    width: 30px;
    height: 30px;
    }

    &:hover {
      color: ${({ theme }) => theme.font.orange};
    }
  }
}
`;

function MobileMenu({ openNav, toggleNav }) {
  const {
    introRef, aboutRef, projectsRef, contactRef,
  } = useContext(ScrollContext);

  const scrollAndToggle = useCallback((ref) => () => {
    scrollToRef(ref);
    toggleNav();
  }, [toggleNav]);

  return (
    <StyledMobileMenu>
      {openNav && <div onClick={(e) => { e.stopPropagation(); toggleNav(); }} className="prevent-clicks" />}
      <div onClick={(e) => e.stopPropagation()} className={`navigation-menu ${openNav ? 'active' : ''}`}>
        <ul>
          <li onClick={scrollAndToggle(introRef)}>HOME</li>
          <li onClick={scrollAndToggle(aboutRef)}>ABOUT</li>
          <li onClick={scrollAndToggle(projectsRef)}>PROJECTS</li>
          <li onClick={scrollAndToggle(contactRef)}>CONTACT</li>
          <li className="icons">
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
              href="mailto:blabla@gmail.com?subject=Hey, I visited in your Portfolio&body=Hey Itamar, "
              target="_blank"
              title="Mail"
              rel="noopener noreferrer"
            >
              <IoMdMail className="icon" />
            </a>
            {/*<a*/}
            {/*  className="icon-link"*/}
            {/*  href="https://github.com/Icohen007"*/}
            {/*  target="_blank"*/}
            {/*  title="GitHub"*/}
            {/*  rel="noopener noreferrer"*/}
            {/*>*/}
            {/*  <FaFileDownload className="icon" />*/}
            {/*</a>*/}
          </li>
        </ul>
      </div>
    </StyledMobileMenu>
  );
}

export default MobileMenu;
