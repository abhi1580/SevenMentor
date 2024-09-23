import { useParams } from "react-router-dom";

const ProductEditForm = () => {
  const { name, brand, model, price } = useParams();
  return (
    <div className="flex justify-content-center">
      <h2 className="text-center">Product Edit Form</h2>
      <div className=" mt-3">
        <label htmlFor="name" className="form-label">
          Product Name
        </label>
        <input
          className="form-control"
          type="text"
          name="name"
          id="name"
          value={name}
        />
      </div>
      <div className=" mt-3">
        <label htmlFor="brand" className="form-label">
          Brand
        </label>
        <input
          className="form-control"
          type="text"
          name="brand"
          id="brand"
          value={brand}
        />
      </div>
      <div className=" mt-3">
        {" "}
        <label htmlFor="brand" className="form-label">
          Model
        </label>
        <input
          className="form-control"
          type="text"
          name="model"
          id="model"
          value={model}
        />
      </div>
      <div className=" mt-3">
        <label htmlFor="brand" className="form-label">
          Price
        </label>
        <input
          className="form-control"
          type="text"
          name="price"
          id="price"
          value={price}
        />
      </div>
      <div className=" mt-3">
        <button className="btn btn-success" type="submit">
          Update
        </button>
      </div>
    </div>
  );
};

export default ProductEditForm;
