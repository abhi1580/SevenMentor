import React from "react";
import PlacesList from "./PlacesList";
import SearchPlace from "./SearchPlace";
import { useState } from "react";
import places from "./places_data";
import searchPlaces from "./filterPlaces";

const FilterableList = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };
  //calling business logic function and obtaining result of business logic
  const searchResult = searchPlaces(places, searchQuery);
  console.log(searchResult)
  return (
    <div>
      <SearchPlace
        searchQuery={searchQuery}
        onSearch={handleSearchQueryChange}
      />
      <PlacesList places={searchResult} />
    </div>
  );
};

export default FilterableList;
