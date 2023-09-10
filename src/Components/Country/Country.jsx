import { useState } from 'react';
import './Country.css'

const Country = ({ country }) => {
//   console.log(Country);
  const {name, flags, population, area, cca3} = country;

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  }

  return (
    <div className='country'>
        <h3>NAme: {name.common}</h3>
        <img src={flags.png} alt="" />
        <p>Population: {population}</p>
        <p>Area: {area}</p>
        <p><small>Code: {cca3}</small></p>
        <button className='myButton' onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
        {visited ? 'I have visited this country.': 'I want to visited'}
    </div>
  );
};

export default Country;
