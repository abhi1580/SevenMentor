import React from "react";
import statesOfCountry from "./state_of_country_data";

const State_Of_country = ({ countryId }) => {
  const newCountryId = parseInt(countryId);
  const filteredStates = statesOfCountry.filter(
    (state) => state.countryId === newCountryId
  );
  return (
    <div>
      <label>Select State</label>
      <select className="form-select" id="st">
        {filteredStates.map((fst) => (
          <option key={fst.stateId}>{fst.name}</option>
        ))}
      </select>
    </div>
  );
};

export default State_Of_country;
