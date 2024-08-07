import { useState, useEffect } from "react";

const useContainerMode = () => {
  const [isContainer, setIsContainer] = useState(false);

  useEffect(() => {
    // Set initial container mode based on saved preference or default
    const initialContainer = document.body.getAttribute("data-pc-container");
    setIsContainer(initialContainer === "true");

    // Apply container mode styles
    const pcContent = document.querySelector(".pc-content");
    const footerWrapper = document.querySelector(".footer-wrapper");

    if (pcContent) {
      pcContent.classList.toggle("container", isContainer);
    }

    if (footerWrapper) {
      footerWrapper.classList.toggle("container", isContainer);
      footerWrapper.classList.toggle("container-fluid", !isContainer);
    }

    // Cleanup function if needed
    return () => {
      if (pcContent) {
        pcContent.classList.remove("container");
      }
      if (footerWrapper) {
        footerWrapper.classList.remove("container");
        footerWrapper.classList.add("container-fluid");
      }
    };
  }, [isContainer]);

  const toggleContainerMode = (value) => {
    setIsContainer(value === "true");
    document.body.setAttribute("data-pc-container", value);
  };

  return {
    isContainer,
    toggleContainerMode,
  };
};

export default useContainerMode;
