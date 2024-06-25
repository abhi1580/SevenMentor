import { useParams, useNavigate } from "react-router-dom";
import cloths from "./cloth_data";

const ClothDetail = () => {
  const { id, person } = useParams();
  const navigate = useNavigate();
  console.log("Id:", id);
  const convertedId=parseInt(id)
  console.log("person:", person);
  const filteredData = cloths.filter(
    (fd) => fd.collection === person && fd.id === convertedId
  );
  console.log(filteredData);
  const cloth = filteredData.find((c) => c.id === convertedId);
  return (
    <div className="container p-5" style={{textAlign:"center"}} key={cloth.convertedId}>
      <h2>Cloth brand : {cloth.brand}</h2>
      <img
        src={cloth.image}
        alt={cloth.brand}
        style={{ width: "300px", height: "400px" }}
      />
      <h2>Price : &#8377; {cloth.price}</h2>
      <h5>Product Details :</h5>
       <table className="table table-primary striped p-2">
        <thead>
          <tr className="table-dark">
            <th>Parameter Name</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
        <tr>
            <th>Fabric Type </th>
            <td>{cloth.fabric_type} </td>
          </tr>
          <tr>
            <th>Type</th>
            <td>{cloth.type} </td>
          </tr>
          <tr>
            <th>Color</th>
            <td>{cloth.color} </td>
          </tr>
          <tr>
            <th>Size</th>
            <td>{cloth.size} </td>
          </tr>
        </tbody>
      </table> 
      <button
        onClick={() => navigate("/cloths/"+person)}
        className="btn btn-outline-success"
      >
        Back to Gallery
      </button>
    </div>
  );
};

export default ClothDetail;
