// ProductCard.js
import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const path = product.has_sub_categories
    ? `/category/${product.id}`
    : product.price
    ? `/product/${product.id}`
    : `/products/${product.id}`;

  // Handler function for navigation
  const handleNavigate = () => {
    navigate(path);
  };

  return (
    <div className="col-sm-6 col-xl-3" key={product.id}>
      <div className="card product-card">
        <div className="card-img-top">
          <div onClick={handleNavigate} style={{ cursor: "pointer" }}>
            <img
              src={product.image_url || "default-image-url"}
              alt={product.title || "Product Image"}
              className="img-prod img-fluid w-100"
            />
          </div>

          {product.discount && (
            <div className="card-body position-absolute start-0 top-0">
              <span className="badge bg-success">{product.discount}%</span>
            </div>
          )}
          <div className="btn-prod-cart card-body position-absolute end-0 bottom-0">
            <div className="btn btn-warning">
              <svg className="pc-icon">
                <use xlinkHref="#custom-bag"></use>
              </svg>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div onClick={handleNavigate} style={{ cursor: "pointer" }}>
            {product.price && (
              <p className="prod-content mb-0 text-muted">{product.title}</p>
            )}
            <div className="d-flex align-items-center justify-content-between mt-2">
              <h4 className="mb-0 text-truncate">
                {product.price ? (
                  <b>₹{product.price.price}</b>
                ) : (
                  <b>{product.title}</b>
                )}
                {/* <b>{product.title}</b> */}
                {product.old_price && (
                  <span className="text-sm text-muted p-1 f-w-400 text-decoration-line-through">
                    ₹{product.old_price.price}
                  </span>
                )}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
