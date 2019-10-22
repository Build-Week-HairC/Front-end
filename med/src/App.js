import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FormikSignupForm from './components/FormikSignupForm';

import MedCabinet from './components/MedCabinet/MedCabinet';
import Login from './components/Login';

import PrivateRoute from './components/PrivateRoute/PrivateRoute';


function App() {
  return (
    <Router>
      <div className="App">
        <FormikSignupForm />
        <Route exact path='/' component={Login}/>
        <PrivateRoute path='/medcabinet' component={MedCabinet} />
      </div>
    </Router>
  );
}

export default App;