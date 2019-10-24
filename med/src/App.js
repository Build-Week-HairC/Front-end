import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
<<<<<<< HEAD
import FormikSignupForm from "./Components/FormikSignupForm";
import MedCabinet from "./Components/MedCabinet/MedCabinet"
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import RyanLogin from './Components/RyanLogin';
import MedCard from './Components/MedCard/MedCard';
=======
import SignupTest from "./components/FormikSignupForm";
import FormikQuestionForm from "./components/Questionnaire";

import MedCabinet from "./components/MedCabinet/MedCabinet";


import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

import Login from './components/Login';
import MedCard from './components/MedCard/MedCard';
>>>>>>> 336508d5c1a902739d5b4ee3484b30c313003985



function App() {
  return (
    <Router>
      <div className="App">
        <Header />
<<<<<<< HEAD
        <MedCabinet />
        <Route path='/signup' component={FormikSignupForm} />
        <Route exact path='/' component={RyanLogin}/>
=======
        <Route path='/signup' component={SignupTest} />
        <Route path='/questionnaire' component={FormikQuestionForm} />
        <Route exact path='/' component={Login}/>
>>>>>>> 336508d5c1a902739d5b4ee3484b30c313003985
        <PrivateRoute path='/medcabinet' component={MedCabinet} />
        <Route exact path='/medcard' component={MedCard}/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

// create account link to signup //
