const MobileCard = ({ mobile }) => {
  return (
    <div className="card">
      <img className="card-img-top" alt="img" style={{width:"200px",height:"400px"}} src={mobile.image} />
      <div className="card-body">
        <h3 className="card-title">
          {mobile.brand}
          {mobile.model}
        </h3>
        <h4 className="card-subtitle">&#8377; {mobile.price}</h4>
      </div>
    </div>
  );
};

export default MobileCard;
