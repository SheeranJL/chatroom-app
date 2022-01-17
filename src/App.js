import './App.scss';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React, {useContext} from 'react';
import {appContext} from './context/context.js';

//Importing components//
import AuthPage from './components/auth/auth-page.js';

const App = () => {

  const {data, actions} = useContext(appContext);

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<AuthPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
