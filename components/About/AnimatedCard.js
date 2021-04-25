import styled from 'styled-components';

const StyledAnimatedCard = styled.div`
position: relative;
height: 250rem;
background: #fff;
display: flex;
width: 250rem;
margin: 40rem 15rem;
border-radius: 20px;

  @media only screen and (max-width: 768px) {
  max-width: 300rem;
  flex-direction: column;
  height: auto;
  margin: 20rem 0;
  }

    .image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    transition: .5s ease-in-out;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg,#000d13 20%,#004666 100%);
    z-index: 1;
    border-radius: 20px;
    
    @media only screen and (max-width: 768px) {
      position: relative;
      width: 100%;
      height: 200rem;
      left: 0;
      background: rgba(0,70,102, 1);
    }
    
        .image-text {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        text-align: center;
        font-size: 30rem;
        color: rgba(255, 255, 255, 0.65);
        font-weight: 500;
        padding: 5rem;
        
      @media only screen and (max-width: 768px) {
        display: none;
    }
        }
        
        img {
        max-width: 100rem;
        transition: .5s ease-in-out;
        
       @media only screen and (max-width: 768px) {
      max-width: 100rem;
    }
        }
    }
    
    .content {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: calc(50% - 75rem);
      padding: 0 10rem;
      height: 100%;
      
    @media only screen and (max-width: 768px) {
      width: 100%;
      position: relative;
      padding: 20rem;
    }
      
      h3 {
      margin-bottom: 5rem;
      font-size: 24rem;
      }
      
    }


  
&:hover .image-container {
width: 150rem;
height: 150rem;
left: calc(50% - 75rem);
top: -75rem;
transition: .5s ease-in-out;
background: rgba(0,70,102,0.9);

.image-text {
display: none;
}

    @media only screen and (max-width: 768px) {
      width: 100%;
      height: 200rem;
      left: 0;
      top: 0;
      background: rgba(0,70,102,1);
    }

    img {
    max-width: 75rem;
    
        @media only screen and (max-width: 768px) {
      max-width: 100rem;
    }
    }
}
`;

function AnimatedCard({ title, text, imgSrc }) {
  return (
    <StyledAnimatedCard>
      <div className="image-container">
        <div className="image-text">
          {title}
        </div>
        <img src={`/codeIcons/${imgSrc}`} alt={title} loading="lazy" />
      </div>
      <div className="content">
        <div>
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      </div>
    </StyledAnimatedCard>
  );
}

export default AnimatedCard;
