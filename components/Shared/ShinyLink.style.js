import styled from 'styled-components';

const ShinyLink = styled.a`
    color: ${({ theme }) => theme.link.blue};
    display: inline-flex;
    align-items: center;
    justify-content: ${({ center }) => (center ? 'center' : 'flex-start')};
    cursor: pointer;
    font-weight: 600;
    font-size: ${({ size = '20rem' }) => size};
    background-image: linear-gradient(to right, ${({ theme }) => theme.link.green} ,${({ theme }) => theme.link.green} 50%, ${({ theme }) => theme.link.blue} 50%);
    background-position: 100%;
    background-size: 200% 100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all .5s;
    margin-bottom: 3px;
    text-align: center;
    
    .text-link{
    margin-left: 8px;
    }
    
    .icon-link {
    width: 25px;
    height: 25px;
    }
    
    &:hover {
      background-position: 0;
      color: ${({ theme }) => theme.link.green}; // compatibility
    } 
    
    @media only screen and (max-width: 768px) {
    flex-direction: column;
    margin-left: 15rem;
    }
`;

export default ShinyLink;
