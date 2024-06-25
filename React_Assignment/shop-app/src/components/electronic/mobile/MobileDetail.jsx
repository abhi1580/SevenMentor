import { useParams,useNavigate } from "react-router-dom";
import mobiles from "./mobile_data";

const MobileDetail = () => {
  const { id } = useParams();
  const navigate=useNavigate()
  const convertedId=parseInt(id)
  const mobile = mobiles.find((m) => m.id === convertedId);
  return (
    <div className="container p-5" style={{textAlign:"center"}} key={mobile.id}>
      <h2>Mobile brand : {mobile.brand}</h2>
      <img
        src={mobile.image}
        alt={mobile.model}
        style={{ width: "200px", height: "400px" }}
      />
      <h2>Mobile Price : &#8377; {mobile.price}</h2>
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
            <th>Primary Camera</th>
            <td>{mobile.specification.camera.primary} </td>
          </tr>
          <tr>
            <th>Front Camera</th>
            <td>{mobile.specification.camera.front} </td>
          </tr>
          <tr>
            <th>Internal Storage</th>
            <td>{mobile.specification.storage} </td>
          </tr>
          <tr>
            <th>RAM</th>
            <td>{mobile.specification.ram} </td>
          </tr>
        </tbody>
      </table>
      <button onClick={()=>navigate("/elecs/mobile")} className="btn btn-outline-success">Back to Gallery</button>
    </div>
  );
};

export default MobileDetail;
