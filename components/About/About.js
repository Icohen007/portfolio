import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import TechCard from './TechCard';
import { techCards } from '../../lib/data';
import { TECH_TYPE } from '../../lib/consts';

const Container = styled.section`
  height: 100vh;
  overflow: hidden;
  position: relative;
  padding: 100rem 15rem 0 15rem;
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

const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 0.9fr auto;
  grid-template-rows: 1fr auto;
  max-width: 1200rem;
  gap: 6rem;
  margin-top: 100rem;
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

const TechButtons = styled.div`
display: flex;
justify-content: center
`;

const TechCardContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
`;

const About = React.forwardRef((props, ref) => {
  const [selectedTechType, setSelectedTechType] = useState(TECH_TYPE.ALL);
  const techCardComponents = useMemo(() => techCards
    .filter((techObject) => selectedTechType === TECH_TYPE.ALL || techObject.type === selectedTechType)
    .map((techObject) => (
      <TechCard
        key={techObject.imageSrc}
        imageSrc={techObject.imageSrc}
        text={techObject.text}
      />
    )), [selectedTechType]);

  return (
    <Container ref={ref}>
      <div>
        <AboutTitle> About </AboutTitle>
        <UnderLine />
        <AboutContainer>
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
          <div>
            <h2> Skill Set </h2>
            <TechButtons>
              <button onClick={() => setSelectedTechType(TECH_TYPE.ALL)}>All</button>
              <button onClick={() => setSelectedTechType(TECH_TYPE.LANGUAGES)}>Languages</button>
              <button onClick={() => setSelectedTechType(TECH_TYPE.FRONTEND)}>Frontend</button>
              <button onClick={() => setSelectedTechType(TECH_TYPE.BACKEND)}>Backend</button>
              <button onClick={() => setSelectedTechType(TECH_TYPE.TESTING)}>Testing</button>
              <button onClick={() => setSelectedTechType(TECH_TYPE.TOOLS)}>Tools</button>
            </TechButtons>
            <TechCardContainer>
              {techCardComponents}
            </TechCardContainer>
          </div>

        </AboutContainer>
      </div>
    </Container>
  );
});

export default About;
