import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FormikSignupForm from './components/FormikSignupForm';

import MedCabinet from './components/MedCabinet/MedCabinet';
import LoginTest from './components/LoginTest';
import SignupTest from './components/SignupTest';

import PrivateRoute from './components/PrivateRoute/PrivateRoute';


function App() {
  return (
    <Router>
      <div className="App">
        {/*<FormikSignupForm /> */}
        <Route exact path='/' component={LoginTest}/>
        <Route exact path='/signup' component={SignupTest}/>
        <PrivateRoute path='/medcabinet' component={MedCabinet} />
      </div>
    </Router>
  );
}

export default App;
