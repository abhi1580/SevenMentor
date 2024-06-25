import React from "react";
import { useParams } from "react-router-dom";
import ClothesCards from "./ClothesCards";
import cloths from "./cloth_data";
import { Link } from "react-router-dom";

const ClothsGallery = () => {
  const { person } = useParams();
  const filteredData = cloths.filter((c) => c.collection === person);

  const clothsCardsList = filteredData.map((c) => (
    <div className="col-sm" key={c.id}>
      <Link to={"detail/"+c.id}>
      {person === "male" && <ClothesCards cloth={c} />}
      {person === "female" && <ClothesCards cloth={c} />}
      {person === "kids" && <ClothesCards cloth={c} />}
      </Link>
    </div>
  ));

  return (
    <div>
      <h2 style={{ backgroundColor: "Cyan" }}>
        Welcome to the {person} clothing section
      </h2>
      <div className="row mt-3">{clothsCardsList}</div>
    </div>
  );
};

export default ClothsGallery;
