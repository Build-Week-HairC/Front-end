import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FormikSignupForm from "./Components/FormikSignupForm";
// import FormikQuestionForm from "./Components/Questionnaire";
import FormikMedCabinet from "./Components/MedCabinet/MedCabinet"
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Login from './Components/Login';
import MedCard from './Components/MedCard/MedCard';



function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <FormikMedCabinet />
        <Route path='/signup' component={FormikSignupForm} />
        {/* <Route path='/questionnaire' component={FormikQuestionForm} /> */}
        <Route exact path='/' component={Login}/>
        <PrivateRoute path='/medcabinet' component={FormikMedCabinet} />
        <Route exact path='/medcard' component={MedCard}/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

// create account link to signup //
