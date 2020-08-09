import React from 'react';
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

const Container = styled.section`
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
  position: relative;
  padding: 100rem 15rem;
  background:  url("/RetinaWoodOver.webp");
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
background: rgba(255,240,212,.4);
border: 1px ${({ theme }) => theme.font.orange} solid;
box-shadow: 0px 0px 10px 5px rgba(176,176,176,1);
p {
margin: 0;
padding: 0;
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
  margin: 40rem 0;
`;

const AboutContainer = styled(StyledContainer)`
  //max-width: 1200rem;
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  text-align: left;
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

const About = React.forwardRef((props, ref) => (
  <Container ref={ref}>
    <AboutContainer>
      <SectionTitle>
        About
        {' '}
        <span>Me</span>
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
            I Have Bachelor of Electrical Engineering (Seriously?) at Tel Aviv University.
          </p>
          I have a strong passion for web development and design which influences my professional work, as
          well as my side projects.
          I'm able to work in the 3 major areas of web development:
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
            Currently Working as a Full Stack Web Developer at
            <TaboolaSvg />
          </p>
        </AboutText>
        <Links>
          <div style={{ alignSelf: 'center' }}>
            <SubSectionTitle>
              Links
              <UnderLine />
            </SubSectionTitle>
          </div>
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
));

export default About;
