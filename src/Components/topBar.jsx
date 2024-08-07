import React, { useState } from "react";
import useLayoutChange from "../hooks/layoutChanges";
import { redirect } from "react-router-dom";
// import "./Topbar.css"; // Import the CSS file for the topbar

const Topbar = ({ toggleSidebar, toggleMobileMenu }) => {
  const { mode, layoutChange } = useLayoutChange();
  const facebook = "https://www.facebook.com/profile.php?id=61550695902259";
  const youtube = "https://youtube.com/@ambe.creation";
  const insta = "https://www.instagram.com/ambe_creation__";
  const whatsapp = "https://api.whatsapp.com/send/?phone=919003577745";
  const openNew = (path) => {
    window.open(path, "_blank");
  };
  return (
    <>
      {/* Header Topbar start */}
      <div className="header-wrapper">
        {/* Mobile Media Block start */}
        <div className="me-auto pc-mob-drp">
          <ul className="list-unstyled">
            {/* Menu collapse Icon */}
            <li className="pc-h-item pc-sidebar-collapse">
              <a
                href="#"
                className="pc-head-link ms-0"
                id="sidebar-hide"
                onClick={toggleSidebar}
              >
                <i className="ti ti-menu-2"></i>
              </a>
            </li>
            <li className="pc-h-item pc-sidebar-popup">
              <a
                href="#"
                className="pc-head-link ms-0"
                id="mobile-collapse"
                onClick={toggleMobileMenu}
              >
                <i className="ti ti-menu-2"></i>
              </a>
            </li>
          </ul>
        </div>
        {/* Mobile Media Block end */}
        <div className="ms-auto">
          <ul className="list-unstyled">
            <li className="dropdown pc-h-item">
              <a
                className="pc-head-link dropdown-toggle arrow-none me-0"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="false"
                aria-expanded="false"
              >
                <svg className="pc-icon">
                  <use xlinkHref="#custom-link"></use>
                </svg>
              </a>
              <div className="dropdown-menu dropdown-menu-end pc-h-dropdown">
                <a
                  href="#!"
                  className="dropdown-item"
                  onClick={() => openNew(facebook)}
                >
                  <i className="ti ti-brand-facebook"></i>
                  <span>Facebook</span>
                </a>
                <a
                  href="#!"
                  className="dropdown-item"
                  onClick={() => openNew(youtube)}
                >
                  <i className="ti ti-brand-youtube"></i>

                  <span>Youtube</span>
                </a>
                <a
                  href="#!"
                  className="dropdown-item"
                  onClick={() => openNew(insta)}
                >
                  <i className="ti ti-brand-instagram"></i>

                  <span>Instagram</span>
                </a>
                <a
                  href="#!"
                  className="dropdown-item"
                  onClick={() => openNew(whatsapp)}
                >
                  <i className="ti ti-brand-whatsapp"></i>
                  <span>WhatsApp</span>
                </a>
              </div>
            </li>
            <li className="dropdown pc-h-item">
              <a
                className="pc-head-link dropdown-toggle arrow-none me-0"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="false"
                aria-expanded="false"
              >
                <svg className="pc-icon">
                  <use xlinkHref="#custom-sun-1"></use>
                </svg>
              </a>
              <div className="dropdown-menu dropdown-menu-end pc-h-dropdown">
                <a
                  href="#!"
                  className="dropdown-item"
                  onClick={() => layoutChange("dark")}
                >
                  <svg className="pc-icon">
                    <use xlinkHref="#custom-moon"></use>
                  </svg>
                  <span>Dark</span>
                </a>
                <a
                  href="#!"
                  className="dropdown-item"
                  onClick={() => layoutChange("light")}
                >
                  <svg className="pc-icon">
                    <use xlinkHref="#custom-sun-1"></use>
                  </svg>
                  <span>Light</span>
                </a>
              </div>
            </li>
            <li className="dropdown pc-h-item header-user-profile">
              <a
                className="pc-head-link dropdown-toggle arrow-none me-0"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="false"
                data-bs-auto-close="outside"
                aria-expanded="false"
              >
                <img
                  src="../assets/images/user/avatar-2.jpg"
                  alt="user-image"
                  className="user-avtar"
                />
              </a>
              <div className="dropdown-menu dropdown-user-profile dropdown-menu-end pc-h-dropdown">
                <div className="dropdown-header d-flex align-items-center justify-content-between">
                  <h5 className="m-0">Profile</h5>
                </div>
                <div className="dropdown-body">
                  <div
                    className="profile-notification-scroll position-relative"
                    style={{ maxHeight: "calc(100vh - 225px)" }}
                  >
                    <a href="/signup">
                      <span>Signup</span>
                    </a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* Header end */}
    </>
  );
};

export default Topbar;
