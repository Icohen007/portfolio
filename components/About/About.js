import React, {
  useCallback,
  useEffect, useMemo, useRef, useState,
} from 'react';
import styled from 'styled-components';
import {
  CSSGrid, layout, makeResponsive, measureItems, enterExitStyle,
} from 'react-stonecutter';
import { FaFileDownload, FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import TechCard from './TechCard';
import { animatedCards, techCards } from '../../lib/data';
import { TECH_TYPE } from '../../lib/consts';
import { useMobile } from '../../lib/queries';
import ShinyLink from '../Shared/ShinyLink.style';
import AnimatedCard from './AnimatedCard';
import StyledContainer from '../Container.style';
import TaboolaSvg from '../TaboolaSVG';

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

const SectionTitle = styled.h1`
display: inline-block;
font-size: 60rem;
font-family: Chewy,cursive;
color: #2b2b2b;

span {
color: #c80404;
}
`;

const SubSectionTitle = styled.h3`
display: inline-block;
font-size: 26rem;
color: #2b2b2b;
font-family: 'Chewy', cursive;
letter-spacing: 1rem;
margin-bottom: 20rem;
`;

const UnderLine = styled.div`
    background: ${({ theme }) => theme.font.orange};
    height: 4rem;
    border-radius: 20%;
    margin: 1rem auto 0 auto;
    width: 80%;
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

const TechText = styled.div`
font-size: 16rem;
color: ${({ theme }) => theme.font.black};
white-space: pre-wrap;
text-align: center;
`;

const TechButtons = styled.nav`
display: flex;
justify-content: center;
position: relative;
flex-wrap: wrap;
`;

const TechButton = styled.div`
  text-align:center;
  color: #fff4f4;
  font-weight: bold;
  background: rgba(0,49,125,0.4);
  cursor:pointer;
  font-size:14rem;
  text-transform:uppercase;
  outline:none;
  position: relative;
  border-radius: 5px;
  padding: 2px 8px;
  margin: 10px;
  user-select: none;
  
  &.active-tech-button {
  background: rgb(255,244,244,0.7);
  color: rgb(0,49,125,0.9);
  }
  
  &:hover {
    background: rgba(0,49,125,0.6);
    &.active-tech-button {
    background: rgb(255,244,244,0.7);
    }
  }
`;

const TabIndicator = styled.div`
  position:absolute;
  width: 0px;
  height: 5px;
  background: rgb(0,49,125,0.9);
  bottom: 0;
  left: 0px ;
  border-radius:5px;
  transition:all 600ms ease-in-out;
        @media only screen and (max-width: 768px) {
 display: none;
  } 
`;

const TechCardContainer = styled.div`
margin: 40rem 0;

span > div {

margin: 0 auto;
transition: height 1s ease-in-out;
}

li {
list-style: none;
}
`;

const Switch = styled.div`
display: inline-flex;
justify-content: center;
align-items: center;
background: linear-gradient(270deg, rgb(120 0 133 / 0.6) 0%, rgb(52 1 49 / 0.6) 100%);
padding: 5rem 8rem;
border-radius: 10rem;
color: #ffa543;
font-weight: bold;
margin-top: 5rem;

span {
padding-right: 5rem;
user-select: none;
font-size: 14rem;
}

.switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
  background-color: rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  transition: all 0.3s;
  cursor: pointer;
}

.switch:after {
  content: '';
  position: absolute;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: white;
  top: 1px;
  left: 1px;
  transition: all 0.3s;
}

input {
  position: absolute;
  left: -9999px;
}

input[type='checkbox']:checked + .switch:after {
  transform: translateX(20px);
}

input[type='checkbox']:checked + .switch {
  background-color: #0498df;
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
}

