// src/routes.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./Components/Layout";
import ProductList from "./pages/ProductList";
import ProductDetails from "./pages/ProductDetails";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import About from "./pages/About";
import Signup from "./pages/Signup";
// import ProductDetails from "./pages/Sections/ProductDetails";
// import Analytics from "./pages/Analytics";
// import Statistics from "./pages/Statistics";
// import Data from "./pages/Data";
// import Chart from "./pages/Chart";
// import Components from "./pages/Components";
// import Icons from "./pages/Icons";
// import { NotFound } from "./pages/NotFound";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route
        path="/category/:categoryId"
        element={<ProductList type="Category" />}
      />
      <Route path="/products" element={<ProductList type="Category" />} />
      <Route
        path="/products/:productId"
        element={<ProductList type="Product" />}
      />
      <Route path="/trending" element={<ProductList type="Trending" />} />
      <Route path="/wholesale" element={<ProductList type="Wholesale" />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/privacy-policy" element={<Privacy />} />
      <Route path="/product/:productId" element={<ProductDetails />} />
    </Route>
      <Route path="/signup" element={<Signup />} />
  </Routes>
);

export default AppRoutes;
