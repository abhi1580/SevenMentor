import { useParams,useNavigate } from "react-router-dom";
import laptops from "./laptop_data";

const LaptopDetail = () => {
  const { id } = useParams();
  const navigate=useNavigate()
  const convertedId=parseInt(id)
  const laptop = laptops.find((l) => l.id === convertedId);
  return (
    <div className="container p-5" style={{textAlign:"center"}} key={laptop.id}>
      <h2>Mobile brand : {laptop.brand}</h2>
      <img
        src={laptop.image}
        alt={laptop.model}
        style={{ width: "450px", height: "400px" }}
      />
      <h2>Mobile Price : &#8377; {laptop.price}</h2>
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
            <th>Processor</th>
            <td>{laptop.processor} </td>
          </tr>
          <tr>
            <th>RAM</th>
            <td>{laptop.specification.RAM} </td>
          </tr>
          <tr>
            <th>Internal Storage</th>
            <td>{laptop.specification.storage} </td>
          </tr>
          
        </tbody>
      </table>
      <button onClick={()=>navigate("/elecs/laptop")} className="btn btn-outline-success">Back to Gallery</button>
    </div>
  );
};

export default LaptopDetail;
