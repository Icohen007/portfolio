import React from 'react';
import styled from 'styled-components';

const StyledTriangle = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;


svg {
    position: relative;
    display: block;
    width: calc(100%);
    height: 60px;
}

//.shape-fill {
//    fill: #000000;
//}

`;

function Triangle(props) {
  return (
    <StyledTriangle>
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id="imgpattern"
            x="0"
            y="0"
            width="0.05"
            height="0.05"
            viewBox="0 0 512 512"
            preserveAspectRatio="xMidYMid slice"
          >
            <image width="512" height="512" xlinkHref="/BrushedAlu171717.png" />
          </pattern>
        </defs>
        <path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" className="shape-fill" fill="url(#imgpattern)" />
      </svg>
    </StyledTriangle>
  );
}

export default Triangle;