`;

const Grid = makeResponsive(measureItems(CSSGrid), {
  maxWidth: 1200,
  minPadding: 20,
});

const About = React.forwardRef((props, ref) => {
  const isMobile = useMobile();
  const [selectedTechType, setSelectedTechType] = useState(TECH_TYPE.ALL);
  const [revealMode, setRevealMode] = useState(false);
  const markerRef = useRef(null);
  const techCardComponents = useMemo(() => techCards
    .filter((techObject) => selectedTechType === TECH_TYPE.ALL || techObject.type === selectedTechType)
    .map((techObject) => (
      <li key={techObject.imageSrc} itemHeight={isMobile ? 80 : 120}>
        <TechCard
          className={revealMode ? 'reveal' : ''}
          imageSrc={techObject.imageSrc}
          text={techObject.text}
        />
      </li>
    )), [selectedTechType, revealMode]);

  const clickHandler = (type) => (e) => {
    setSelectedTechType(type);
    markerRef.current.style.left = `${e.target.offsetLeft}px`;
    markerRef.current.style.width = `${e.target.offsetWidth}px`;
  };

  useEffect(() => {
    const resizeListener = () => {
      const element = document.querySelector('.active-tech-button');
      markerRef.current.style.left = `${element.offsetLeft}px`;
      markerRef.current.style.width = `${element.offsetWidth}px`;
    };

    window.addEventListener('resize', resizeListener);
    window.addEventListener('load', resizeListener);

    return () => {
      window.removeEventListener('resize', resizeListener);
      window.addEventListener('load', resizeListener);
    };
  }, []);

  const switchHandler = useCallback(() => {
    setRevealMode((mode) => !mode);
  }, [revealMode]);

  const addActiveClassName = useCallback((selectedTech) => (selectedTech === selectedTechType ? 'active-tech-button' : ''), [selectedTechType]);

  return (
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
            <div>
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
            <ShinyLink
              href="https://github.com/Icohen007"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoMdMail className="icon-link" />
              <span className="text-link">
                Mail
              </span>
            </ShinyLink>
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
        <div>
          <SubSectionTitle>
            My Skills
            <UnderLine />
          </SubSectionTitle>
          <h3> Here is my Tech Stack, can you guess some by the logo ?</h3>
          <TechButtons>
            <TechButton
              className={addActiveClassName(TECH_TYPE.ALL)}
              onClick={clickHandler(TECH_TYPE.ALL)}
            >
              All
            </TechButton>
            <TechButton
              className={addActiveClassName(TECH_TYPE.LANGUAGES)}
              onClick={clickHandler(TECH_TYPE.LANGUAGES)}
            >
              Languages
            </TechButton>
            <TechButton
              className={addActiveClassName(TECH_TYPE.FRONTEND)}
              onClick={clickHandler(TECH_TYPE.FRONTEND)}
            >
              Frontend
            </TechButton>
            <TechButton
              className={addActiveClassName(TECH_TYPE.BACKEND)}
              onClick={clickHandler(TECH_TYPE.BACKEND)}
            >
              Backend
            </TechButton>
            <TechButton
              className={addActiveClassName(TECH_TYPE.DATABASE)}
              onClick={clickHandler(TECH_TYPE.DATABASE)}
            >
              Database
            </TechButton>
            <TechButton
              className={addActiveClassName(TECH_TYPE.TESTING)}
              onClick={clickHandler(TECH_TYPE.TESTING)}
            >
              Testing
            </TechButton>
            <TechButton
              className={addActiveClassName(TECH_TYPE.TOOLS)}
              onClick={clickHandler(TECH_TYPE.TOOLS)}
            >
              Tools
            </TechButton>
            <TabIndicator ref={markerRef} />
          </TechButtons>
          <Switch>
            <span> Lazy Mode</span>
            <input
              id="toggle"
              type="checkbox"
              onChange={switchHandler}
              checked={revealMode}
            />
            <label
              htmlFor="toggle"
              className="switch"
            />
          </Switch>
        </div>
        <TechCardContainer>
          <Grid
            component="div"
            columnWidth={isMobile ? 80 : 120}
            gutterWidth={10}
            gutterHeight={10}
            layout={layout.pinterest}
            duration={600}
            easing="cubic-bezier(0.95, 0.05, 0.795, 0.035)"
            enter={enterExitStyle.skew.enter}
            entered={enterExitStyle.skew.entered}
            exit={enterExitStyle.skew.exit}
          >
            {techCardComponents}
          </Grid>
        </TechCardContainer>
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
      </AboutContainer>
    </Container>
  );
});

export default About;
