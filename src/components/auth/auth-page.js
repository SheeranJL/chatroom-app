import React, {useState, useContext, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {appContext} from '../../context/context.js';
import './auth-page.scss';

//importing components//
import Login from './login/login.js';
import Register from './register/register.js';


const AuthPage = () => {

  const [toggleMethod, setToggleMethod] = useState(true);
  const {data, actions} = useContext(appContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (data.currentUser) {
      navigate('/home')
    }
  }, [data.currentUser])


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
