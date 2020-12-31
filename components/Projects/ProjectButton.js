import styled from 'styled-components';
import Link from 'next/link';

const firstBorderColor = '#fff09b';
const secondBorderColor = '#001c53';
// #1779ff
const StyledProjectButton = styled.div`
width: 100%;
height: 55px;

button{
position: absolute;
transform: translate(-50%);
color:${firstBorderColor};
padding:20px;
letter-spacing:1px;
text-decoration:none;
overflow:hidden;
font-weight:bold;
border-radius: 5px;
background: rgb(0 0 0 / 0.5);
border: none;
outline: none;
cursor: pointer;
font-family: Raleway,sans-serif;
font-size: 16rem;
transition: all .2s ease-in-out;

&:hover {
letter-spacing:2px;
background: rgb(255 255 255 / 0.1);
}
}

button span:nth-child(1)
{
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 2px;
background: linear-gradient(to right,${secondBorderColor},${firstBorderColor});
animation: animate1 2s linear infinite;
}
@keyframes animate1
{
 0%
 {
   transform:translateX(-100%);
 
 }
 100%
 {
   transform:translateX(100%);
 
 }
}
button span:nth-child(2)
{
position: absolute;
top: 0;
right: 0;
width: 2px;
height: 100%;
background: linear-gradient(to bottom,${secondBorderColor},${firstBorderColor});
animation: animate2 2s linear infinite;
animation-delay: 1s;
}
@keyframes animate2 
{
 0%
 {
   transform:translateY(-100%);
 
 }
 100%
 {
   transform:translateY(100%);
 
 }
}
button span:nth-child(3)
{
position: absolute;
bottom: 0;
left: 0;
width: 100%;
height: 2px;
background: linear-gradient(to left,${secondBorderColor},${firstBorderColor});
animation: animate3 2s linear infinite;
}
@keyframes animate3
{
 0%
 {
   transform:translateX(100%);
 
 }
 100%
 {
   transform:translateX(-100%);
 
 }
}
button span:nth-child(4)
{
position: absolute;
top: 0;
left: 0;
width: 2px;
height: 100%;
background: linear-gradient(to top,${secondBorderColor},${firstBorderColor});
animation: animate4 2s linear infinite;
animation-delay: 1s;
}
@keyframes animate4 
{
 0%
 {
   transform:translateY(100%);
 
 }
 100%
 {
   transform:translateY(-100%);
 
 }
}
`;

function ProjectButton({ id, onClick }) {
  return (
    <StyledProjectButton>
      <Link href={`/?projectId=${id}`} scroll={false} onClick={onClick}>
        <button type="button">
          <span />
          <span />
          <span />
          <span />
          See More
        </button>
      </Link>
    </StyledProjectButton>
  );
}

export default ProjectButton;
