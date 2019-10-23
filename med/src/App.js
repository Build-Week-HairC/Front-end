import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FormikSignupForm from './components/FormikSignupForm';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MedCabinet from './components/MedCabinet/MedCabinet';
import Login from './components/Login';
import MedCard from './components/MedCard/MedCard';

import PrivateRoute from './components/PrivateRoute/PrivateRoute';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path='/' component={FormikSignupForm} />
        <Route exact path='/' component={Login}/>
        <PrivateRoute path='/medcabinet' component={MedCabinet} />
        <Route exact path='/medcard' component={MedCard}/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;