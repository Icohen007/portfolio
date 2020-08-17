import React, { useContext } from 'react';
import styled from 'styled-components';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import StyledContainer from '../Container.style';
import SectionTitle from '../Shared/SectionTitle.style';
import ContactForm from './ContactForm';
import UnderLine from '../Shared/UnderLine.style';
import { ScrollContext } from '../../hooks/ScrollProvider';

const Container = styled.section`
  min-height: 70vh;
  width: 100%;
  overflow: hidden;
  position: relative;
  padding: 100rem 40rem;
  background:  #ffffff;
  text-align: center;
  display: flex;
  justify-content: center;
  z-index: 1;
  
  @media only screen and (max-width: 768px) {
      padding: 60rem 40rem 20rem;
      }
`;

const UnderLay = styled.div`
position: absolute;
line-height: 1;
left: 0;
bottom: 0;
color: rgba(153,153,153,0.2);
filter: contrast(1.5);
pointer-events: none;
text-align: left;
z-index: 0;

p {
text-transform: uppercase;
font-size: calc(20vw + 10rem);
font-family: Roboto, sans-serif;
margin: 0;
padding: 0;

@media only screen and (max-width: 768px) {
display: none;
}
}
`;

const SubTitle = styled.h2`
margin: 30rem 0;
font-size: 26rem;

@media only screen and (max-width: 768px) {
font-size: 20rem;
}
`;

function Contact() {
  const { contactRef } = useContext(ScrollContext);

  return (
    <Container id="contact" ref={contactRef}>
      <UnderLay>
        <p>Say</p>
        {' '}
        <p>Hello</p>
      </UnderLay>
      <StyledContainer>
        <SectionTitle>
          <Bounce left>
            <div>
              Let&apos;s
              {' '}
              <span>Talk</span>
            </div>
          </Bounce>
          <Bounce left delay={200}>
            <UnderLine />
          </Bounce>
        </SectionTitle>
        <SubTitle>
          <Fade bottom delay={200}>Got an awesome idea? Let&apos;s have a chat!</Fade>
        </SubTitle>
        <ContactForm />
      </StyledContainer>
    </Container>
  );
}

export default Contact;
