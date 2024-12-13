import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductView from "../ProductView";
import ProductAdd from "../ProductAdd";
import Navbar from "./Navbar";
import ProductEdit from "../ProductEdit";

const AdminRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<ProductView />} />
          <Route path="add" element={<ProductAdd />} />
          <Route path="edit/:id/:nm/:br/:pr" element={<ProductEdit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AdminRouter;
