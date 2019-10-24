import React, { useState, useEffect } from "react";
import axios from 'axios';
import RyanMedCard from "./Components/RyanMedCard";


const MedCabinet = () => {

  const [query, setQuery] = useState([]);

  useEffect(() => {
    axios.get("http://medcabinet.herokuapp.com/api/ds/fruity")
    .then(response => {
    console.log(response.data);
    setQuery(response.data)
    })
    .catch(error => {
    console.log("the data was not returned", error);
    
    });
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  }

//GO AND FIX INPUT BOXES - DONE!
//get weed data from backend - store in state  
//display weed data
//once it is working filter through it


  return (
    <div>
    <div className="dashboard-search">
      <form onSubmit={handleSubmit}>
        <h3>Desired Effects</h3>
          <label htmlFor="relaxed"className="relaxed-checkbox">Relaxed</label>
            <input
            type="checkbox" 
            name="relaxed"
            id="relaxed"
            value="relaxed"
          />
          <label htmlFor="happy" className="happy-checkbox">Happy</label>
            <input 
            type="checkbox" 
            name="happy"
            id="happy"
            value="happy" 
          />
           <label htmlFor="uplifted"className="effects-checkbox">Uplifted</label>
            <input 
            type="checkbox" 
            name="uplifted"
            id="uplifted" 
            value="uplifted" 
          />
        <h3>Type</h3>
        <label htmlFor="hybrid"className="hybrid">Hybrid</label>
          <input
            type="checkbox"
            name="hybrid"
            id="hybrid"
            value="hybrid"
          />
          <label htmlFor="indica"className="indica">Indica</label>
          <input
            type="checkbox"
            name="indica"
            id="indica"
            value="indica"
          /> 
          <label htmlFor="sativa" className="sativa">Sativa</label>
          <input
            type="checkbox"
            name="sativa"
            id="sativa"
            value="sativa"
          />     
        <button type="submit">Find Some Weed!</button>
      </form>
    </div>
    
    <div className="weedcard">
      {query.map((query, index) => {
        return (
          <RyanMedCard 
            key={index}
            description={query.description}
            effects={query.effects}
            strain={query.strain}
            type={query.type}
          />
         
        );
      })}
    </div>
  </div>

  );

}
  

export default MedCabinet;
