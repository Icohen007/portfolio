import React from 'react';
import styled from 'styled-components';
import StyledContainer from '../Container.style';
import SectionTitle from '../Shared/SectionTitle.style';
import ContactForm from './ContactForm';
import UnderLine from "../Shared/UnderLine.style";

const Container = styled.section`
  min-height: 70vh;
  width: 100%;
  overflow: hidden;
  position: relative;
  padding: 100rem 15rem;
  background:  #ffffff;
  text-align: center;
  display: flex;
  justify-content: center;
  z-index: 1;
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
font-size: 250rem;
font-family: Roboto, sans-serif;
margin: 0;
padding: 0;
}
`;

const SubTitle = styled.h2`
margin: 30rem 0;
font-size: 26rem;
`;

function Contact(props) {
  return (
    <Container>
      <UnderLay>
        <p>Say</p>
        {' '}
        <p>Hello</p>
      </UnderLay>
      <StyledContainer>
        <SectionTitle>
          Let&apos;s
          {' '}
          <span>Talk</span>
          <UnderLine />
        </SectionTitle>
        <SubTitle>Got an awesome idea? Let's have a chat!</SubTitle>
        <ContactForm />
      </StyledContainer>
    </Container>
  );
}

export default Contact;
