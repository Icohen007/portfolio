import React from 'react';
import styled from 'styled-components';
import ProjectButton from './ProjectButton';

const StyledProjectCard = styled.div`
position: relative;
width: 450rem;
height: 300rem;
display: flex;
justify-content: center;
align-items: center;
background: linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ), url(/projects/flixtime-showcase.webp) center center no-repeat;
background-size: cover;

margin: 40rem;

&:before{
content: ' ';
position: absolute;
left: -2px;
top: -2px;
right: -2px;
bottom: -2px;
z-index: -1;
}

&:after{
content: ' ';
position: absolute;
left: -2px;
top: -2px;
right: -2px;
bottom: -2px;
z-index: -2;
filter: blur(30px);
}

&:nth-child(1):before, 
&:nth-child(1):after {
background: linear-gradient(235deg, #89ff00, #010615, #00bcd4);
}

&:nth-child(2):before, 
&:nth-child(2):after {
background: linear-gradient(235deg, #ff6f00, #010615, #ff003b);
}

&:nth-child(3):before, 
&:nth-child(3):after {
background: linear-gradient(235deg, #ff6f00, #010615, #ff003b);
}

&:nth-child(4):before, 
&:nth-child(4):after {
background: linear-gradient(235deg, #89ff00, #010615, #00bcd4);
}


.content {
padding: 20rem;
color: #FFF;

}
`;

function ProjectCard(props) {
  return (
    <StyledProjectCard>
      <div className="content">
        <h2>FlixTime</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto aspernatur consequuntur exercitationem iusto laborum nostrum, odio odit qui veritatis voluptates.</p>
        <ProjectButton />
      </div>
    </StyledProjectCard>
  );
}

export default ProjectCard;
