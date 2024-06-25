import LaptopCard from "./LaptopCard";
import laptops from "./laptop_data";
import { Link } from "react-router-dom";

const LaptopGallery = () => {
  const laptopCardList = laptops.map((l) => (
    <div className="col" key={l.id}>
      <Link to={"detail/"+l.id}>
        <LaptopCard laptop={l}/>
      </Link>
    </div>
  ));

  return <div className="row mt-3">{laptopCardList}</div>;
};

export default LaptopGallery;
