
import { useState, useEffect } from 'react';
import './App.css';
import { CountriesList } from './components/CountriesList';
import { CountryDetails } from './components/CountryDetails';
import { NavBar } from './components/NavBar';
import countries_db from './countries.json'
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {

  const [countries, setCountries] = useState(countries_db)

 
  return (
    <div className="App">
      
      <NavBar />
     
      <Routes>
          <Route path='/' element={<CountriesList countries={countries} />}/>
          <Route path='/:alphaCode' element={<CountryDetails countries={countries }/>}/>
      </Routes>
    </div>
  );
}

export default App;
