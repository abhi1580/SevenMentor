import { Link } from "react-router-dom";
import refrigerators from './refrigerator_data'
import RefrigeratorCard from "./RefrigeratorCard";

const RefrigeratorGallery = () => {
  const refrigeratorCardList = refrigerators.map((rf) => (
    <div className="col" key={rf.id}>
      <Link to={"detail/"+rf.id}>
        <RefrigeratorCard refrigerator={rf}/>
      </Link>
    </div>
  ));

  return <div className="row mt-3 p-3">{refrigeratorCardList}</div>;
};

export default RefrigeratorGallery;
