import Slider from 'react-slick';
import styled from 'styled-components';
import { slickSettings } from '../../lib/config';
import ShinyLink from '../Shared/ShinyLink.style';
import useLockBodyScroll from '../../hooks/useLockBodyScroll';
import SubSectionTitle from '../Shared/SubSectionTitle';

const ProjectGrid = styled.div`
  display: grid;
    grid-template-columns: repeat(4, auto);
  grid-template-rows: repeat(5, auto);
  gap: 1px 1px;
  grid-template-areas: "about slider slider slider" "key-features slider slider slider" "key-features tech-used tech-used tech-used" "key-features tech-used tech-used tech-used" "buttons buttons buttons buttons";
   
      @media (max-width: 1150px) {
      grid-template-columns: repeat(4, auto);
  grid-template-rows: repeat(4, auto);
  gap: 1px 5px;
  grid-template-areas: "slider slider slider slider" "about tech-used tech-used tech-used" "key-features key-features key-features key-features" "buttons buttons buttons buttons";
      }
      
      @media (max-width: 980px) {
        display: grid;
  grid-template-columns: repeat(4, auto);
  grid-template-rows: repeat(5, auto);
  gap: 1px 1px;
  grid-template-areas: "slider slider slider slider" "about about about about" "key-features key-features key-features key-features" "tech-used tech-used tech-used tech-used" "buttons buttons buttons buttons";
      }
.about { grid-area: about; }

.slider { grid-area: slider; }

.key-features { grid-area: key-features; }

.tech-used { 
grid-area: tech-used;
 
 }

.slick-container {
min-height: 0; 
min-width: 0;
width: 100%;
grid-area: slider;
margin-bottom: 35rem;
}

img.slider-image {
height: 100%;
border: 10px ridge #adadad;
border-radius: 3px;
}
`;

const ProjectDetailsContainer = styled.div`
margin-top: 20rem;
padding: 20rem;
width: 100%;
text-align: center;
`;

const AboutProject = styled.div`
grid-area: about;
text-align: left;
`;

const TechUsed = styled.div`
grid-area: tech-used;

`;

const TechUsedIcons = styled.div`
text-align: center;
display: flex;
justify-content: space-evenly;
flex-wrap: wrap;

span {
display: flex;
align-items: center;
flex-direction: column;
font-family: 'Roboto', sans-serif;
font-size:12px;
font-weight:700;
text-align: center;
}

img{
width: 45px;
height: 45px;
display: block;
}
`;

const KeyFeatures = styled.div`
grid-area: key-features;
text-align: left;

ul{
padding: 0 10px;

li {
padding: 5px 0;
}
}
`;

const Buttons = styled.div`
grid-area: buttons;
`;

// const SliderColumn = styled.div`
// max-width: 800rem;
// `;

function ProjectDetails(props) {
  useLockBodyScroll();

  return (
    <ProjectDetailsContainer>
      <ShinyLink
        href="https://flixtime.now.sh"
        target="_blank"
        rel="noopener noreferrer"
        size="30rem"
        center
      >
        <span className="text-link">
          FLIXTIME.NOW.SH
        </span>
      </ShinyLink>
      <ProjectGrid>
        <AboutProject>
          <SubSectionTitle>About</SubSectionTitle>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, dignissimos earum excepturi, expedita hic labore maiores quidem quo quos repudiandae similique unde vel. Laboriosam, placeat.</p>
        </AboutProject>
        <div className="slick-container">
          <Slider {...slickSettings}>
            <img className="slider-image" src="/projects/flixtime-showcase.webp" alt="screenshot 1" />
            <img className="slider-image" src="/projects/flixtime-showcase.webp" alt="screenshot 1" />
            <img className="slider-image" src="/projects/flixtime-showcase.webp" alt="screenshot 1" />
            <img className="slider-image" src="/projects/flixtime-showcase.webp" alt="screenshot 1" />
            <img className="slider-image" src="/projects/flixtime-showcase.webp" alt="screenshot 1" />
          </Slider>
        </div>
        <KeyFeatures>
          <SubSectionTitle>Key Features</SubSectionTitle>
          <ul>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, dignissimos earum excepturi, expedita hic labore maiores quidem quo quos repudiandae similique unde vel. Laboriosam, placeat.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, dignissimos earum excepturi, expedita hic labore maiores quidem quo quos repudiandae similique unde vel. Laboriosam, placeat.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, dignissimos earum excepturi, expedita hic labore maiores quidem quo quos repudiandae similique unde vel. Laboriosam, placeat.</li>
          </ul>
        </KeyFeatures>
        <TechUsed>
          <SubSectionTitle>Tech Used</SubSectionTitle>
          <TechUsedIcons>
            <span>
              <img src="/devIcons/next-js.svg" />
              Next.js
            </span>
            <span>
              <img src="/devIcons/react.svg" />
              React
            </span>
            <span>
              <img src="/devIcons/css-in-js.png" />
              CSS-in-JS
            </span>
          </TechUsedIcons>
        </TechUsed>
        <Buttons />
      </ProjectGrid>
    </ProjectDetailsContainer>
  );
}

export default ProjectDetails;
