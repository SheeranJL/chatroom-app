import '../login-register.scss';
import React, {useState, useContext} from 'react';

import InputField from '../../reuseable/input-field/input-field.js';



const Login = ({toggleLoginMethod}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  const handleChange = (e) => {
    console.log(e.target.value)
  }

  return (
    <div>
      <form>
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
      </form>

      <h4 onClick={() => toggleLoginMethod(false)}>
        Don't have an account? Create one!
      </h4>

    </div>
  )
}

export default Login;
