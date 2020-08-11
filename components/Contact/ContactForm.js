import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import InputField from './InputField';

const StyledContactForm = styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

.error-label {
font-size: 12rem;
color: #c20000;
text-align: left;
width: 50%;
font-weight: bold;
}
`;

const ContactForm = () => {
  const { handleSubmit, register, errors } = useForm({ mode: 'onChange', reValidateMode: 'onChange' });
  const onSubmit = (values) => console.log(values);

  return (
    <StyledContactForm onSubmit={handleSubmit(onSubmit)}>
      <InputField
        autoComplete="off"
        name="name"
        placeholder="Name"
        error={!!errors.name}
        ref={register({
          required: 'name is required',
        })}
      />
      {errors.name && <span className="error-label">{errors.name.message}</span>}

      <InputField
        name="email"
        type="text"
        placeholder="Email"
        error={!!errors.email}
        ref={register({
          required: 'email is required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'invalid email address',
          },
        })}
      />
      {errors.email && <span className="error-label">{errors.email.message}</span>}

      <button type="submit">Submit</button>
    </StyledContactForm>
  );
};

export default ContactForm;
