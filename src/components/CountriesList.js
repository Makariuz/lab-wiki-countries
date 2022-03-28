import { BrowserRouter as Router, Route, Link, Routes, useParams } from "react-router-dom";
import {CountryDetails} from '../components/CountryDetails'


export function CountriesList({countries}) {



  const divStyle = {
    maxHeight: "90vh", 
    overflow: "scroll",
  };
 
    return (
        <div className="col-5" style={divStyle}>
        <div className="list-group">
      
        {countries.map(country => {
          return ( 
            <div>
           
            <Link className="list-group-item list-group-item-action" to={country.alpha3Code}> 
            {country.name.official}  
            </Link>
           

            </div>
            )
        })}
      
        </div>
        </div>
    )
}