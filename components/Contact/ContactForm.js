import React, { useState } from 'react';
import styled from 'styled-components';
import Lottie from 'react-lottie';
import InputField from './InputField';
import useForm from '../../hooks/useForm';
import animationData from '../../lib/lotties/developer.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const StyledContactForm = styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
max-width: 500rem;
width: 100%;

.error-label {
font-size: 12rem;
color: #c20000;
text-align: left;
width: 100%;
font-weight: bold;
}

textarea{
    height: 150rem;
    border: 1px solid #424242;
    resize: none;
    padding: 10rem;
    width: 100%;
    outline: none;
    font-size: 16rem;
    
    &::placeholder{
    font-size: 12px;
    }
    &:focus{
         border: 2px solid #5fa8d3;
    }
    
    &.error{
         border: 2px solid #ff0000;
    }
}

`;

const TextAreaTitle = styled.div`
text-align: left;
width:100%;
margin-top: 20rem;
transition: all 0.3s ease;
font-family: Roboto, sans-serif;
color: #898989;
height: 26rem;

&.focus,
&.not-empty{
color: #5fa8d3;
padding-bottom: 5px;
font-size: 14rem;
}

&.error {
color: #ff0000;
padding-bottom: 5px;
font-size: 14rem;
}
`;

const SubmitButton = styled.button`
   position: relative;
   display: block;
   max-width: 300px;
   padding: 10px 20px;
   color: #bd0038;
   font-size: 24px;
   text-align: center;
   text-decoration: none;
   border: 2px solid #000000;
   border-radius: 10px;
   overflow: hidden;
   transition: all 150ms ease-in-out;
   z-index: 1;
   background: white;
   margin-top: 20rem;
   cursor: pointer;
   
   &:after {
      content: " ";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(189,0,56,0.7);
      z-index: -1;
      transform: scaleX(0);
      transition: transform 150ms ease-in-out;
   }
   
   &:hover {
      color: white;
      border-color: rgba(189,0,56,0.7);
      box-shadow: 0 0 16px rgba(255, 255, 255, 0.1);
      
      &:after {
         transform: scaleX(1);
         transform-origin: 50% 50%;
         transition: transform 150ms ease-in-out;
      }
   }
   
`;

const ContactFormContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

& > div {
margin: 0 !important;
}
`;

function validate(values) {
  const errors = {};

  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Email address is invalid';
  }

  if (!values.name) {
    errors.name = 'Name is required';
  }

  if (!values.message) {
    errors.message = 'Message is required';
  }
  return errors;
}

const ContactForm = () => {
  // const { handleSubmit, register, errors } = useForm({ mode: 'onSubmit', reValidateMode: 'onChange' });
  const onSubmit = (values) => console.log(values);
  const {
    values, errors, handleChange, handleSubmit,
  } = useForm(onSubmit, validate);
  const [textAreaFocused, setTextAreaFocused] = useState(false);

  return (
    <ContactFormContainer>
      <StyledContactForm onSubmit={handleSubmit}>
        <InputField
          name="name"
          placeholder="Name"
          onChange={handleChange}
          value={values.name}
          error={!!errors.name}
        />
        {errors.name && <span className="error-label">{errors.name}</span>}

        <InputField
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={values.email}
          error={!!errors.email}
        />
        {errors.email && <span className="error-label">{errors.email}</span>}
        <TextAreaTitle className={`${values.message ? 'not-empty' : ''} ${errors.message ? 'error' : ''} ${textAreaFocused ? 'focus' : ''}`}> Message </TextAreaTitle>
        <textarea
          name="message"
          placeholder="Your Message..."
          maxLength="550"
          value={values.message || ''}
          onChange={handleChange}
          className={`${values.message ? 'not-empty' : ''} ${errors.message ? 'error' : ''}`}
          onFocus={() => setTextAreaFocused(true)}
          onBlur={() => setTextAreaFocused(false)}
        />
        {errors.message && <span className="error-label">{errors.message}</span>}
        <SubmitButton type="submit">Submit</SubmitButton>
      </StyledContactForm>
      <Lottie
        options={defaultOptions}
        height={400}
        width={400}
      />
    </ContactFormContainer>
  );
};

export default ContactForm;
