import React from 'react';
import styled from 'styled-components';

const StyledInputField = styled.div`
  width: 100%;
  height: 54rem;
  position: relative;
  overflow: hidden;
  margin-top: 20rem;

  input {
    width: 100%;
    height: 100%;
    color: #3c4250;
    padding-top: 12.8rem;
    border: none;
    outline: none;
    font-family: Roboto, sans-serif;
    font-size: 16rem;
    background: transparent;

    &.not-empty + .label-name .placeholder-name,
    &:focus + .label-name .placeholder-name
    {
      transform: translateY(-150%);
      font-size: 14rem;
      color: #5fa8d3;
    }

    &:focus + .label-name:after,
    &.error + .label-name:after,
    &.not-empty + .label-name:after {
    transform: translateX(0%);
    }
    
    &.error + .label-name .placeholder-name  {
      transform: translateY(-150%);
      font-size: 14rem;
      color: #ff0000;
    }
    
  }


  .label-name {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border-bottom: 1px solid black;
    pointer-events: none; // prevents all click, state and cursor options on the element
    // he prime use case for pointer-events is to allow click or tap behaviour to “pass through” an element to
    // another element below it on the Z axis.
    font-family: Roboto, sans-serif;
    color: #505563;

    &:after {
      content: '';
      position: absolute;
      height: 100%;
      width: 100%;
      border-bottom: 3px solid #5fa8d3;
      left: 0;
      bottom: -1px;
      transform: translateX(-100%);
      transition: all 0.3s ease;
    }
    &.error:after{
          border-bottom: 3px solid #ff0000;
    }
  }
  .placeholder-name {
    position: absolute;
    bottom: 5px;
    left: 0;
    transition: all 0.3s ease;
    font-family: Roboto, sans-serif;
    color: #898989;

  }
`;

const InputField = ({
  type, name, placeholder, onChange, value = '', error,
}) => (
  <StyledInputField>
    <input
      name={name}
      type={type}
      onChange={onChange}
      value={value}
      className={`${value ? 'not-empty' : ''} ${error ? 'error' : ''}`}
      autoComplete="off"
      // required
    />
    <label htmlFor={name} className={`label-name ${error ? 'error' : ''}`}>
      <span className="placeholder-name">{placeholder}</span>
    </label>
  </StyledInputField>
);

export default InputField;
