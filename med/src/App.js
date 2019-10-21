import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FormikSignupForm from './components/FormikSignupForm';

import MedCabinet from './components/MedCabinet/MedCabinet';

import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <FormikSignupForm />
        {/*
          line16: component={Login}
          line17 component={MedcabinetPage} for privateRoute
        */}
        <Route exact path='/' />
        <PrivateRoute path='/medcabinet' component={MedCabinet} />
      </div>
    </Router>
  );
}

export default App;
