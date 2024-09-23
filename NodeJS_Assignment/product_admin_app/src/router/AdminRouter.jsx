import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import ProductView from "../components/ProductView";
import ProductEditForm from "../components/ProductEditForm";

const AdminRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminNavbar />}>
          <Route index element={<ProductView />} />
          <Route
            path="edit-product/:name/:brand/:model/:price"
            element={<ProductEditForm />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AdminRouter;
