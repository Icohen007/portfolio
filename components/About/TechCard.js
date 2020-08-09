import React from 'react';
import styled from 'styled-components';

const StyledTechCard = styled.div`
  display: flex;
  overflow: hidden;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 120px;
  padding: 5px;
  //margin: 5px;
  transition: .75s ease-in;
  background: white;
  border-radius: 50%;
  box-shadow: inset 0 4px 5px 0 rgba(0,0,0,.14), inset 0 1px 10px 0 rgba(0,0,0,.12), inset 0 2px 4px -1px rgba(0,0,0,.3);
  
  @media only screen and (max-width: 768px) {
  width: 80px;
  height: 80px;
  }

  &.reveal .img-wrapper, &:hover .img-wrapper {
  filter: blur(2px);
  }
  
  &.reveal .description, &:hover .description {
  opacity: 1;
  }

  .img-wrapper {
  height: 100%;
  width: 100%;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
    img {
  max-width: 100%;
  max-height: 100%;
  transition: .75s ease-in;
  padding: 10rem;
  }
  
  }
  
  .description {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    position: absolute;
    opacity: 0;
    background-color: hsla(0,0%,100%,.7);
    transition: .75s;
    padding: 5rem;
    font-weight: bold;
    user-select: none;
    font-family: Inter,sans-serif ;
      @media only screen and (max-width: 768px) {
font-size: 12rem;
  }
    
  }
`;

const TechCard = ({ imageSrc, text, className }) => (
  <StyledTechCard className={className}>
    <div className="img-wrapper">
      <img alt={text} src={`/devIcons/${imageSrc}`} />
    </div>
    <div className="description">
      <span>{text}</span>
    </div>
  </StyledTechCard>
);

export default TechCard;
