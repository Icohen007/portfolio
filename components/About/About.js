import React, {
  useCallback,
  useEffect, useMemo, useRef, useState,
} from 'react';
import styled from 'styled-components';
import {
  CSSGrid, layout, makeResponsive, measureItems, enterExitStyle,
} from 'react-stonecutter';
import TechCard from './TechCard';
import { techCards } from '../../lib/data';
import { TECH_TYPE } from '../../lib/consts';
import { useMobile } from '../../lib/queries';
import ShinyLink from '../Shared/ShinyLink.style';
import AnimatedCard from './AnimatedCard';

const Container = styled.section`
  min-height: 120vh;
  width: 100%;
  overflow: hidden;
  position: relative;
  padding: 100rem 15rem;
  background:  url("/RetinaWoodOver.webp");
  text-align: center;
  display: flex;
  justify-content: center;
`;

const SectionTitle = styled.h2`
display: inline-block;
font-size: 36rem;
color: #2b2b2b;
`;

const SubSectionTitle = styled.h3`
display: inline-block;
font-size: 26rem;
color: #2b2b2b;
font-family: 'Chewy', cursive;
letter-spacing: 1rem;
`;

const UnderLine = styled.div`
    background: #c15c00;
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
font-family: 'Source Sans Pro', sans-serif;
max-width: 900rem;
border-radius: 15rem;
padding: 5rem;
background: rgba(255,255,255,.4);
box-shadow: 0px 0px 10px 5px rgba(176,176,176,1);
`;

const AboutDetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 100rem;
`;

const AboutContainer = styled.div`
  max-width: 1200rem;
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: calc((100% - 63px) - 19.92px);
  position: relative;
  bottom: 10px;
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
margin: 20rem 0;

@media only screen and (max-width: 1020px) {
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
          <UnderLine />
        </SectionTitle>
        <AboutDetailsContainer>
          <AboutText>
            I’m Itamar, a Full Stack Web Developer at Taboola and Bachelor of Electrical Engineering at Tel
            Aviv University.
            I have a strong passion for web development and design which influences my professional work, as
            well as my side projects.
            I'm able to work in the 3 major areas of web development: frontend, backend, and the database.
          </AboutText>
          <Links>
            <ShinyLink href="#"> GitHub </ShinyLink>
            <a> Linkdien</a>
            <a> adsd</a>
            <a> adsd</a>
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
            <AnimatedCard title="Design Patterns" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur consequatur distinctio et facilis, itaque tempora." imgSrc="design-patterns.svg" />
            <AnimatedCard title="Design Patterns" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur consequatur distinctio et facilis, itaque tempora." imgSrc="design-patterns.svg" />
            <AnimatedCard title="Design Patterns" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur consequatur distinctio et facilis, itaque tempora." imgSrc="design-patterns.svg" />
            <AnimatedCard title="Design Patterns" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur consequatur distinctio et facilis, itaque tempora." imgSrc="design-patterns.svg" />
          </AnimatedCardsContainer>
        </div>
      </AboutContainer>
    </Container>
  );
});

export default About;
