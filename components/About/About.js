import React, { useContext } from 'react';
import styled from 'styled-components';
import { FaFileDownload, FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { animatedCards } from '../../lib/data';
import ShinyLink from '../Shared/ShinyLink.style';
import AnimatedCard from './AnimatedCard';
import StyledContainer from '../Container.style';
import TaboolaSvg from '../TaboolaSVG';
import Triangle from '../Intro/Triangle';
import UnderLine from '../Shared/UnderLine.style';
import SectionTitle from '../Shared/SectionTitle.style';
import SubSectionTitle from '../Shared/SubSectionTitle';
import TechSection from './TechSection';
import { ScrollContext } from '../../hooks/ScrollProvider';

const Container = styled.section`
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
  position: relative;
  padding: 100rem 15rem;
  background:  url("/BrushedAluFAFAFA.png");
  text-align: center;
  display: flex;
  justify-content: center;
`;

const AboutText = styled.div`
font-size: 18rem;
color: ${({ theme }) => theme.font.black};
white-space: pre-wrap;
text-align: left;
font-family: 'Roboto', sans-serif;
max-width: 1000rem;
border-radius: 15rem;
padding: 10rem;
border: 1px ${({ theme }) => theme.font.orange} solid;
box-shadow: 0px 0px 10px 5px rgba(176,176,176,1);
p {
margin: 0;
padding: 0;
line-height: 1.5;
}

span{
    border-radius: 5px;
    padding: 2px 4px;
    color: black;
    font-weight: bold;
    background: #ffa83bab;
}
`;

const AboutDetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 40rem 0 20rem 0;
  
  @media only screen and (max-width: 768px) {
  flex-direction: column;
  }
`;

const AboutContainer = styled(StyledContainer)`
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  text-align: left;
  
      @media only screen and (max-width: 768px) {
  margin-left: 0;
  margin-top: 20rem;
  }
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
    @media only screen and (max-width: 768px) {
  flex-direction: row;
  }
`;

const AnimatedCardsContainer = styled.div`
display: flex;
justify-content: space-evenly;
flex-wrap: wrap;
position: relative;
width: 100%;
margin-top: 40rem;
padding: 0 20rem;

@media only screen and (max-width: 768px) {
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin-top: 0;
}

`;

const About = () => {
  const { aboutRef } = useContext(ScrollContext);

  return (
    <Container id="about" ref={aboutRef}>
      <AboutContainer>
        <SectionTitle>
          <span>About</span>
          {' '}
          Me
          <UnderLine />
        </SectionTitle>
        <AboutDetailsContainer>
          <AboutText>
            <p>
              I’m Itamar, a
              {' '}
              <span>Full Stack Web Developer</span>
              {' '}
              based in Israel.
            </p>
            <p>
              I have a Bachelor&apos;s degree in Electrical Engineering from Tel Aviv University.
            </p>
            <p>
              I have a strong passion for web development and design which influences my professional work & my side projects.
            </p>
            <p>
              I&apos;m always ready to challenge myself and explore new areas of work.
            </p>
            <p>
              I never stop learning and for me, each new project is another adventure.
            </p>
            I&apos;m able to work in the 3 major areas of web development:
            {' '}
            <span>Frontend</span>
            ,
            <span>Backend</span>
            , and the
            {' '}
            <span>Database</span>
            .
            <p>
              <br />
              Currently working as a Full Stack Web Developer at
              <a href="https://www.taboola.com/" target="_blank" rel="noopener noreferrer" title="Taboola"><TaboolaSvg /></a>
            </p>
          </AboutText>
          <LinksContainer>
            <div style={{ alignSelf: 'center' }}>
              <SubSectionTitle>
                Links
                <UnderLine />
              </SubSectionTitle>
            </div>
            <Links>
              <ShinyLink
                href="https://github.com/Icohen007"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="icon-link" />
                <span className="text-link">
                  GitHub
                </span>
              </ShinyLink>
              <ShinyLink
                href="https://linkedin.com/in/itamar-cohen-007/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="icon-link" />
                <span className="text-link">
                  Linkedin
                </span>
              </ShinyLink>
              {/* <ShinyLink */}
              {/*  href="https://github.com/Icohen007" */}
              {/*  target="_blank" */}
              {/*  rel="noopener noreferrer" */}
              {/* > */}
              {/*  <IoMdMail className="icon-link" /> */}
              {/*  <span className="text-link"> */}
              {/*    Mail */}
              {/*  </span> */}
              {/* </ShinyLink> */}
              <ShinyLink
                className="icon-link"
                href="https://github.com/Icohen007"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFileDownload className="icon-link" />
                <span className="text-link">
                  Resume
                </span>
              </ShinyLink>
            </Links>
          </LinksContainer>
        </AboutDetailsContainer>
        <TechSection />
        <div>
          <SubSectionTitle>
            Things I Care About
            <UnderLine />
          </SubSectionTitle>
          <AnimatedCardsContainer>
            {animatedCards.map(({ title, text, imgSrc }) => (
              <AnimatedCard
                title={title}
                text={text}
                imgSrc={imgSrc}
              />
            ))}
          </AnimatedCardsContainer>
        </div>
        <Triangle />
      </AboutContainer>
    </Container>
  );
};

export default About;
