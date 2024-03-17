import './content.css';
import Display from './display';
import Sidebar from './sidebar';
import { useState } from 'react';

function Content() {
  const [country, setCountry] = useState("")

  function countryhandler(selectedCountry) {
    setCountry(selectedCountry);
  }

  return (<div class="content">
    <Sidebar countryHandler={countryhandler}></Sidebar>
    <Display Country={country} ></Display>
  </div>
  )
}

export default Content;