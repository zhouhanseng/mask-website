import * as React from "react";
import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

//assets
import indexHeadImage from "../images/index_head.webp";

// markup
const FaqPage = () => {
  const [size, setSize] = useState(0);

  useEffect(() => {
    setSize(getWindowDimensions(window));

    function handleResize() {
      setSize(getWindowDimensions(window));
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main>
      <Navbar />
      <div>
        <div>
          <div>{size}</div>
          <div></div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

function getWindowDimensions(window) {
  const { innerWidth: width, innerHeight: height } = window;
  return width;
}

export default FaqPage;
