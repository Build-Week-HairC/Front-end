import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignupTest from "./Components/FormikSignupForm";
import FormikQuestionForm from "./Components/Questionnaire";

import MedCabinet from "./Components/MedCabinet/MedCabinet";

import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";

import LoginTest from "./Components/LoginTest";
import MedCard from "./Components/MedCard/MedCard";
import SavedStrains from "./Components/SavedStrains";
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
            <Route path="/signup" component={SignupTest} />
            <Route path="/questionnaire" component={FormikQuestionForm} />
            <Route exact path="/" component={LoginTest} />
            <PrivateRoute path="/medcabinet" component={MedCabinet} />
            <Route exact path="/medcard" component={MedCard} />
            <Route exact path="/favorites" component={SavedStrains} />
          </div>
        </AppWrapper>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

// create account link to signup //
