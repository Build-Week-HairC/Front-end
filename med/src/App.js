import React from 'react';

import Login from "./Components/Login"
import { Route } from "react-router-dom";
import './App.css';

import FormikSignupForm from './components/FormikSignupForm';





function App() {
  return (
    <div className="App">

      <Login />

      <FormikSignupForm />

    </div>
  );
}

export default App;
