import '../login-register.scss';
import React, {useState, useContext} from 'react';

//Importing components//
import CustomButton from '../../reuseable/custom-button/custom-button.js';

const Login = ({toggleLoginMethod}) => {

  const [loginValues, setLoginValues] = useState({
    email: '',
    password: '',
  })

  const {email, password} = loginValues;

  const handleChange = (e) => {
    const {name, value} = e.target;

    setLoginValues(prevState => {
      return {
        ...prevState,
        [name]: value,
      };
    });


  };

  const handleSubmit = () => {
    console.log(loginValues);
  }

  return (
    <div className='auth-form-container'>

      <h2> Log in </h2>

      <form>

        <div className='input-section'>
          <label htmlFor='email'>Email</label>
          <input name='email' type='email' onChange={handleChange} value={email}/>
        </div>

        <div className='input-section'>
          <label htmlFor='password'>Password</label>
          <input name='password' type='password' onChange={handleChange} value={password}/>
        </div>

      </form>



      <div className='login-buttons'>

        <div className='form-button'>
          <button>Log in</button>
        </div>

        <div className='form-button'>
          <button className='google-button'>Google</button>
        </div>

      </div>

      <h4 onClick={() => toggleLoginMethod(false)}>
        Don't have an account? Create one!
      </h4>

    </div>
  )
}

export default Login;
