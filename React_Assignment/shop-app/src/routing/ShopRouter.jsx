import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopNavbar from "./ShopNavbar";
import Home from "../components/Home";
import Electronic from "../components/electronic/Electronic";
import Clothing from "../components/clothing/Clothing";
import PageNotFound from "../components/PageNotFound";

const ShopRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShopNavbar />}>
          <Route index element={<Home />}></Route>
          <Route path="elecs" element={<Electronic />}></Route>
          <Route path="cloths" element={<Clothing />}></Route>
          <Route path="*" element={<PageNotFound/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default ShopRouter;
