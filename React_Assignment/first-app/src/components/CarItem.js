const CarItem = ({ car }) => {
  return (
    <tr>
      <td>{car.model}</td>
      <td>{car.brand}</td>
      <td>{car.price}</td>
    </tr>
  );
};
export default CarItem;
