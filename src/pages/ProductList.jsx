// ProductList.js
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Breadcrumbs from "./Sections/bread";
import ProductCard from "./Sections/ProductCard";
// Import jQuery in your React component
import $ from "jquery";

const ProductList = ({ type }) => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();
  const { productId } = useParams();
  const navigate = useNavigate();
  const url =
    type === "Category" || type == "Wholesale"
      ? "http://ambecreation.com/backend/api/get-categories-list"
      : type == "Product"
      ? "http://ambecreation.com/backend/api/get-products"
      : "http://ambecreation.com/backend/api/get-trending-collection";
  let data;
  let method = "POST";
  if (type === "Category") {
    if (!categoryId) {
      data = { parent_id: categoryId, is_wholesale: false, is_parent: true };
    } else {
      data = { parent_id: categoryId };
    }
  } else if (type === "Product") {
    data = { category_id: productId };
  } else if (type === "Trending") {
    data = "";
    method = "GET";
  } else if (type === "Wholesale") {
    data = { is_wholesale: true };
  }
  useEffect(() => {
    const settings = {
      async: true,
      crossDomain: true,
      url: url,
      method: method,
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
      },
      processData: false,
      data: JSON.stringify(data),
    };

    $.ajax(settings).done(function (response) {
      console.log(response.data);
      setProducts(response.data);
    });
  }, [categoryId, productId, type]);
  return (
    <div>
      <div class="col-md-12">
        <div class="page-header-title text-center">
          <h2 class="m-3">{type}</h2>
        </div>
      </div>
      <div className="row">
        {products.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
