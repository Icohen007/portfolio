import styled from 'styled-components';
import useTyped from 'use-typed';
import Particles from 'react-particles-js';
import { useMemo, useRef } from 'react';
import useInView from 'react-cool-inview';
import ParticlesConfig from '../lib/particlesConfig';
import AnimatedArrow from '../components/AnimatedArrow';
import TechCard from '../components/About/TechCard';

const TECH_TYPE = {
  LANGUAGES: 'LANGUAGES',
  FRONTEND: 'FRONTEND',
  BACKEND: 'BACKEND',
  DATABASE: 'DATABASE',
  TESTING: 'TESTING',
  TOOLS: 'TOOLS',
};

const techCards = [
  { imageSrc: 'html-5.svg', text: 'HTML', type: TECH_TYPE.LANGUAGES },
  { imageSrc: 'css-3.svg', text: 'CSS', type: TECH_TYPE.LANGUAGES },
  { imageSrc: 'javascript.svg', text: 'Javascript', type: TECH_TYPE.LANGUAGES },
  { imageSrc: 'java.svg', text: 'Java', type: TECH_TYPE.LANGUAGES },
  { imageSrc: 'python.svg', text: 'Python', type: TECH_TYPE.LANGUAGES },
  { imageSrc: 'sql.svg', text: 'SQL', type: TECH_TYPE.LANGUAGES },
  { imageSrc: 'c.svg', text: 'C Language', type: TECH_TYPE.LANGUAGES },
  { imageSrc: 'react.svg', text: 'React.js', type: TECH_TYPE.FRONTEND },
  { imageSrc: 'redux.svg', text: 'Redux', type: TECH_TYPE.FRONTEND },
  { imageSrc: 'scss.svg', text: 'SCSS', type: TECH_TYPE.FRONTEND },
  { imageSrc: 'css-in-js.png', text: 'CSS in JS', type: TECH_TYPE.FRONTEND },
  { imageSrc: 'next-js.svg', text: 'Next.js', type: TECH_TYPE.FRONTEND },
  { imageSrc: 'spring.svg', text: 'Spring Boot', type: TECH_TYPE.BACKEND },
  { imageSrc: 'nodejs.svg', text: 'Node.js', type: TECH_TYPE.BACKEND },
  { imageSrc: 'express.png', text: 'Express', type: TECH_TYPE.BACKEND },
  { imageSrc: 'docker.svg', text: 'Docker', type: TECH_TYPE.BACKEND },
  { imageSrc: 'mysql.svg', text: 'MySQL', type: TECH_TYPE.DATABASE },
  { imageSrc: 'mongodb.png', text: 'Mongo DB', type: TECH_TYPE.DATABASE },
  { imageSrc: 'vertica.svg', text: 'Vertica', type: TECH_TYPE.DATABASE },
  { imageSrc: 'firebase.svg', text: 'FireStore', type: TECH_TYPE.DATABASE },
  { imageSrc: 'selenium.svg', text: 'Selenium', type: TECH_TYPE.TESTING },
  { imageSrc: 'junit.png', text: 'Junit', type: TECH_TYPE.TESTING },
  { imageSrc: 'jest.svg', text: 'Jest', type: TECH_TYPE.TESTING },
  { imageSrc: 'rest-assured.png', text: 'Rest Assured', type: TECH_TYPE.TESTING },
  { imageSrc: 'puppeteer.svg', text: 'Puppeteer', type: TECH_TYPE.TESTING },
  { imageSrc: 'git.svg', text: 'Git', type: TECH_TYPE.TOOLS },
  { imageSrc: 'jenkins.webp', text: 'Jenkins', type: TECH_TYPE.TOOLS },
  { imageSrc: 'jira.svg', text: 'Jira', type: TECH_TYPE.TOOLS },
  { imageSrc: 'npm.svg', text: 'NPM', type: TECH_TYPE.TOOLS },
  { imageSrc: 'eslint.svg', text: 'ESlint', type: TECH_TYPE.TOOLS },
];

