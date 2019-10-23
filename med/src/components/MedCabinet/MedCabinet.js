import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import axios from 'axios';

const MedCabinet = ({ touched, errors, status }) => {

  const [query, setQuery] = useState([]);
  useEffect(() => {
    status && setQuery(query => [...query, status]);
  },[status]);

  return (
    <div className="dashboard-search">
      <Form>
        <Field 
        type="text" 
        name="effects" 
        placeholder="Desired Effects" 
        />
        <Field 
        type="text" 
        name="flavors" 
        placeholder="Flavors" 
        />
        <Field 
        type="text" 
        name="symptoms" 
        placeholder="May Relieve" 
        />
        <Field 
        type="text" 
        name="aromas" 
        placeholder="Aromas" 
        />
        <button>Submit!</button>

      </Form>
      {query.map( weedCard => (
        <ul key={query.id}>
          <li>Effects: {query.effects}</li>
          <li>Flavors: {query.flavors}</li>
          <li>Symptoms: {query.symptoms}</li>
          <li>Aromas: {query.aromas}</li>
        </ul>

      ))}

    </div>
    
  );
}

const FormikMedCabinet = withFormik({
  mapPropsToValues({ effects, flavors, symptoms, aromas }) {

    return {
      effects: effects || "",
      flavors: flavors || "",
      symptoms: symptoms || "",
      aromas: aromas || "",
    }
  },

  handleSubmit(values, { setStatus }) {
    axios.get("http://medcabinet.herokuapp.com/api/ds/", values)
    .then(response => {
      setStatus(response.data);
    })
    .catch(error => console.log(error.response));

  }

})(MedCabinet);

export default FormikMedCabinet;