import MobileCard from "./MobileCard";
import mobiles from "./mobile_data";
import { Link } from "react-router-dom";

const MobileGallery = () => {
  const mobileCardList = mobiles.map((mb) => (
    <div className="col" key={mb.id}>
      <Link to={"detail/"+mb.id}>
        <MobileCard mobile={mb} />
      </Link>
    </div>
  ));

  return <div className="row mt-3">{mobileCardList}</div>;
};

export default MobileGallery;
