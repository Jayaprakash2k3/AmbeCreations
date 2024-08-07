import React from "react";
import ProductList from "./ProductList";
import Banner from "./Sections/banner";
import Footer from "./Sections/Footer";
function Home() {
  return (
    <div>
      <div className="page-header w-100">
        <Banner />
      </div>
      <ProductList type="Category" />
      <ProductList type="Trending" />
    </div>
  );
}

export default Home;
