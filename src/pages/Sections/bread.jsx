// Breadcrumbs.js
import React from "react";
import { Link } from "react-router-dom";

const Breadcrumbs = ({ crumbs }) => {
  return (
    <div className="page-header">
      <div className="page-block">
        <div className="row align-items-center">
          <div className="col-md-12">
            <ul className="breadcrumb">
              {crumbs.map((crumb, index) => (
                <li
                  key={index}
                  className={`breadcrumb-item ${
                    index === crumbs.length - 1 ? "active" : ""
                  }`}
                >
                  {index === crumbs.length - 1 ? (
                    crumb.title
                  ) : (
                    <Link to={crumb.href}>{crumb.title}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-12">
            <div className="page-header-title">
              <h2 className="mb-0">{crumbs[crumbs.length - 1]?.title}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumbs;
