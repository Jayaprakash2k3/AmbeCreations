import React from "react";
import Topbar from "./topBar";
import Sidebar from "./sideBar";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import Banner from "../pages/Sections/banner";
const PageLayout = () => {
  const [isSidebarHidden, setSidebarHidden] = useState(false);
  const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);
  const toggleSidebar = () => {
    console.log("Toggling sidebar visibility");
    setMobileMenuVisible(false);
    setSidebarHidden((prevState) => !prevState);
  };

  // Function to toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setSidebarHidden(false);
    setMobileMenuVisible((prevState) => !prevState);
  };
  return (
    <>
      {/* [ Pre-loader ] start */}
      <div className="loader-bg">
        {/* Add any pre-loader content here if necessary */}
      </div>
      {/* [ Pre-loader ] end */}
      {/* [ sidebar ] start */}

      <Sidebar
        isSidebarHidden={isSidebarHidden}
        isMobileMenuVisible={isMobileMenuVisible}
        toggleSidebar={toggleSidebar}
      />
      {/* [ sidebar ] end */}

      {/* [ header ] start */}
      <header className="pc-header">
        <Topbar
          toggleSidebar={toggleSidebar}
          toggleMobileMenu={toggleMobileMenu}
        />
      </header>
      {/* [ header ] end */}

      {/* [ Main Content ] start */}
      <div className="pc-container">
        <div className="pc-content">
          {/* [ page header ] start */}
 
          {/* [ page header ] end */}

          {/* [ page content ] start */}
          <div className="row">
            <Outlet />
          </div>
          {/* [ page content ] end */}
        </div>
      </div>
      {/* [ Main Content ] end */}

      {/* [ footer ] start */}
      <footer className="pc-footer">{/* Add footer content here */}</footer>
      {/* [ footer ] end */}
    </>
  );
};

export default PageLayout;
