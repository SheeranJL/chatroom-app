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
      console.log('test7')
    }
  }, [data.currentUser])

  console.log('test6')
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
