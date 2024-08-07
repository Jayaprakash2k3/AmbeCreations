import { useState } from "react";

const useLayoutChange = () => {
  const [mode, setMode] = useState("default");

  const layoutChange = (newMode) => {
    console.log(`Switching to ${newMode} mode`);
    document.body.setAttribute("data-pc-theme", newMode);

    // Update logo based on the mode
    if (newMode === "dark") {
      document.querySelectorAll(".logo-lg").forEach((logo) => {
        logo.setAttribute("src", "../assets/images/logo-white.svg");
      });
    } else {
      document.querySelectorAll(".logo-lg").forEach((logo) => {
        logo.setAttribute("src", "../assets/images/logo-dark.svg");
      });
    }

    // Update active button state
    document.querySelectorAll(".theme-layout .btn").forEach((btn) => {
      btn.classList.remove("active");
      if (
        btn.getAttribute("data-value") ===
        (newMode === "dark" ? "false" : "true")
      ) {
        btn.classList.add("active");
      }
    });

    setMode(newMode);
  };

  const layoutChangeDefault = () => {
    console.log("Switching to default layout");
    document.body.removeAttribute("data-pc-theme");
    // Reset to default layout here if needed
    setMode("default");
  };

  return { mode, layoutChange, layoutChangeDefault };
};

export default useLayoutChange;
