import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FormikSignupForm from "./Components/FormikSignupForm";
import MedCabinet from "./Components/MedCabinet/MedCabinet"
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import RyanLogin from './Components/RyanLogin';
import MedCard from './Components/MedCard/MedCard';



function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <MedCabinet />
        <Route path='/signup' component={FormikSignupForm} />
        <Route exact path='/' component={RyanLogin}/>
        <PrivateRoute path='/medcabinet' component={MedCabinet} />
        <Route exact path='/medcard' component={MedCard}/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

// create account link to signup //
