import * as React from "react";
import { Navbar } from "../components/Navbar";

//assets
import indexHeadImage from "../images/index_head.webp";

// markup
const IndexPage = () => {
  return (
    <main>
      <Navbar />
      <div>
        <img src={indexHeadImage} />
      </div>
    </main>
  );
};

export default IndexPage;
