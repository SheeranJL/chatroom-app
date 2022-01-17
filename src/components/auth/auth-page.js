import React, {useState} from 'react';
import './auth-page.scss';

//importing components//
import Login from './login/login.js';
import Register from './register/register.js';


const AuthPage = () => {

  const [toggleMethod, setToggleMethod] = useState(true);

  return (

    <div className='auth-screen-container'>

      {
        toggleMethod
        ? <Login toggleLoginMethod={setToggleMethod} />
        : <Register toggleLoginMethod={setToggleMethod} />
      }

    </div>
  )
}

export default AuthPage;
