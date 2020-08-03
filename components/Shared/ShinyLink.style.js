import styled from 'styled-components';

const ShinyLink = styled.a`
    color: ${({ theme }) => theme.link.blue};
    cursor: pointer;
    font-weight: 800;
    background-image: linear-gradient(to right, ${({ theme }) => theme.link.green} ,${({ theme }) => theme.link.green} 50%, ${({ theme }) => theme.link.blue} 50%);
    background-position: 100%;
    background-size: 200% 100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all .4s;
    &:hover {
      background-position: 0;
      color: ${({ theme }) => theme.link.green}; // compatibility
    } 
`;

export default ShinyLink;
