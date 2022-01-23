import './App.scss';
import {BrowserRouter as Router, Routes, Route, Navigate, useNavigate} from 'react-router-dom';
import React, {useContext, useEffect} from 'react';
import {appContext} from './context/context.js';
import {auth, createUserProfileDocument, checkAuthenticatedUser, setOnlineUser, setOfflineUser, onAuthStateChangeFindUser} from './firebase/firebase.js';

//Importing components//
import AuthPage from './components/auth/auth-page.js';
import HomeScreen from './components/homescreen/homescreen.js';


//We wrap any private routes around this functional component to prevent unauthenticated users from viewing them//
const PrivateRoute = ({isAuthenticated, children}) => {
  return (isAuthenticated) ? children : <Navigate to='/login' /> //Check that user is authenticated, if so, render the child otherwise, nativate back to login screen//
}

let unsubscribeFromAuth = null;

const App = () => {

  const {data, actions} = useContext(appContext);

  useEffect(() => {
    auth.onAuthStateChanged(async (userAuth) => {
      if (!userAuth.displayName) {
        const userToSave = await onAuthStateChangeFindUser(userAuth)
        if (userToSave) {
          // const isUserLoggedIn = await checkAuthenticatedUser(userAuth)
          // console.log('before...', userAuth.displayName)
          await actions.setCurrentUser({
            user: {
              displayName: userToSave.user.displayName,
              email: userToSave.user.email,
              photoURL: userToSave.user.photoURL,
              uid: userToSave.user.uid,
            }
          })
          console.log('after...', userAuth.displayName)
        }
      } else {
        await actions.setCurrentUser({
          user: {
            displayName: userAuth.displayName,
            email: userAuth.email,
            photoURL: userAuth.photoURL,
            uid: userAuth.uid,
          }
        })
        console.log('checking currebt yser: ', data.currentUser)
        await setOnlineUser(data.currentUser)
      }
    })
  }, [])


  setOfflineUser();

  return (
    <div className='app-container'>
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route exact path='/login' element={<AuthPage />} />
          <Route path='/home' element={<PrivateRoute isAuthenticated={data.currentUser}> <HomeScreen /> </PrivateRoute>} />
          <Route path='*' element={<AuthPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
