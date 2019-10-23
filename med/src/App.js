import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FormikSignupForm from "./Components/FormikSignupForm";
import FormikQuestionForm from "./Components/Questionnaire";

import MedCabinet from "./Components/MedCabinet/MedCabinet";


import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

import Login from './components/Login';
import MedCard from './components/MedCard/MedCard';



function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path='/signup' component={FormikSignupForm} />
        <Route path='/questionnaire' component={FormikQuestionForm} />
        <Route exact path='/' component={Login}/>
        <PrivateRoute path='/medcabinet' component={MedCabinet} />
        <Route exact path='/medcard' component={MedCard}/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

// create account link to signup //
