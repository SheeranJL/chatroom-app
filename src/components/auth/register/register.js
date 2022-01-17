import '../login-register.scss';
import React, {useState, useContext} from 'react';

//importing components//
import InputField from '../../reuseable/input-field/input-field.js';


const Register = ({toggleLoginMethod}) => {

  const handleChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
  }

  return (
    <div>
      <form>

      <div className='input-section'>
        <InputField
            forType='displayName'
            type='text'
            onChange={handleChange}>
          Display name
        </InputField>
      </div>

      <div className='input-section'>
        <InputField
            forType='email'
            type='email'
            onChange={handleChange}>
          Email
        </InputField>
      </div>

      <div className='input-section'>
        <InputField
            forType='password'
            type='password'
            onChange={handleChange}>
          Password
        </InputField>
      </div>

      <div className='input-section'>
        <InputField
            forType='password'
            type='password'
            onChange={handleChange}>
          Confirm password
        </InputField>
      </div>

      </form>

      <h4 onClick={() => toggleLoginMethod(true)}>
        Already have an account? Sign in!
      </h4>

    </div>
  )

}

export default Register;
