import styled from 'styled-components';
import Particles from 'react-particles-js';
import ParticlesConfig from '../lib/particlesConfig';

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

const FlexContainer = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;H
    
    h1 {
    color: white;
    font-size: 50px;
    }
`;

const Home = () => (
  <Container>
    <Particles className="particles" params={ParticlesConfig} />
    <FlexContainer>
        <h1> hey </h1>
    </FlexContainer>
  </Container>
);

export default Home;
