import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import $ from "jquery";
const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState({});
  const productId = useParams();
  const increaseValue = () => setQuantity(quantity + 1);
  const decreaseValue = () => setQuantity(quantity > 1 ? quantity - 1 : 1);
  useEffect(() => {
    const settings = {
      async: true,
      crossDomain: true,
      url:
        "http://ambecreation.com/backend/api/get-product-details/" +
        productId.productId,
      method: "GET",
      headers: {
        Accept: "*/*",
      },
    };

    $.ajax(settings).done(function (response) {
      let data = response.data;
      data.images.unshift({ path_url: data.image_url });
      console.log(data);
      setProduct(data);
    });
  }, []);
  return product && product.images ? (
    <div>
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <div className="sticky-md-top product-sticky">
                <div
                  id="carouselExampleCaptions"
                  className="carousel slide ecomm-prod-slider"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner bg-light rounded position-relative">
                    <div className="card-body position-absolute end-0 top-0">
                      <div className="form-check prod-likes">
                        <input type="checkbox" className="form-check-input" />
                        {/* <FaHeart className="prod-likes-icon" /> */}
                      </div>
                    </div>
                    <div className="card-body position-absolute bottom-0 end-0">
                      <ul className="list-inline ms-auto mb-0 prod-likes">
                        <li className="list-inline-item m-0">
                          <a
                            href="#"
                            className="avtar avtar-xs text-white text-hover-primary"
                          >
                            {/* <TiZoomIn className="f-18" /> */}
                          </a>
                        </li>
                        <li className="list-inline-item m-0">
                          <a
                            href="#"
                            className="avtar avtar-xs text-white text-hover-primary"
                          >
                            {/* <TiZoomOut className="f-18" /> */}
                          </a>
                        </li>
                        <li className="list-inline-item m-0">
                          <a
                            href="#"
                            className="avtar avtar-xs text-white text-hover-primary"
                          >
                            {/* <TiArrowRight className="f-18" /> */}
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* Carousel Items */}
                    {product.images.map((prod, index) => (
                      <div
                        className={`carousel-item ${
                          index === 0 ? "active" : ""
                        }`}
                        key={index}
                      >
                        <img
                          src={`${prod.path_url}`}
                          className="d-block w-100"
                          alt={`Product images ${index + 1}`}
                        />
                      </div>
                    ))}
                  </div>
                  <ol className="carousel-indicators position-relative product-carousel-indicators my-sm-3 mx-0">
                    {product.images.map((imgs, index) => (
                      <li
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to={index}
                        style={{ backgroundColor: "transparent" }}
                        className={`w-25 rounded h-auto ${
                          index === 0 ? "active" : ""
                        }`}
                        key={index}
                      >
                        <img
                          src={`${imgs.path_url}`}
                          className="d-block wid-100 rounded"
                          alt={`Product images ${index + 1}`}
                        />
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <span className="badge bg-success f-14">In stock</span>
              <h5 className="my-3">{product.title}</h5>
              <div className="star f-18 mb-3">
                {/* <FaStar className="text-warning" /> */}
                {/* <FaStar className="text-warning" /> */}
                {/* <FaStar className="text-warning" /> */}
                {/* <FaStarHalfAlt className="text-warning" /> */}
                {/* <FaStar className="text-muted" /> */}
                <span className="text-sm text-muted">
                  {product.description}
                </span>
              </div>
              <h5 className="mt-4 mb-3">Offer</h5>
              <div className="offer-check-block">
                {["No Cost EMI", "Bank Offer"].map((offer, index) => (
                  <div className="offer-check border rounded p-3" key={index}>
                    <div className="form-check">
                      <input
                        type="radio"
                        name="radio1"
                        className="form-check-input input-primary"
                        id={`customCheckdef${index + 1}`}
                      />
                      <label
                        className="form-check-label d-block"
                        htmlFor={`customCheckdef${index + 1}`}
                      >
                        <span className="h6 mb-0 d-block">{offer}</span>
                        <span className="text-muted offer-details">
                          Upto ₹1,250.00 discount on select Credit Cards
                        </span>
                        <span className="h6 mb-0 text-primary">
                          {/* 1 Offer <TiArrowRight /> */}
                        </span>
                      </label>
                    </div>
                  </div>
                ))}
              </div>
              <h5 className="mt-4 mb-3 f-w-500">About this item</h5>
              <ul>
                <li className="mb-2">Care Instructions: Hand Wash Only</li>
                <li className="mb-2">Fit Type: Regular</li>
                <li className="mb-2">Fabric : 100% Synthetic</li>
              </ul>
              <div className="form-group row">
                <label className="col-form-label col-lg-3 col-sm-12">
                  Colors <span className="text-danger">*</span>
                </label>
                <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
                  {["primary", "secondary", "danger", "dark"].map(
                    (color, index) => (
                      <div
                        className="form-check form-check-inline color-checkbox mb-0"
                        key={index}
                      >
                        <input
                          className="form-check-input"
                          type="radio"
                          name="product_color"
                        />
                        <i className={`fas fa-circle text-${color}`}></i>
                      </div>
                    )
                  )}
                </div>
              </div>
              <div className="form-group row align-items-center">
                <label className="col-form-label col-lg-3 col-sm-12">
                  <span className="d-block">Size</span>
                  <a className="link-primary text-sm text-decoration-underline">
                    Size Chart?
                  </a>
                </label>
                <div className="col-lg-9 col-md-12 col-sm-12">
                  <div className="row g-2">
                    {["Small", "Medium", "Large"].map((size, index) => (
                      <div className="col-auto" key={index}>
                        <input
                          type="radio"
                          className="btn-check"
                          id={`btnrdolite${index + 1}`}
                          name="btn_radio2"
                        />
                        <label
                          className="btn btn-sm btn-light-primary"
                          htmlFor={`btnrdolite${index + 1}`}
                        >
                          {size}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-form-label col-lg-3 col-sm-12">
                  Quantity <span className="text-danger">*</span>
                </label>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <div
                    className="btn-group btn-group-sm mb-2 border"
                    role="group"
                  >
                    <button
                      type="button"
                      id="decrease"
                      onClick={decreaseValue}
                      className="btn btn-link-secondary"
                    >
                      <i className="ti ti-minus"></i>
                    </button>
                    <input
                      className="wid-35 text-center border-0 m-0 form-control rounded-0 shadow-none"
                      type="text"
                      id="number"
                      value={quantity}
                      readOnly
                    />
                    <button
                      type="button"
                      id="increase"
                      onClick={increaseValue}
                      className="btn btn-link-secondary"
                    >
                      <i className="ti ti-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
              <h3 className="mb-4">
                <b>₹{product.price.price * quantity}</b>
                <span className="mx-2 f-16 text-muted f-w-400 text-decoration-line-through">
                  ₹{product.old_price.price * quantity}
                </span>
              </h3>
              <div className="row">
                <div className="col-6">
                  <div className="d-grid">
                    <button type="button" className="btn btn-primary">
                      Buy Now
                    </button>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-grid">
                    <button type="button" className="btn btn-outline-secondary">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default ProductPage;
