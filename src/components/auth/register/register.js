import '../login-register.scss';
import React, {useState, useContext} from 'react';


const Register = ({toggleLoginMethod}) => {

  const [registrationValues, setRegistrationValues] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const {displayName, email, password, confirmPassword} = registrationValues;

  const handleChange = (e) => {
    const {name, value} = e.target;
    setRegistrationValues(prevState => {
      return {
        ...prevState,
        [name] : value,
      };
    });
  };

  const handleSubmit = () => {
    console.log(registrationValues);
  }

  return (
    <div className='auth-form-container'>

      <h2> Register </h2>

      <form>
        <div className='input-section'>
          <label htmlFor='displayName'>Display name</label>
          <input name='displayName' type='displayName' onChange={handleChange} value={displayName}/>
        </div>

        <div className='input-section'>
          <label htmlFor='email'>Email</label>
          <input name='email' type='email' onChange={handleChange} value={email}/>
        </div>

        <div className='input-section'>
          <label htmlFor='password'>Password</label>
          <input name='password' type='password' onChange={handleChange} value={password}/>
        </div>

        <div className='input-section'>
          <label htmlFor='confirmPassword'>Confirm Password</label>
          <input name='confirmPassword' type='password' onChange={handleChange} value={confirmPassword}/>
        </div>
      </form>

      <div className='form-button-register'>
      <button onClick={handleSubmit}>Register</button>
      </div>

      <h4 onClick={() => toggleLoginMethod(true)}>
        Already have an account? Sign in!
      </h4>

    </div>
  )

}

export default Register;
