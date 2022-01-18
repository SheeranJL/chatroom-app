import './App.scss';
import {BrowserRouter as Router, Routes, Route, Navigate, useNavigate} from 'react-router-dom';
import React, {useContext, useEffect} from 'react';
import {appContext} from './context/context.js';
import {auth} from './firebase/firebase.js';

//Importing components//
import AuthPage from './components/auth/auth-page.js';
import HomeScreen from './components/homescreen/homescreen.js';


//We wrap any private routes around this functional component to prevent unauthenticated users from viewing them//
const PrivateRoute = ({isAuthenticated, children}) => {
  return (isAuthenticated) ? children : <Navigate to='/login' /> //Check that user is authenticated, if so, render the child otherwise, nativate back to login screen//
}



const App = () => {

  const {data, actions} = useContext(appContext);


  let unsubscribeFromAuth = null;

  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      actions.setCurrentUser(userAuth);
    })
  }, [])


  return (
    <Router>
      <Routes>
        <Route exact path='/login' element={<AuthPage />} />
        <Route path='/home' element={<PrivateRoute isAuthenticated={data.currentUser}> <HomeScreen /> </PrivateRoute>} />
        <Route path='*' element={<AuthPage />} />
      </Routes>
    </Router>
  );
}

export default App;
