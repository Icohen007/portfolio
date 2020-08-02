import React, {
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

const AboutTitle = styled.h2`
font-size: 30rem;
color: #2b2b2b;
`;

const UnderLine = styled.div`
    background: #823b00;
    height: 4rem;
    border-radius: 20%;
    margin: 2rem auto 0 auto;
    width: 60rem;
`;

const AboutText = styled.div`
font-size: 16rem;
color: ${({ theme }) => theme.font.black};
white-space: pre-wrap;
text-align: left;
`;

const AboutDetailsContainer = styled.div`
  display: flex;
  justify-content: center;
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
// rgb(0 49 125 / 90%)
// rgb(255 244 244 / 70%)
const TechButton = styled.div`
  text-align:center;
  color: ${(props) => (props.active ? 'rgb(0,49,125,0.9)' : '#fff4f4')};
  font-weight: bold;
  background: rgba(0,49,125,0.3);
  background: ${(props) => (props.active ? 'rgb(255,244,244,0.7)' : 'rgba(0,49,125,0.3)')};
  cursor:pointer;
  font-size:14rem;
  text-transform:uppercase;
  outline:none;
  position: relative;
  border-radius: 5px;
  padding: 2px 8px;
  margin: 10px;
`;

const TabIndicator = styled.div`
  position:absolute;
  width: 0px;
  height: 5px;
  background: rgb(0,49,125,0.9);
  bottom: -4px;
  left: 0px ;
  border-radius:5px;
  transition:all 600ms ease-in-out;
        @media only screen and (max-width: 768px) {
display: none;
  } 
`;

const TechCardContainer = styled.div`
//display: flex;
//flex-wrap: wrap;
//justify-content: center;
margin-top: 40rem;

span {
div {
margin: 0px auto;
}
}

li {
list-style: none;
}
`;

const Grid = makeResponsive(measureItems(CSSGrid), {
  maxWidth: 1280,
  minPadding: 20,
});

const About = React.forwardRef((props, ref) => {
  const isMobile = useMobile();
  const [selectedTechType, setSelectedTechType] = useState(TECH_TYPE.ALL);
  const markerRef = useRef(null);
  const allRef = useRef(null);
  const techCardComponents = useMemo(() => techCards
    .filter((techObject) => selectedTechType === TECH_TYPE.ALL || techObject.type === selectedTechType)
    .map((techObject) => (
      <li key={techObject.imageSrc} itemHeight={isMobile ? 80 : 120}>
        <TechCard
          imageSrc={techObject.imageSrc}
          text={techObject.text}
        />
      </li>
    )), [selectedTechType]);

  const clickHandler = (type) => (e) => {
    setSelectedTechType(type);
    markerRef.current.style.left = `${e.target.offsetLeft}px`;
    markerRef.current.style.width = `${e.target.offsetWidth}px`;
  };

  useEffect(() => {
    allRef.current.click();
  }, []);

  return (
    <Container ref={ref}>
      <AboutContainer>
        <AboutTitle> About </AboutTitle>
        <UnderLine />
        <AboutDetailsContainer>
          <AboutText>
            I’m Itamar, a Full Stack Web Developer at Taboola and Bachelor of Electrical Engineering at Tel Aviv University.
            I have a strong passion for web development and design which influences my professional work, as well as my side projects.
            I'm able to work in the 3 major areas of web development: frontend, backend, and the database.
          </AboutText>
          <Links>
            <div> adsd</div>
            <div> adsd</div>
            <div> adsd</div>
            <div> adsd</div>
          </Links>
        </AboutDetailsContainer>
        <div>
          <h2> Skill Set </h2>
          <TechButtons>
            <TechButton ref={allRef} active={selectedTechType === TECH_TYPE.ALL} onClick={clickHandler(TECH_TYPE.ALL)}>All</TechButton>
            <TechButton active={selectedTechType === TECH_TYPE.LANGUAGES} onClick={clickHandler(TECH_TYPE.LANGUAGES)}>Languages</TechButton>
            <TechButton active={selectedTechType === TECH_TYPE.FRONTEND} onClick={clickHandler(TECH_TYPE.FRONTEND)}>Frontend</TechButton>
            <TechButton active={selectedTechType === TECH_TYPE.BACKEND} onClick={clickHandler(TECH_TYPE.BACKEND)}>Backend</TechButton>
            <TechButton active={selectedTechType === TECH_TYPE.DATABASE} onClick={clickHandler(TECH_TYPE.DATABASE)}>Database</TechButton>
            <TechButton active={selectedTechType === TECH_TYPE.TESTING} onClick={clickHandler(TECH_TYPE.TESTING)}>Testing</TechButton>
            <TechButton active={selectedTechType === TECH_TYPE.TOOLS} onClick={clickHandler(TECH_TYPE.TOOLS)}>Tools</TechButton>
            <TabIndicator ref={markerRef} />
          </TechButtons>
        </div>
        <TechCardContainer>
          <Grid
            component="div"
            // columns={5}
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

      </AboutContainer>
    </Container>
  );
});

export default About;
