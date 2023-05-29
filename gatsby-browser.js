import "animate.css";
import "./src/styles/global.css";
import "@fontsource/montserrat/300.css"; // Weight 500 with all styles included.
import "@fontsource/montserrat/400.css"; // Weight 500 with all styles included.
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/800.css";
import "@fontsource/montserrat/900.css";
import "@fontsource/manrope";
import "@fontsource/poppins";
import "@fontsource/roboto";

const addScript = (url) => {
  const script = document.createElement("script");
  script.src = url;
  script.async = true;
  document.body.appendChild(script);
};

export const onClientEntry = () => {
  window.onload = () => {
    addScript("https://cdn.jsdelivr.net/npm/gun/gun.js");
  };
};
