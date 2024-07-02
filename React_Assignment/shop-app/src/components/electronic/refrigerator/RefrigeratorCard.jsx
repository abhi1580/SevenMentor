const RefrigeratorCard = ({ refrigerator }) => {
    return (
      <div className="col" style={{border:"2px solid black"}}>
      <div className="card" style={{width:"10rem"}}>
        <img className="card-img-top" alt="img" style={{width:"300px",height:"700px"}} src={refrigerator.image} />
        <div className="card-body">
          <h5 className="card-title">
            {refrigerator.brand}
          </h5>
            ({refrigerator.model})
            <h6> </h6>
          <h5 className="card-subtitle">&#8377; {refrigerator.price}</h5>
        </div>
      </div>
      </div>
      );
  };
  
  export default RefrigeratorCard;
  