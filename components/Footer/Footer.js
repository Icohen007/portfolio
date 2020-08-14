import styled from 'styled-components';
import {
  FaFileDownload, FaGithub, FaLinkedin, FaReact,
} from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

const Container = styled.section`
  height: 120px;
  width: 100%;
  overflow: hidden;
  position: relative;
  padding: 0 10rem;
  background:  #000000;
  text-align: center;
  display: flex;
  justify-content: center;
  z-index: 1;
`;

const FooterIcons = styled.div`

margin-bottom: 10rem;

    & .icon-link {
    color: #dfe6e9;
    margin: 0 15rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;
    
    svg {
    width: 35px;
    height: 35px;
    }

    &:hover {
      color: ${({ theme }) => theme.font.orange};
    }
    
`;

const Footertext = styled.div`
font-size: 14rem;
color: white;

& .icon {
 font-size: 18rem;
 color: rgb(97, 218, 251);
 vertical-align: middle;
 transform: scale(1) rotate(0deg);
 animation: 3s infinite react-animate ease-in-out;
 
 @keyframes react-animate {
 0% {
 transform: scale(1) rotate(0deg);
 }
 
  25% {
 transform: scale(1.2) rotate(180deg);
 }
 
  50% {
 transform: scale(1) rotate(360deg);
 
 }
 
   100% {
 transform: scale(1) rotate(360deg);
 
 }
 }
}

span {
color: ${({ theme }) => theme.font.orange}
}
`;

const FooterContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;

function Footer(props) {
  return (
    <Container>
      <FooterContainer>
        <FooterIcons>
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
        </FooterIcons>
        <Footertext>
          © Made by
          {' '}
          <span>Itamar Cohen </span>
          {' '}
          with React.js
          {' '}
          <FaReact className="icon" />
        </Footertext>
      </FooterContainer>
    </Container>
  );
}

export default Footer;
