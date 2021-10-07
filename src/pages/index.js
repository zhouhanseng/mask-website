import * as React from "react";
import { useState, useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

//assets
import indexHeadImage from "../images/index_head.png";
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
import LuckyDropImage from "../images/LuckyDrop.png";
import LuckyDrop_MdImage from "../images/LuckyDrop_md.png";
import LuckyDrop_SmImage from "../images/LuckyDrop_sm.png";
import FileServiceImage from "../images/FileService.png";
import FileService_MdImage from "../images/FileService_md.png";
import FileService_SmImage from "../images/FileService_sm.png";
import TransakImage from "../images/Transak.png";
import Transak_MdImage from "../images/Transak_md.png";
import Transak_SmImage from "../images/Transak_sm.png";
import MarketsImage from "../images/Markets.png";
import Markets_MdImage from "../images/Markets_md.png";
import Markets_SmImage from "../images/Markets_sm.png";
import NftImage from "../images/NFT.png";
import Nft_MdImage from "../images/NFT_md.png";
import Nft_SmImage from "../images/NFT_sm.png";
import SwapImage from "../images/Swap.png";
import Swap_MdImage from "../images/Swap_md.png";
import Swap_SmImage from "../images/Swap_sm.png";
import GithubImage from "../images/github.png";
import MaskDaoImage from "../images/maskdao.png";
import MaskSnapshotImage from "../images/mask_snapshot.png";

import partnerArweaveImage from "../images/partner_arweave.png";
import partnerBinanceImage from "../images/partner_binance.png";
import partnerChainideImage from "../images/partner_chainide.png";
import partnerDgcImage from "../images/partner_dgc.png";
import partnerGitcoinImage from "../images/partner_gitcoin.png";
import partnerGunImage from "../images/partner_gun.png";
import partnerHashkeyImage from "../images/partner_hashkey.png";
import partnerMakerImage from "../images/partner_maker.png";
import partnerOkexImage from "../images/partner_okex.png";
import partnerWeb30Image from "../images/partner_web30.png";

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
      <img alt="" src={indexHeadImage} className="w-full" />
      {/* #region what is mask image */}
      {size > 800 ? (
        <img alt="" src={whatIsMaskImage} className="w-full md:flex hidden" />
      ) : (
        <img
          alt=""
          src={whatIsMaskResponseImage}
          className="w-full md:hidden flex"
        />
      )}

      {/* #endregion */}
      {/* #region discover image */}
      {size > 800 ? (
        <img alt="" src={discoverImage} className="w-full md:flex hidden" />
      ) : (
        <img
          alt=""
          src={discoverResponseImage}
          className="w-full md:hidden flex"
        />
      )}
      {/* #endregion */}
      <div className="grid grid-cols-2 md:grid-cols-4 w-9/10 md:w-4/5 mx-auto">
        <img alt="" src={functionOneImage} className="" />
        <img alt="" src={functionThreeImage} className="" />
        <img alt="" src={functionFourImage} className="" />
        <img alt="" src={functionTwoImage} className="" />
      </div>
      {/* #region extension image */}
      {size > 800 ? (
        <img
          alt=""
          src={extensionImage}
          className="sm:flex hidden max-w-xl mx-auto mt-8"
        />
      ) : (
        <img
          alt=""
          src={extensionResponseImage}
          className="sm:hidden flex max-w-sm mx-auto mt-4 w-4/5"
        />
      )}
      {/* #endregion */}
      {/* #region ITO image */}
      {size > 800 ? (
        <img alt="" src={ITOImage} className="w-full md:flex hidden" />
      ) : size > 540 ? (
        <img
          alt=""
          src={ITO_MdImage}
          className="w-full md:hidden max-sm:hidden"
        />
      ) : (
        <img alt="" src={ITO_SmImage} className="w-full sm:hidden flex" />
      )}
      {/* #endregion */}

      {/* #region LuckyDrop image */}
      {size > 800 ? (
        <img alt="" src={LuckyDropImage} className="w-full md:flex hidden" />
      ) : size > 540 ? (
        <img
          alt=""
          src={LuckyDrop_MdImage}
          className="w-full md:hidden max-sm:hidden"
        />
      ) : (
        <img alt="" src={LuckyDrop_SmImage} className="w-full sm:hidden flex" />
      )}
      {/* #endregion */}

      {/* #region LuckyDrop image */}
      {size > 800 ? (
        <img alt="" src={FileServiceImage} className="w-full md:flex hidden" />
      ) : size > 540 ? (
        <img
          alt=""
          src={FileService_MdImage}
          className="w-full md:hidden max-sm:hidden"
        />
      ) : (
        <img
          alt=""
          src={FileService_SmImage}
          className="w-full sm:hidden flex"
        />
      )}
      {/* #endregion */}

      {/* #region Transak image */}
      {size > 800 ? (
        <img alt="" src={TransakImage} className="w-full md:flex hidden" />
      ) : size > 540 ? (
        <img
          alt=""
          src={Transak_MdImage}
          className="w-full md:hidden max-sm:hidden"
        />
      ) : (
        <img alt="" src={Transak_SmImage} className="w-full sm:hidden flex" />
      )}
      {/* #endregion */}

      {/* #region Transak image */}
      {size > 800 ? (
        <img alt="" src={MarketsImage} className="w-full md:flex hidden" />
      ) : size > 540 ? (
        <img
          alt=""
          src={Markets_MdImage}
          className="w-full md:hidden max-sm:hidden"
        />
      ) : (
        <img alt="" src={Markets_SmImage} className="w-full sm:hidden flex" />
      )}
      {/* #endregion */}

      {/* #region NFT image */}
      {size > 800 ? (
        <img alt="" src={NftImage} className="w-full md:flex hidden" />
      ) : size > 540 ? (
        <img
          alt=""
          src={Nft_MdImage}
          className="w-full md:hidden max-sm:hidden"
        />
      ) : (
        <img alt="" src={Nft_SmImage} className="w-full sm:hidden flex" />
      )}
      {/* #endregion */}

      {/* #region NFT image */}
      {size > 800 ? (
        <img alt="" src={SwapImage} className="w-full md:flex hidden" />
      ) : size > 540 ? (
        <img
          alt=""
          src={Swap_MdImage}
          className="w-full md:hidden max-sm:hidden"
        />
      ) : (
        <img alt="" src={Swap_SmImage} className="w-full sm:hidden flex" />
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
          <img alt="" src={GithubImage} className="w-24 mb-3 max-sm:w-20" />
          <p>GitHub</p>
        </div>
        <div className="flex flex-col items-center w-36 max-sm:w-24">
          <img alt="" src={MaskDaoImage} className="w-24 mb-3 max-sm:w-20" />
          <p>MaskDao</p>
        </div>
        <div className="flex flex-col items-center w-36 max-sm:w-24">
          <img
            alt=""
            src={MaskSnapshotImage}
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
          <img alt="" src={partnerBinanceImage} />
          <img alt="" src={partnerWeb30Image} />
          <img alt="" src={partnerOkexImage} />
          <img alt="" src={partnerHashkeyImage} />
          <img alt="" src={partnerMakerImage} />
          <img alt="" src={partnerGitcoinImage} />
          <img alt="" src={partnerGunImage} />
          <img alt="" src={partnerArweaveImage} />
          <img alt="" src={partnerChainideImage} />
          <img alt="" src="" className="md:hidden flex" />
          <img alt="" src={partnerDgcImage} />
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
