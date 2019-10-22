import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FormikSignupForm from "./Components/FormikSignupForm";
import FormikQuestionForm from "./Components/Questionnaire";

import MedCabinet from "./Components/MedCabinet/MedCabinet";
import Login from "./Components/Login";

import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";



function App() {
  return (
    <Router>
      <div className="App">
        <Route path='/signup' component={FormikSignupForm} />
        <Route exact path='/' component={Login}/>
        <PrivateRoute path='/medcabinet' component={MedCabinet} />
        <Route path='/questionnaire' component={FormikQuestionForm} />
      </div>
    </Router>
  );
}

export default App;

// create account link to signup //