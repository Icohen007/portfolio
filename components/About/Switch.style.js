import styled from 'styled-components';

const Switch = styled.div`
display: inline-flex;
justify-content: center;
align-items: center;
background: linear-gradient(270deg, rgba(120, 0, 133, 0.7) 0%, rgba(52, 1, 49, 0.7) 100%);
padding: 5rem 8rem;
border-radius: 10rem;
color: ${({ theme }) => theme.font.orange};
font-weight: bold;
margin-top: 5rem;

span {
padding-right: 5rem;
user-select: none;
font-size: 14rem;
}

.switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
  background-color: rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  transition: all 0.3s;
  cursor: pointer;
}

.switch:after {
  content: '';
  position: absolute;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: white;
  top: 1px;
  left: 1px;
  transition: all 0.3s;
}

input {
  position: absolute;
  left: -9999px;
}

input[type='checkbox']:checked + .switch:after {
  transform: translateX(20px);
}

input[type='checkbox']:checked + .switch {
  background-color: #0498df;
}
`;

export default Switch;
