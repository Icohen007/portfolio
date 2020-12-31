import styled from 'styled-components';
import Jump from 'react-reveal/Jump';
import ProjectButton from './ProjectButton';

const StyledProjectCard = styled.div`
position: relative;
width: 450rem;
height: 300rem;
display: flex;
justify-content: center;
align-items: center;

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
      position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    filter: brightness(0.5);
}

margin: 40rem;

@media only screen and (max-width: 768px) {
    margin: 40rem 20rem;
}
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

@media only screen and (max-width: 768px) {
  filter: blur(20px);
}
}

@media only screen and (min-width: 769px) {
&:nth-child(4n+1):before, &:nth-child(4n+4):before,
&:nth-child(4n+1):after, &:nth-child(4n+4):after {
background: linear-gradient(235deg, #89ff00, #010615, #00bcd4);
}

&:nth-child(4n+2):before, &:nth-child(4n+3):before,
&:nth-child(4n+2):after, &:nth-child(4n+3):after {
background: linear-gradient(235deg, #ff6f00, #010615, #ff003b);
}
}

@media only screen and (max-width: 768px) {
&:nth-child(odd):before, &:nth-child(odd):after {
background: linear-gradient(235deg, #89ff00, #010615, #00bcd4);
}

&:nth-child(even):before, &:nth-child(even):after {
background: linear-gradient(235deg, #ff6f00, #010615, #ff003b);
}
}

.content {
padding: 20rem;
color: #FFF;

h2 {
font-size: 24rem;
letter-spacing: 2px;
}

p {
    font-family: Inter,sans-serif;
    font-size: 16rem;
}
}
`;

function ProjectCard({
  title, subTitle, previewImage, id, onClick,
}) {
  return (
    <StyledProjectCard>
      <img src={previewImage} alt={title} loading="lazy" />
      <Jump>
        <div className="content">
          <h2>{title}</h2>
          <p>{subTitle}</p>
          <ProjectButton id={id} onClick={onClick} />
        </div>
      </Jump>
    </StyledProjectCard>
  );
}

export default ProjectCard;
