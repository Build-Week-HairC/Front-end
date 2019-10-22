import React, { useState, useEffect } from 'react';

const MedCabinet = () => {

  const [searchTerm, setSearchTerm] = useState([]);
    
  const handleChange = event => {
      setSearchTerm(event.target.value);
  };

  useEffect(() => {
      //filter through data here//
  });

  return (
    <div>
      <h1>Med Cabinet Dashboard</h1>
      <div className="user-info"> 
        <h2>User</h2>
        <h3>User email</h3>
      </div>
      <div className="search-my-favs">
        <div>My Favorites</div>
        <input
        type="text"
        placeholder="search"
        value={searchTerm}
        onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default MedCabinet;
