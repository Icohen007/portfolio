import styled from 'styled-components';

const Container = styled.div`
// Extra small devices (portrait phones, less than 576px)
// No media query for \`xs\` since this is the default in Bootstrap

// Small devices (landscape phones, 576px and up)
width: 100%;
@media (min-width: 576px) { 
max-width: 576px
}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) {
max-width: 768px;
}
// Large devices (desktops, 992px and up)
@media (min-width: 992px) { 
max-width: 962px;
}
// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) { 
max-width: 1200px;
 }
`;

export default Container;
