import React, { useState, useContext } from "react";
import statesOfCountry from "./state_of_country_data";
import CitiesOfStates from "./CitiesOfStates";
import { CountryContext } from "./Country";
import countries from "./country_data";

const State_Of_country = () => {
  const countryName = useContext(CountryContext);

  const [stateId, setStateId] = useState(1);

  const selectedCountry = countries.find(
    (country) => country.name === countryName
  );
  const filteredStates =
    selectedCountry &&
    statesOfCountry.filter((state) => state.countryId === selectedCountry.id);
  return (
    <div>
      <label>Select State</label>
      <select
        className="form-select"
        id="st"
        value={stateId}
        onChange={(e) => setStateId(e.target.value)}
      >
        {selectedCountry &&
          filteredStates.map((fst) => (
            <option key={fst.stateId} value={fst.stateId}>
              {fst.name}
            </option>
          ))}
      </select>
      <CitiesOfStates stateId={stateId} />
    </div>
  );
};

export default State_Of_country;
