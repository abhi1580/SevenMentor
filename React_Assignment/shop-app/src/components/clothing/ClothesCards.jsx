const ClothesCards = ({cloth}) => {
  return (
    <div className="card" style={{width:"18rem"}}>
      <img className="card-img-top" alt="img" style={{width:"300px",height:"400px"}} src={cloth.image} />
      <div className="card-body">
        <h5 className="card-title">
          {cloth.brand}
        </h5>
        <h5 className="card-subtitle">&#8377; {cloth.price}</h5>
      </div>
    </div>
  )
}

export default ClothesCards