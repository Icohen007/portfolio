import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  font-family: 'Raleway', sans-serif !important;
  font-size: 1px;
  scroll-behavior: smooth;
}

*, *:before, *:after {
  box-sizing: inherit;
}

* {
 font-family: inherit;
}

body {
  font-family: 'Raleway', sans-serif; !important;
  font-size: 16rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  width: 100%;
  line-height: 1.5;
  margin: 0;
  padding: 0;
}

#__next {
height: 100%;
width: 100%;
}

h1, h2, h3 , h4 ,h5 ,h6 {
margin: 0;
}

a, a:hover, a:focus, a:active  {
text-decoration: none !important;
}

  * {
    scrollbar-width: thin;
    scrollbar-color: #9a9a9a none;
  }
  *::-webkit-scrollbar {
    width: 6px;
    color: #751fff;
  }
  
  *::-webkit-scrollbar-thumb {
    border-radius: 20px;
    border: 3px solid #751fff;
  }

// FIXES:

.rodal-close {
    width: 36px;
    height: 36px;
    top: 24px;
    right: 24px;
    border-radius: 50%;
    outline: none;
    font-weight: bold;
    &:after, &:before{
    background: #232222;
    }
       
    &:hover{
      background: #c2c2c2;
    }
}

.rodal-dialog {
  background:  url("/BrushedAluFAFAFA.png");
  &::-webkit-scrollbar-thumb {
    border-radius: 20px;
    border: 3px solid #555555;
  }
  @media only screen and (max-width: 768px) {
  padding: 15rem 0;
  }
  
}


.fa-spin {
  animation: fa-spin 2s infinite linear;
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }
}

`;

export default GlobalStyle;
