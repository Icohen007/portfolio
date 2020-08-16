import React, {
  useCallback, useEffect, useMemo, useRef, useState,
} from 'react';
import {
  CSSGrid, enterExitStyle, layout, makeResponsive, measureItems,
} from 'react-stonecutter';
import styled from 'styled-components';
import SubSectionTitle from '../Shared/SubSectionTitle';
import UnderLine from '../Shared/UnderLine.style';
import { TECH_TYPE } from '../../lib/consts';
import Switch from './Switch.style';
import { useMobile } from '../../lib/queries';
import { techCards } from '../../lib/data';
import TechCard from './TechCard';

const Grid = makeResponsive(measureItems(CSSGrid), {
  maxWidth: 1200,
  minPadding: 20,
});

function TechSection() {
  const isMobile = useMobile();
  const [selectedTechType, setSelectedTechType] = useState(TECH_TYPE.ALL);
  const [revealMode, setRevealMode] = useState(false);
  const markerRef = useRef(null);
  const techCardComponents = useMemo(() => techCards
    .filter((techObject) => (selectedTechType === TECH_TYPE.ALL || techObject.type === selectedTechType))
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
    <>
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
    </>
  );
}

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
  background: rgba(0,49,125,0.5);
  cursor:pointer;
  font-size:14rem;
  text-transform:uppercase;
  outline:none;
  position: relative;
  border-radius: 5px;
  padding: 2px 8px;
  margin: 10px;
  user-select: none;
  letter-spacing: 1px;
  
  &.active-tech-button {
  background: white;
  color: rgb(0,49,125,1);
  }
  
  &:hover {
    background: rgba(0,49,125,0.7);
    &.active-tech-button {
    background: white;
    }
  }
`;

const TabIndicator = styled.div`
  position:absolute;
  width: 0px;
  height: 5px;
  background: rgb(0,49,125, 1);
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

export default TechSection;
