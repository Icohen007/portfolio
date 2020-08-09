import styled from 'styled-components';

const ShinyLink = styled.a`
    color: ${({ theme }) => theme.link.blue};
    display: flex;
    align-items: center;
    cursor: pointer;
    font-weight: 800;
    font-size: 20rem;
    background-image: linear-gradient(to right, ${({ theme }) => theme.link.green} ,${({ theme }) => theme.link.green} 50%, ${({ theme }) => theme.link.blue} 50%);
    background-position: 100%;
    background-size: 200% 100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all .4s;
    margin-bottom: 3px;
    
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
`;

export default ShinyLink;
