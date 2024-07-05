import React, { useState,useContext } from "react";
import citiesOfStates from "./city_of_states_data";
import { CountryContext } from "./Country";

const CitiesOfStates = ({ stateId }) => {
  const [cityName, setCityName] = useState("");
  const countryName=useContext(CountryContext)
  const numStateId = parseInt(stateId);
  const filteredCities = citiesOfStates.filter(
    (city) => city.stateId === numStateId
  );
  return (
    <div>
      <label className="form-label" htmlFor="ct">
        Select City
      </label>
      <select
        id="ct"
        className="form-select"
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
      >
        {filteredCities.map((fct) => (
          <option value={fct.name} key={fct.cityId}>
            {fct.name}
          </option>
        ))}
      </select>
      <h2>You selected city : {cityName} of {countryName}</h2>
    </div>
  );
};

export default CitiesOfStates;
