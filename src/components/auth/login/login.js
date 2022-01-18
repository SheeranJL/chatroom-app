import '../login-register.scss';
import React, {useState, useContext, useEffect} from 'react';
import {appContext} from '../../../context/context.js'
import {auth, signInWithGoogle} from '../../../firebase/firebase.js';
import {useNavigate} from 'react-router-dom';

//Importing components//
import CustomButton from '../../reuseable/custom-button/custom-button.js';

const Login = ({toggleLoginMethod}) => {

  const {data, actions} = useContext(appContext)

  const [loginValues, setLoginValues] = useState({
    email: '',
    password: '',
  })

  const navigate = useNavigate();

  useEffect(() => {
    console.log('test')
    if (data.currentUser) {
      navigate('/home')
    }
  }, [data.currentUser])


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
          <button
            className='google-button'
            onClick={signInWithGoogle}
            >Google</button>
        </div>

      </div>

      <h4 onClick={() => toggleLoginMethod(false)}>
        Don't have an account? Create one!
      </h4>

    </div>
  )
}

export default Login;
