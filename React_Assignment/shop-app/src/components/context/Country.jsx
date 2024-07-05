import React, { useState, createContext } from "react";
import countries from "./country_data";
import StateOfCountry from "./StateOfCountry";

//globally create context object and export it
export const CountryContext = createContext();

const Country = () => {
  const [countryName, setCountryName] = useState("");
  return (
    <div>
      <div>
        <label className="form-label" htmlFor="cn">
          Select country
        </label>
        <select
          className="form-select"
          value={countryName}
          onChange={(e) => setCountryName(e.target.value)}
        >
          {countries.map((c) => (
            <option key={c.id} value={c.name}>
              {c.name}
            </option>
          ))}
        </select>
      </div>
      <CountryContext.Provider value={countryName}>
        <StateOfCountry />
      </CountryContext.Provider>
    </div>
  );
};

export default Country;
