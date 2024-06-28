
const SearchPlace = ({searchQuery,onSearch}) => {
 
  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={onSearch}
        placeholder="Enter your search query"
      />
    </div>
  );
};

export default SearchPlace;
