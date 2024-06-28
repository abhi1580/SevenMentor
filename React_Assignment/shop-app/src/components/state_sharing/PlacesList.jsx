const PlacesList = ({ places }) => {
//   const filteredData = places.filter((p) => p.name === places);
  const placeItemList = places.map((p) => <li key={p.id}>{p.name}</li>);
  return (
    <div>
      <ul>{placeItemList}</ul>
    </div>
  );
};

export default PlacesList;
