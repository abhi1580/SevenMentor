import "./App.css";
import AdminRouter from "./router/AdminRouter";
export const PRODUCT_API_URL = "http://localhost:4000/api/products";

function App() {
  return (
    <div>
      <h2 className="text-center">Product Admin App</h2>
      <AdminRouter />
    </div>
  );
}

export default App;
