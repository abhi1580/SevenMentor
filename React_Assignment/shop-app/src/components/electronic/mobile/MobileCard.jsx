const MobileCard = ({ mobile }) => {
  return (
    <div className="card" style={{width:"18rem"}}>
      <img className="card-img-top" alt="img" style={{width:"200px",height:"400px"}} src={mobile.image} />
      <div className="card-body">
        <h5 className="card-title">
          {mobile.brand}
          {mobile.model}
        </h5>
        <h5 className="card-subtitle">&#8377; {mobile.price}</h5>
      </div>
    </div>
    );
};

export default MobileCard;
