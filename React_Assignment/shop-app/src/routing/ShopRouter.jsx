import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopNavbar from "./ShopNavbar";
import Home from "../components/Home";
import Electronic from "../components/electronic/Electronic";
import Clothing from "../components/clothing/Clothing";
import PageNotFound from "../components/PageNotFound";
import Mobile from "../components/electronic/mobile/Mobile";
import Laptop from "../components/electronic/laptop/Laptop";
import MobileGallery from "../components/electronic/mobile/MobileGallery";

const ShopRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShopNavbar />}>
          <Route index element={<Home />}></Route>
          <Route path="elecs" element={<Electronic />}>
            <Route path="mobile" element={<Mobile />}>
              <Route path="" element={<MobileGallery />}></Route>
            </Route>
            <Route path="laptop" element={<Laptop />} />
          </Route>
          <Route path="cloths" element={<Clothing />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default ShopRouter;
