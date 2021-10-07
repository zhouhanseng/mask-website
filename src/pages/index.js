import * as React from "react";
import { useState, useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  const [size, setSize] = useState(0);

  useEffect(() => {
    setSize(getWindowDimensions(window));

    function handleResize() {
      setSize(getWindowDimensions(window));
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size ? (
    <main>
      <Navbar />
      <StaticImage alt="" src="../images/index_head.png" className="w-full" />
      {/* #region what is mask image */}
      {size > 800 ? (
        <StaticImage
          alt=""
          src="../images/what_is_mask.png"
          className="w-full md:flex hidden"
        />
      ) : (
        <StaticImage
          alt=""
          src="../images/what_is_mask_response.png"
          className="w-full md:hidden flex"
        />
      )}

      {/* #endregion */}
      {/* #region discover image */}
      {size > 800 ? (
        <StaticImage
          alt=""
          src="../images/discover.png"
          className="w-full md:flex hidden"
        />
      ) : (
        <StaticImage
          alt=""
          src={"../images/discover_response.png"}
          className="w-full md:hidden flex"
        />
      )}
      {/* #endregion */}
      <div className="grid grid-cols-2 md:grid-cols-4 w-9/10 md:w-4/5 mx-auto">
        <StaticImage alt="" src={"../images/function_one.png"} className="" />
        <StaticImage alt="" src={"../images/function_three.png"} className="" />
        <StaticImage alt="" src={"../images/function_four.png"} className="" />
        <StaticImage alt="" src={"../images/function_two.png"} className="" />
      </div>
      {/* #region extension image */}
      {size > 800 ? (
        <StaticImage
          alt=""
          src={"../images/extension.png"}
          className="sm:flex hidden max-w-xl mx-auto mt-8"
        />
      ) : (
        <StaticImage
          alt=""
          src={"../images/extension_response.png"}
          className="sm:hidden flex max-w-sm mx-auto mt-4 w-4/5"
        />
      )}
      {/* #endregion */}
      {/* #region ITO image */}
      {size > 800 ? (
        <StaticImage
          alt=""
          src={"../images/ITO.png"}
          className="w-full md:flex hidden"
        />
      ) : size > 540 ? (
        <StaticImage
          alt=""
          src={"../images/ITO_md.png"}
          className="w-full md:hidden max-sm:hidden"
        />
      ) : (
        <StaticImage
          alt=""
          src={"../images/ITO_sm.png"}
          className="w-full sm:hidden flex"
        />
      )}
      {/* #endregion */}

      {/* #region LuckyDrop image */}
      {size > 800 ? (
        <StaticImage
          alt=""
          src={"../images/LuckyDrop.png"}
          className="w-full md:flex hidden"
        />
      ) : size > 540 ? (
        <StaticImage
          alt=""
          src={"../images/LuckyDrop_md.png"}
          className="w-full md:hidden max-sm:hidden"
        />
      ) : (
        <StaticImage
          alt=""
          src={"../images/LuckyDrop_sm.png"}
          className="w-full sm:hidden flex"
        />
      )}
      {/* #endregion */}

      {/* #region LuckyDrop image */}
      {size > 800 ? (
        <StaticImage
          alt=""
          src={"../images/FileService.png"}
          className="w-full md:flex hidden"
        />
      ) : size > 540 ? (
        <StaticImage
          alt=""
          src={"../images/FileService_md.png"}
          className="w-full md:hidden max-sm:hidden"
        />
      ) : (
        <StaticImage
          alt=""
          src={"../images/FileService_sm.png"}
          className="w-full sm:hidden flex"
        />
      )}
      {/* #endregion */}

      {/* #region Transak image */}
      {size > 800 ? (
        <StaticImage
          alt=""
          src={"../images/Transak.png"}
          className="w-full md:flex hidden"
        />
      ) : size > 540 ? (
        <StaticImage
          alt=""
          src={"../images/Transak_md.png"}
          className="w-full md:hidden max-sm:hidden"
        />
      ) : (
        <StaticImage
          alt=""
          src={"../images/Transak_sm.png"}
          className="w-full sm:hidden flex"
        />
      )}
      {/* #endregion */}

      {/* #region Transak image */}
      {size > 800 ? (
        <StaticImage
          alt=""
          src={"../images/Markets.png"}
          className="w-full md:flex hidden"
        />
      ) : size > 540 ? (
        <StaticImage
          alt=""
          src={"../images/Markets_md.png"}
          className="w-full md:hidden max-sm:hidden"
        />
      ) : (
        <StaticImage
          alt=""
          src={"../images/Markets_sm.png"}
          className="w-full sm:hidden flex"
        />
      )}
      {/* #endregion */}

      {/* #region NFT image */}
      {size > 800 ? (
        <StaticImage
          alt=""
          src={"../images/NFT.png"}
          className="w-full md:flex hidden"
        />
      ) : size > 540 ? (
        <StaticImage
          alt=""
          src={"../images/NFT_md.png"}
          className="w-full md:hidden max-sm:hidden"
        />
      ) : (
        <StaticImage
          alt=""
          src={"../images/NFT_sm.png"}
          className="w-full sm:hidden flex"
        />
      )}
      {/* #endregion */}

      {/* #region NFT image */}
      {size > 800 ? (
        <StaticImage
          alt=""
          src={"../images/Swap.png"}
          className="w-full md:flex hidden"
        />
      ) : size > 540 ? (
        <StaticImage
          alt=""
          src={"../images/Swap_md.png"}
          className="w-full md:hidden max-sm:hidden"
        />
      ) : (
        <StaticImage
          alt=""
          src={"../images/Swap_sm.png"}
          className="w-full sm:hidden flex"
        />
      )}
      {/* #endregion */}
      <p className="sm:leading-relaxed sm:text-4xl max-sm:text-2xl max-sm:leading-8 max-sm:mt-2 font-semibold mx-auto text-center w-2/3 mt-8 min-w-280">
        Join the Mask Network Community
      </p>
      <p className="max-sm:text-base text-2xl text-center mt-8 px-3 text-gray-500 max-w-xl mx-auto font-normal">
        Mask Network is trusted and supported by an active community of users
        and contributors. Join us!
      </p>
      <div className="flex justify-between w-9/10 md:w-4/5 mx-auto font-semibold text-xl mt-8 md:mt-16 max-sm:text-sm px-2 mb-8 md:mb-24">
        <div className="flex flex-col items-center w-36 max-sm:w-24">
          <img
            alt=""
            src={"../images/github.png"}
            className="w-24 mb-3 max-sm:w-20"
          />
          <p>GitHub</p>
        </div>
        <div className="flex flex-col items-center w-36 max-sm:w-24">
          <img
            alt=""
            src={"../images/maskdao.png"}
            className="w-24 mb-3 max-sm:w-20"
          />
          <p>MaskDao</p>
        </div>
        <div className="flex flex-col items-center w-36 max-sm:w-24">
          <img
            alt=""
            src={"../images/mask_snapshot.png"}
            className="w-24 mb-3 max-sm:w-20"
          />
          <p className="text-center">Mask Snapshot</p>
        </div>
      </div>
      <div className="bg-blue-50 pb-48 max-sm:pb-4">
        <p className="md:pt-16 py-10 max-sm:pt-3 max-sm:text-2xl max-sm:font-normal text-4xl font-semibold text-center">
          Partner&Supporter
        </p>
        <div className="grid grid-cols-3 gap-x-16 max-sm:gap-x-4 w-10/12 md:grid-cols-5 md:max-w-6xl md:w-11/12 md:gap-x-16 gap-y-8 mx-auto hoverFilter">
          <StaticImage alt="" src={"../images/partner_binance.png"} />
          <StaticImage alt="" src={"../images/partner_web30.png"} />
          <StaticImage alt="" src={"../images/partner_okex.png"} />
          <StaticImage alt="" src={"../images/partner_hashkey.png"} />
          <StaticImage alt="" src={"../images/partner_maker.png"} />
          <StaticImage alt="" src={"../images/partner_gitcoin.png"} />
          <StaticImage alt="" src={"../images/partner_gun.png"} />
          <StaticImage alt="" src={"../images/partner_arweave.png"} />
          <StaticImage alt="" src={"../images/partner_chainide.png"} />
          <StaticImage
            alt=""
            src={"../images/partner_dgc.png"}
            className="md:hidden flex opacity-0"
          />
          <StaticImage alt="" src={"../images/partner_dgc.png"} />
        </div>
      </div>
      <Footer />
    </main>
  ) : (
    <div className="h-screen" />
  );
};

function getWindowDimensions(window) {
  const { innerWidth } = window;
  return innerWidth;
}

export default IndexPage;
