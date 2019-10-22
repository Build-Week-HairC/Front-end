import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FormikSignupForm from "./Components/FormikSignupForm";

import MedCabinet from "./Components/MedCabinet/MedCabinet";
import Login from "./Components/Login";

import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";


function App() {
  return (
    <Router>
      <div className="App">
        <FormikSignupForm />
        <Route exact path='/' component={Login}/>
        <PrivateRoute path='/medcabinet' component={MedCabinet} />
        <MedCabinet />
      </div>
    </Router>
  );
}

export default App;
