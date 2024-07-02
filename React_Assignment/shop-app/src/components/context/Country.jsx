import React, { useState } from "react";
import countries from "./country_data";
import StateOfCountry from "./StateOfCountry";

const Country = () => {
  const [countryId, setCountryId] = useState(1);
  return (
    <div>
      <div>
        <label className="form-label" htmlFor="cn">
          Select country
        </label>
        <select
          className="form-select"
          value={countryId}
          onChange={(e) => setCountryId(e.target.value)}
        >
          {countries.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}                  
            </option>
          ))}
        </select>
      </div>
      <StateOfCountry countryId={countryId} />
    </div>
  );
};

export default Country;
