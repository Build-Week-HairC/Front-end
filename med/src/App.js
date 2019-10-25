import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignupTest from "./components/FormikSignupForm";
import FormikQuestionForm from "./components/Questionnaire";

import MedCabinet from "./components/MedCabinet/MedCabinet";


import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

import LoginTest from './components/LoginTest';
import MedCard from './components/MedCard/MedCard';
import SavedStrains from './components/SavedStrains';
import styled from "styled-components";

function App() {
  
  const AppWrapper = styled.div`
    .app-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 100px;
    }
  `;

  return (
    <Router>
      
      <div className="App">
        <Header />
        <AppWrapper>
          <div className="app-wrapper">
        <Route path='/signup' component={SignupTest} />
        <Route path='/questionnaire' component={FormikQuestionForm} />
        <Route exact path='/' component={LoginTest}/>
        <PrivateRoute path='/medcabinet' component={MedCabinet} />
        <Route exact path='/medcard' component={MedCard}/>
        <Route exact path='/favorites' component={SavedStrains} />
        </div>
        </AppWrapper>
        
        <Footer />
      </div>
      
    </Router>
  );
}

export default App;

// create account link to signup //
