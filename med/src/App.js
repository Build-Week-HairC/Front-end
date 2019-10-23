import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FormikSignupForm from "./components/FormikSignupForm";
import FormikQuestionForm from "./components/Questionnaire";

import MedCabinet from "./components/MedCabinet/MedCabinet";


import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

import Login from './components/LoginTest';
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
