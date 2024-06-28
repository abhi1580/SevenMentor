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
import MobileDetail from "../components/electronic/mobile/MobileDetail";
import ClothsGallery from "../components/clothing/ClothsGallery";
import ClothDetail from "../components/clothing/ClothDetail";
import LaptopGallery from "../components/electronic/laptop/LaptopGallery";
import LaptopDetail from "../components/electronic/laptop/LaptopDetail";
import BikeGallery from "../components/bikes/BikeGallery";
import CarsGallery from "../components/cars/CarsGallery";
import StateShare from "../components/state_sharing/StateShare";

const ShopRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShopNavbar />}>
          <Route index element={<Home />} />
          <Route path="elecs" element={<Electronic />}>
            <Route path="mobile" element={<Mobile />}>
              <Route path="" element={<MobileGallery />} />
              <Route path="detail/:id" element={<MobileDetail />} />
            </Route>
            <Route path="laptop" element={<Laptop />}>
              <Route path="" element={<LaptopGallery />} />
              <Route path="detail/:id" element={<LaptopDetail />} />
            </Route>
          </Route>
          <Route path="cloths" element={<Clothing />}>
            <Route path=":person" element={<ClothsGallery />} />
            <Route path=":person/detail/:id" element={<ClothDetail />} />
          </Route>
          <Route path="bikes" element={<BikeGallery />} />
          <Route path="cars" element={<CarsGallery/>} />
          <Route path="state_share" element={<StateShare/>} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default ShopRouter;
