import './sidebar.css';
import CountryUnits from '../symbols.json';
import { useState } from 'react';


function Sidebar(props) {
    let countryhandler = props.countryHandler;
    let [unitdetails, setUnitdetails] = useState([]);
    function handlecountry() {
        countryhandler(document.getElementById("countryname").value);
        setUnitdetails(CountryUnits.filter(filterunits));
        function filterunits(units) {
            return (units["country"] === document.getElementById("countryname").value);
        }                                                           // returns the details of the country matched
    }
    console.log(unitdetails);
    return (<div class="sidebar">
        <label class="sidebarlabel">Select Your City</label>
        <select id="countryname">                                      {/*dropdown menu for list of countries*/}
            <option value="United States">United States</option>
            <option value="India">India</option>
            <option value="United Kingdom">United kingdom</option>
        </select>
        <button onClick={() => { handlecountry() }}>Load</button>

                                                                     {/* card for displaying units of a country */}
        <div class="card">
             <label>Units of Measurement</label>
            {unitdetails.map(unit => (<div class="units">
                <div>Country : {unit['country']}</div>
                <div> Currency : {unit['Currency']}</div>
                <div>Distance : {unit['distance']}</div>
                <div> Speed : {unit['speed']}</div>
            </div>
            ))}
        </div>
    </div>)
}

export default Sidebar;