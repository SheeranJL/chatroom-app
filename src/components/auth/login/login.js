import '../login-register.scss';
import React, {useState, useContext, useEffect} from 'react';
import {appContext} from '../../../context/context.js'
import {auth, signInWithGoogle} from '../../../firebase/firebase.js';
import {useNavigate} from 'react-router-dom';

//Importing components//
import CustomButton from '../../reuseable/custom-button/custom-button.js';

const Login = ({toggleLoginMethod}) => {

  const {data, actions} = useContext(appContext)
  const [loginError, setLoginError] = useState(false);

  const [loginValues, setLoginValues] = useState({
    email: '',
    password: '',
  })

  const [loginErrors, setLoginErrors] = useState('');


  const {email, password} = loginValues; //Destructure state
  const navigate = useNavigate();        //Bring in navigation into app to redirect users to home screen upon login within useEffect.


  useEffect(() => {
    console.log('test')
    if (data.currentUser) {
      navigate('/home')
    }
  }, [data.currentUser])


  //Handle changed form values and store them in local state
  const handleChange = (e) => {
    const {name, value} = e.target;
    setLoginValues(prevState => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };


  //Handle submission of login form
  const handleSubmit = async() => {

    console.log('hjduhed')
    try {
      await auth.signInWithEmailAndPassword(email, password) //Google will search for a email/pass combo.
      setLoginError(false);
    } catch(error) {
      await setLoginError(true);
      console.log('error signing in', error)

    }

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

      {
        loginError
        ? <span style={{color: 'red', textAlign: 'center', marginTop: 20, fontSize: 15}}>Incorrect username or password</span>
        : null
      }

      <div className='login-buttons'>

        <div className='form-button'>
          <button onClick={handleSubmit}>Log in</button>
        </div>

        <div className='form-button'>
          <button
            style={{backgroundColor: 'rgb(66, 133, 244)'}}
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