const Container = styled.section`
  height: 100vh;
  overflow: hidden;
  position: relative;
  background: rgb(5,26,74);
  background: linear-gradient(180deg, rgba(5,26,74,1) 0%, rgba(11,6,36,1) 100%);

  .particles {
    position: absolute;
    right: 0;
    left: 0;
    z-index: 0 !important;
    canvas {
      height: 100vh !important;
      z-index: 0;
    }
  }
`;

const Containerr = styled.section`
  height: 100vh;
  overflow: hidden;
  position: relative;
  padding: 100rem 15rem 0 15rem;
  background:  url("/RetinaWoodOver.webp");
  text-align: center;
  display: flex;
  justify-content: center;
`;

const FlexContainer = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
    
    h1 {
    color: ${({ theme }) => theme.font.white};
    font-size: 50rem;
    font-family: 'Raleway', sans-serif;
    }
    
    .typed {
    color: ${({ theme }) => theme.font.white};
    margin: 15rem 0;
    font-size: 35rem;
    }
    
    .typed-cursor {
      color: ${({ theme }) => theme.font.white};
      font-size: 25rem;
    }
`;

const ColoredText = styled.span`
color: ${(props) => (props.color || props.theme.font.orange)};
`;

const FloatingAvatar = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 5px 15px 0px rgba(255,255,255,0.3);
  transform: translatey(0px);
  animation: float 5s ease-in-out infinite;
  margin-bottom: 10rem;
  img { 
  width: 100%; 
  height: auto; 
  }
  
@keyframes float { 
  0% { box-shadow: 0 5px 15px 0px rgba(255,255,255,0.3); transform: translatey(0px); } 
  50% { box-shadow: 0 10px 15px 0px rgba(255,255,255,0.2); transform: translatey(-15px); } 
  100% { box-shadow: 0 5px 15px 0px rgba(255,255,255,0.3); transform: translatey(0px); } 
}
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
`;

const Home = () => {
  const typedRef = useRef(null);
  useTyped(typedRef, {
    strings: [
      "I'm a Full Stack developer",
      'Love to Code and Design',
    ],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true,
    backDelay: 1500,
    smartBackspace: true,
  });

  const {
    ref: viewRef, inView, scrollDirection, entry, observe, unobserve,
  } = useInView(
    {
      threshold: 0.95,
      onChange: ({
        inView, scrollDirection, entry, observe, unobserve,
      }) => {
        console.log('change', {
          inView, scrollDirection, entry, observe, unobserve,
        });
      },
      onEnter: ({
        scrollDirection, entry, observe, unobserve,
      }) => {
        console.log('enter', {
          scrollDirection, entry, observe, unobserve,
        });
      },
      onLeave: ({
        scrollDirection, entry, observe, unobserve,
      }) => {
        console.log('leave', {
          scrollDirection, entry, observe, unobserve,
        });
      },
    },
  );

  const techCardComponents = useMemo(() => techCards.map((techObject) => <TechCard key={techObject.imageSrc} imageSrc={techObject.imageSrc} text={techObject.text} />), []);

  return (
    <>
      <Container>
        <Particles className="particles" params={ParticlesConfig} />
        <FlexContainer>
          <FloatingAvatar>
            <img src="/avatar.svg" alt="Itamar Avatar" />
          </FloatingAvatar>
          <div>
            <h1>
              Hello, I'm
              <ColoredText> Itamar Cohen </ColoredText>
            </h1>
            <span className="typed" ref={typedRef} />
          </div>
        </FlexContainer>
        <AnimatedArrow />
      </Container>
      <Containerr ref={viewRef}>
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
                <button>All</button>
                <button>Languages</button>
                <button>Frontend</button>
                <button>Backend</button>
                <button>Tools</button>
              </TechButtons>
              <TechCardContainer>
                {techCardComponents}
              </TechCardContainer>
            </div>

          </AboutContainer>
        </div>
      </Containerr>
    </>
  );
};

export default Home;
