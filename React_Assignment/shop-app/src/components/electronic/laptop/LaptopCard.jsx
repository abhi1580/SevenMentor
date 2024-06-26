const LaptopCard = ({ laptop }) => {
    return (
      <div className="col">
      <div className="card" style={{width:"10rem"}}>
        <img className="card-img-top" alt="img" style={{width:"300px",height:"280px"}} src={laptop.image} />
        <div className="card-body">
          <h5 className="card-title">
            {laptop.brand}
            {laptop.model}
          </h5>
          <h5 className="card-subtitle">&#8377; {laptop.price}</h5>
        </div>
      </div>
      </div>
      );
  };
  
  export default LaptopCard;
  