import { Link, useParams } from "react-router-dom"


export function CountryDetails({countries}) {

  const { alphaCode } = useParams();
  const country = countries.find((country) => country.alpha3Code === alphaCode);


  const flag = `https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`

    return (
   
   <div className="col-7">
            <img src={flag.toLowerCase()} alt="country flag" styles={{"width": "300px"}}/>
            <h1>{country.name.official}</h1>
            <table class="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td  styles={{"width":"30%"}}>Capital</td>
                  <td>{country.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                  {country.area} km <sup>2</sup>
                  </td>
                </tr>
                {country.borders.length > 0 ? 
                <tr>
              
                  <td>Borders</td>
                  <td>
                    <ul>
                  
                    {country.borders.map((b) => (
                      <li><a href={b}> {b}</a></li>
                      ))}

                    </ul>  
                  </td>
             
                </tr>
                :
                  null  
                      }
              </tbody>
            </table>
          </div>
    )
}