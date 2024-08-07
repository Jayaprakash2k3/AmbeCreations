import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = ({ isSidebarHidden, isMobileMenuVisible, toggleSidebar }) => {
  const navigate = useNavigate();
  return (
    <nav
      className={
        isSidebarHidden
          ? "pc-sidebar pc-sidebar-hide"
          : isMobileMenuVisible
          ? "pc-sidebar mob-sidebar-active"
          : "pc-sidebar"
      }
    >
      <div className="navbar-wrapper">
        <div className="m-header">
          <a href="/" className="b-brand text-primary">
            <img
              src="../assets/images/logo-white.png"
              style={{ width: "200px" }}
              alt="Logo"
            />
            <span className="badge bg-light-success rounded-pill ms-2 theme-version"></span>
          </a>
        </div>
        <div className="navbar-content">
          <div className="card pc-user-card">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0">
                  <img
                    src="../assets/images/user/avatar-1.jpg"
                    alt="User"
                    className="user-avtar wid-45 rounded-circle"
                  />
                </div>
                <div className="flex-grow-1 ms-3 me-2">
                  <h6 className="mb-0">Jonh Smith</h6>
                  <small>Administrator</small>
                </div>
                <a
                  className="btn btn-icon btn-link-secondary avtar-s"
                  data-bs-toggle="collapse"
                  href="#pc_sidebar_userlink"
                >
                  <svg className="pc-icon">
                    <use xlinkHref="#custom-sort-outline"></use>
                  </svg>
                </a>
              </div>
              <div className="collapse pc-user-links" id="pc_sidebar_userlink">
                <div className="pt-3">
                  <Link to="#!">
                    <i className="ti ti-user"></i>
                    <span>My Account</span>
                  </Link>
                  <Link to="#!">
                    <i className="ti ti-settings"></i>
                    <span>Settings</span>
                  </Link>
                  <Link to="#!">
                    <i className="ti ti-lock"></i>
                    <span>Lock Screen</span>
                  </Link>
                  <Link to="#!">
                    <i className="ti ti-power"></i>
                    <span>Logout</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <ul className="pc-navbar">
            <li className="pc-item pc-hasmenu">
              <Link to="/" className="pc-link">
                <span className="pc-micon">
                  <svg className="pc-icon">
                    <use xlinkHref="#custom-home"></use>
                  </svg>
                </span>
                <span className="pc-mtext">Home</span>
              </Link>
            </li>
            <li className="pc-item pc-hasmenu">
              <Link to="/products" className="pc-link">
                <span className="pc-micon">
                  <svg className="pc-icon">
                    <use xlinkHref="#custom-add-item"></use>
                  </svg>
                </span>
                <span className="pc-mtext">Products</span>
              </Link>
            </li>
            <li className="pc-item pc-hasmenu">
              <Link to="/trending" className="pc-link">
                <span className="pc-micon">
                  <svg className="pc-icon">
                    <use xlinkHref="#custom-status-up"></use>
                  </svg>
                </span>
                <span className="pc-mtext">Trending</span>
              </Link>
            </li>
            <li className="pc-item pc-hasmenu">
              <Link to="/wholesale" className="pc-link">
                <span className="pc-micon">
                  <svg className="pc-icon">
                    <use xlinkHref="#custom-box-1"></use>
                  </svg>
                </span>
                <span className="pc-mtext">Wholesale</span>
              </Link>
            </li>
            <li className="pc-item pc-hasmenu">
              <Link to="/contact" className="pc-link">
                <span className="pc-micon">
                  <svg className="pc-icon">
                    <use xlinkHref="#custom-call-calling"></use>
                  </svg>
                </span>
                <span className="pc-mtext">Contact Us</span>
              </Link>
            </li>
            <li className="pc-item pc-hasmenu">
              <Link to="/about" className="pc-link">
                <span className="pc-micon">
                  <svg className="pc-icon">
                    <use xlinkHref="#custom-user-bold"></use>
                  </svg>
                </span>
                <span className="pc-mtext">About Us</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {isMobileMenuVisible && (
        <div className="pc-menu-overlay" onClick={toggleSidebar}></div>
      )}
    </nav>
  );
};

export default Sidebar;
