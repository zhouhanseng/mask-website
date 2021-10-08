import * as React from "react";
import { useState, useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Cookies } from "../components/Cookies";
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
      {size > 850 ? (
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
      {size > 850 ? (
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

      <p className="sm:leading-relaxed hg:text-5xl text-4xl max-sm:text-2xl max-sm:leading-8 font-semibold mx-auto text-center w-2/3 mt-16 min-w-280">
        Browser Extension
      </p>
      <p className="max-sm:text-base text-2xl text-center mt-4 leading-relaxed px-6 text-gray-500 w-full mx-auto font-light">
        A SEAMLESS WEB 3.0 EXPERIENCE
      </p>
      <p className="max-sm:text-base text-2xl text-center mb-24 max-sm:mb-8 leading-relaxed px-6 text-gray-500 w-full mx-auto font-light">
        LOG IN WITH MASK ID TO ENJOY THE DECENTRALIZED WORLD
      </p>

      {/* #region ITO image */}
      {size > 850 ? (
        <div className="w-5/6 md:flex hidden max-w-8xl mx-auto mb-16">
          <div className="w-1/2 py-8 pl-16">
            <p className="hg:text-4xl md:text-2xl lg:text-3xl">
              ITO (Initial Twitter Offering)
            </p>
            <p className="relative top-1/2 hg:text-2xl text-xl pr-8">
              Launch decentralized asset freely and participate in token launch
              directly on Twitter
            </p>
          </div>
          <StaticImage alt="" src={"../images/ITO.png"} className="w-1/2" />
        </div>
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
      {size > 850 ? (
        <div className="w-5/6 md:flex hidden max-w-8xl mx-auto mb-16">
          <StaticImage
            alt=""
            src={"../images/LuckyDrop.png"}
            className="w-1/2"
          />
          <div className="w-1/2 py-8 pl-16">
            <p className="hg:text-4xl md:text-2xl lg:text-3xl">Lucky Drop</p>
            <p className="relative top-1/2 hg:text-2xl text-xl pr-8">
              Interact with your friends with crypto assets on social media.
              Borderless payment Claim and hand out crypto assets on ETH, BSC,
              and Polygon.
            </p>
          </div>
        </div>
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
      {size > 850 ? (
        <div className="w-5/6 md:flex hidden max-w-8xl mx-auto mb-16">
          <div className="w-1/2 py-8 pl-16">
            <p className="hg:text-4xl md:text-2xl lg:text-3xl">File Service</p>
            <p className="relative top-1/2 hg:text-2xl text-xl pr-8">
              Decentralized file storage, permanently. Upload and share files to
              your Mask friends on top of Arweave Network
            </p>
          </div>
          <StaticImage
            alt=""
            src={"../images/FileService.png"}
            className="w-1/2"
          />
        </div>
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
      {size > 850 ? (
        <div className="w-5/6 md:flex hidden max-w-8xl mx-auto mb-16">
          <StaticImage alt="" src={"../images/Transak.png"} className="w-1/2" />
          <div className="w-1/2 py-8 pl-16">
            <p className="hg:text-4xl md:text-2xl lg:text-3xl">Transak</p>
            <p className="relative top-1/2 hg:text-2xl text-xl pr-8">
              Fiat On-Ramp Aggregator on Twitter. Buy crypto in 60+ countries
              with transak support.
            </p>
          </div>
        </div>
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
      {size > 850 ? (
        <div className="w-5/6 md:flex hidden max-w-8xl mx-auto mb-16">
          <div className="w-1/2 py-8 pl-16">
            <p className="hg:text-4xl md:text-2xl lg:text-3xl">Markets</p>
            <p className="relative top-1/2 hg:text-2xl text-xl pr-8">
              Display token information, price charts and exchange information
              directly on social media.
            </p>
          </div>
          <StaticImage alt="" src={"../images/Markets.png"} className="w-1/2" />
        </div>
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
      {size > 850 ? (
        <div className="w-5/6 md:flex hidden max-w-8xl mx-auto mb-16">
          <StaticImage alt="" src={"../images/NFT.png"} className="w-1/2" />
          <div className="w-1/2 py-8 pl-16">
            <p className="hg:text-4xl md:text-2xl lg:text-3xl">NFT</p>
            <p className="relative top-1/2 hg:text-2xl text-xl pr-8">
              Display specific information of collectibles in Opensea and
              Rarible, make an offer directly on social media.
            </p>
          </div>
        </div>
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
      {size > 850 ? (
        <div className="w-5/6 md:flex hidden max-w-8xl mx-auto mb-16">
          <div className="w-1/2 py-8 pl-16">
            <p className="hg:text-4xl md:text-2xl lg:text-3xl">Swap</p>
            <p className="relative top-1/2 hg:text-2xl text-xl pr-8">
              Purchase tokens through DEX without additional fees and
              restrictions.
            </p>
          </div>
          <StaticImage alt="" src={"../images/Swap.png"} className="w-1/2" />
        </div>
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
      <p className="max-sm:text-base text-2xl text-center mt-8 px-6 text-gray-500 w-full mx-auto font-light">
        Mask Network is trusted and supported by an active community of users
        and contributors. Join us!
      </p>
      <div className="flex justify-between w-9/10 md:w-4/5 mx-auto font-semibold text-xl mt-8 md:mt-16 max-sm:text-sm px-2 mb-16 md:mb-44">
        <div className="flex flex-col items-center w-36 max-sm:w-24">
          <StaticImage
            alt=""
            src={"../images/github.png"}
            className="w-24 mb-3 max-sm:w-20"
          />
          <p>GitHub</p>
        </div>
        <div className="flex flex-col items-center w-36 max-sm:w-24">
          <StaticImage
            alt=""
            src={"../images/maskdao.png"}
            className="w-24 mb-3 max-sm:w-20"
          />
          <p>MaskDao</p>
        </div>
        <div className="flex flex-col items-center w-36 max-sm:w-24">
          <StaticImage
            alt=""
            src={"../images/mask_snapshot.png"}
            className="w-24 mb-3 max-sm:w-20"
          />
          <p className="text-center">Mask Snapshot</p>
        </div>
      </div>
      <div className="bg-blue-50 pb-48 max-sm:pb-4">
        <p className="md:pt-24 py-16 max-sm:pt-6 max-sm:text-2xl max-sm:font-normal text-4xl font-semibold text-center">
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
      <Cookies />
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
