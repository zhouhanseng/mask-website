import * as React from "react";
import { Navbar } from "../components/Navbar";

//assets
import indexHeadImage from "../images/index_head.webp";
import whatIsMaskImage from "../images/what_is_mask.png";
import whatIsMaskResponseImage from "../images/what_is_mask_response.png";
import discoverImage from "../images/discover.png";
import discoverResponseImage from "../images/discover_response.png";
import functionOneImage from "../images/function_one.png";
import functionTwoImage from "../images/function_two.png";
import functionThreeImage from "../images/function_three.png";
import functionFourImage from "../images/function_four.png";
import extensionImage from "../images/extension.png";
import extensionResponseImage from "../images/extension_response.png";
import ITOImage from "../images/ITO.png";
import ITO_MdImage from "../images/ITO_md.png";
import ITO_SmImage from "../images/ITO_sm.png";

const IndexPage = () => {
  return (
    <main>
      <Navbar />
      <img src={indexHeadImage} className="w-full" />
      {/* #region what is mask image */}
      <img src={whatIsMaskImage} className="w-full md:flex hidden" />
      <img src={whatIsMaskResponseImage} className="w-full md:hidden flex" />
      {/* #endregion */}
      {/* #region discover image */}
      <img src={discoverImage} className="w-full md:flex hidden" />
      <img src={discoverResponseImage} className="w-full md:hidden flex" />
      {/* #endregion */}
      <div className="grid grid-cols-2 md:grid-cols-4 w-9/10 md:w-4/5 mx-auto">
        <img src={functionOneImage} className="" />
        <img src={functionThreeImage} className="" />
        <img src={functionFourImage} className="" />
        <img src={functionTwoImage} className="" />
      </div>
      {/* #region extension image */}
      <img
        src={extensionImage}
        className="sm:flex hidden max-w-xl mx-auto mt-8"
      />
      <img
        src={extensionResponseImage}
        className="sm:hidden flex max-w-sm mx-auto mt-4 w-4/5"
      />
      {/* #endregion */}
      {/* #region ITO image */}
      <img src={ITOImage} className="w-full md:flex hidden" />
      <img src={ITO_MdImage} className="w-full md:hidden max-sm:hidden" />
      <img src={ITO_SmImage} className="w-full sm:hidden flex" />
      {/* #endregion */}
    </main>
  );
};

export default IndexPage;
