import styled from 'styled-components';

const StyledAnimatedCard = styled.div`
position: relative;
height: 250rem;
background: #fff;
display: flex;
width: 380rem;
margin: 30rem 15rem;
border-radius: 20px;

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
    background: #333;
    z-index: 1;
    border-radius: 20px;
    
    @media only screen and (max-width: 768px) {
      position: relative;
      width: 100%;
      height: 200rem;
      left: 0;
    }
    
        .image-text {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        text-align: center;
        font-size: 2.8em;
        color: rgba(255, 255, 255, 0.15);
        font-weight: 700;
        
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
      right: 0;
      width: calc(100% - 75rem);
      height: 100%;
      padding: 20rem;
      
    @media only screen and (max-width: 768px) {
      width: 100%;
      position: relative;
    }
      
      h3 {
      margin-bottom: 5rem;
      font-size: 24rem;
      }
      
    }

  @media only screen and (max-width: 768px) {
  max-width: 300rem;
  flex-direction: column;
  height: auto;
  }
  
}

&:hover .image-container{
width: 150rem;
height: 150rem;
left: -75rem;
top: calc(50% - 75rem);
transition: .5s ease-in-out;
background: rgb(148 0 55 / 85%);

.image-text {
display: none;
}

    @media only screen and (max-width: 768px) {
      width: 100%;
      height: 200rem;
      left: 0;
    }

    img {
    max-width: 75rem;
    
        @media only screen and (max-width: 768px) {
      max-width: 100rem;
    }
    }
}
`;

function AnimatedCard({title, text, imgSrc}) {
  return (
    <StyledAnimatedCard>
      <div className="image-container">
        <div className="image-text"> {title} </div>
        <img src={`/codeIcons/${imgSrc}`} alt={title} />
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
