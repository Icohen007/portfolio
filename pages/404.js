import styled from 'styled-components';
import NextLink from 'next/link';
import { useRef } from 'react';

const ErrorContainer = styled.div`
height: 100vh;
background: #5d6ab8;
display: flex;
align-items: center;
justify-content: center;

.inner-container{
display: flex;
justify-content: center;
align-items: center;
padding: 20rem;
background: url('/404.png'), #151729;
box-shadow: 0 15rem 30rem rgba(0, 0, 0, .5);
border-radius: 10rem;
width: 90%;
height: 90%;

  .content {
    max-width: 700rem;
    text-align: center;
    
    h2 {
    font-size: calc(32rem + 16vw);
    color: white;
    }
    
    h4 {
    position: relative;
    font-size: 24rem;
    margin-bottom: 20rem;
    color: black;
    background: white;
    font-weight: 500;
    padding: 0.4em 0.8em;
    display: inline-block;
    
      @media only screen and (max-width: 768px) {
      font-size: 20rem;
      }
    }
    
    p {
    color: white;
    font-size: 18rem;
    }
    
    a {
      position: relative;
      display: inline-block;
      padding: 0.6em 1.2em;
      background: hsl(286deg 100% 28%);
      text-decoration: none;
      margin-top: 25rem;
      border-radius: 25rem;
      border-bottom: 4rem solid hsl(286deg 100% 22%);
      color: white;
      font-weight: 500;
      font-size: 18rem;
      outline: none;
    }
    
  }
}


`;

const ErrorPage = () => {
  const ref = useRef(null);
  const mouseMoveListener = (e) => {
    ref.current.style.backgroundPositionX = `${-e.clientX / 3}px`;
    ref.current.style.backgroundPositionY = `${-e.clientY / 3}px`;
  };

  return (
    <ErrorContainer>
      <div className="inner-container" ref={ref} onMouseMove={mouseMoveListener}>
        <div className="content">
          <h2>404</h2>
          <h4>Opps! Page not found</h4>
          <p>
            The page you were looking for was not found.
            You may spelled something wrong.
          </p>
          <NextLink href="/" passHref> Back To Home </NextLink>
        </div>
      </div>
    </ErrorContainer>
  );
};

export default ErrorPage;
