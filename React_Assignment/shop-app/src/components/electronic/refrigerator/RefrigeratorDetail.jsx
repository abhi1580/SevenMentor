import { useParams,useNavigate } from "react-router-dom";
import refrigerators from "./refrigerator_data";

const RefrigeratorDetail = () => {
  const { id } = useParams();
  const navigate=useNavigate()
  const convertedId=parseInt(id)
  const refrigerator = refrigerators.find((rf) => rf.id === convertedId);
  return (
    <div className="container p-5" style={{textAlign:"center"}} key={refrigerator.id}>
      <h2>Mobile brand : {refrigerator.brand}</h2>
      <img
        src={refrigerator.image}
        alt={refrigerator.model}
        style={{ width: "300px", height: "700px" }}
      />
      <h2>Mobile Price : &#8377; {refrigerator.price}</h2>
      <h5>Specification Details :</h5>
      <table className="table table-primary striped p-2">
        <thead>
          <tr className="table-dark">
            <th>Specification Name</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
        <tr>
            <th>Compressor</th>
            <td>{refrigerator.specification.compressor} </td>
          </tr>
          <tr>
            <th>Defrosting Type</th>
            <td>{refrigerator.specification.defrosting_type} </td>
          </tr>
          <tr>
            <th>Door Type</th>
            <td>{refrigerator.specification.door_type} </td>
          </tr>
          
        </tbody>
      </table>
      <button onClick={()=>navigate("/elecs/refrigerator")} className="btn btn-outline-success">Back to Gallery</button>
    </div>
  );
};

export default RefrigeratorDetail;
