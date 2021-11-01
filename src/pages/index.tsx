import * as React from "react"
import { useState, useEffect } from "react"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import { Cookies } from "../components/Cookies"
import { SEO } from "../components/SEO"
import { StaticImage } from "gatsby-plugin-image"
import githubImage from "../images/github.png"
import maskdaoImage from "../images/maskdao.png"
import snapshotImage from "../images/mask_snapshot.png"

import functionOneImage from "../images/function_one.png"
import functionTwoImage from "../images/function_two.png"
import functionThreeImage from "../images/function_three.png"
import functionFourImage from "../images/function_four.png"
import { Banner } from "../components/Banner"
import { SectionItem } from "../components/SectionItem"

const IndexPage = () => {
  const [size, setSize] = useState(0)

  useEffect(() => {
    setSize(getWindowDimensions(window))

    function handleResize() {
      setSize(getWindowDimensions(window))
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return size ? (
    <main className='flex justify-center flex-col items-center'>
      <SEO title="Mask Network" />
      <Navbar />
      <Banner />
      <SectionItem mode={{ reverse: false, row: true }} />

      {/* #endregion */}
      {/* #region discover image */}
      <div className="w-full hg:py-24 md:py-8 pb-8 pt-4 max-sm:py-8">
        <div className="md:w-5/6 w-11/12 flex flex-col md:flex-row max-w-8xl mx-auto md:justify-between">
          <div className="w-full md:w-1/2 px-12 py-16 max-sm:px-8 max-sm:py-8 flex flex-col justify-between md:mt-0 mt-20 max-sm:mt-8 md:mb-0 mb-12 max-sm:mb-4 text-white discover-background">
            <p className="font-semibold hg:text-6xl lg:text-5xl md:text-4xl text-5xl max-sm:text-4xl md:mb-0 mb-48 max-sm:mb-24">
              Discover
            </p>
            <p className="md:mb-8 mb-4 max-sm:mb-0 text-2xl max-sm:text-sm">
              INTERACT WITH FRIENDS ON SOCIAL MEDIA IN A FREE, DECENTRALIZED,
              WEB 3.0 WAY.
            </p>
            <p className="opacity-0 max-sm:hidden">empty</p>
          </div>

          <div className="w-full md:w-1/2 hg:pr-12 flex md:flex-row-reverse md:justify-start justify-center transform hg:-translate-x-1">
            <StaticImage
              alt=""
              src="../images/discover.png"
              className="w-full noise-img"
              placeholder="blurred"
            />
          </div>
        </div>
      </div>

      {/* #endregion */}
      <div className="grid grid-cols-2 md:grid-cols-4 w-9/10 md:w-4/5 mx-auto text-center">
        <div className="flex flex-col items-center mb-16">
          <img alt="" src={functionOneImage} className="w-24 h-24" />
          <p className="w-3/4 mt-6 hg:text-xl text-base max-sm:text-sm font-semibold">
            Send encrypted messages to designated receivers
          </p>
        </div>
        <div className="flex flex-col items-center mb-16">
          <img alt="" src={functionTwoImage} className="w-24 h-24" />
          <p className="w-3/4 mt-6 hg:text-xl text-base max-sm:text-sm font-semibold">
            Protect your privacy
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img alt="" src={functionThreeImage} className="w-24 h-24" />
          <p className="w-3/4 mt-6 hg:text-xl text-base max-sm:text-sm font-semibold">
            Defend your data autonomy
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img alt="" src={functionFourImage} className="w-24 h-24" />
          <p className="w-3/4 mt-6 hg:text-xl text-base max-sm:text-sm font-semibold">
            Discover ownership economy
          </p>
        </div>
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
      <div className="md:w-5/6 w-11/12 flex flex-col-reverse md:flex-row max-w-8xl mx-auto mb-16 max-sm:mb-4">
        <div className="w-full md:w-1/2 py-8 max-sm:pt-3 md:pl-16 max-sm:mt-0 md:mt-0 mt-8 md:px-0 px-8 max-sm:px-2">
          <p className="hg:text-4xl md:text-2xl lg:text-3xl max-sm:text-3xl max-sm:mb-12 text-4xl md:mb-0 mb-40 font-bold">
            Initial Twitter Offering
          </p>
          <p className="relative top-1/2 text-2xl max-sm:text-base md:pr-8">
            Launch decentralized asset freely and participate in token launch
            directly on Twitter.
          </p>
        </div>
        <StaticImage
          alt=""
          src={"../images/ITO.png"}
          className="w-full md:w-1/2 noise-img"
        />
      </div>
      {/* #endregion */}

      {/* #region LuckyDrop image */}
      <div className="md:w-5/6 w-11/12 flex flex-col md:flex-row max-w-8xl mx-auto mb-16 max-sm:mb-4">
        <StaticImage
          alt=""
          src={"../images/LuckyDrop.png"}
          className="w-full md:w-1/2 noise-img"
        />
        <div className="w-full md:w-1/2 py-8 max-sm:pt-3 md:pl-16 max-sm:mt-0 md:mt-0 mt-8 md:px-0 px-8 max-sm:px-2">
          <p className="hg:text-4xl md:text-2xl lg:text-3xl max-sm:text-3xl max-sm:mb-12 text-4xl md:mb-0 mb-40 font-bold">
            Lucky Drop
          </p>
          <p className="relative top-1/2 text-2xl max-sm:text-base md:pr-8">
            Interact with your friends with crypto assets on social media.
            Borderless payment claim and hand out crypto assets on ETH, BSC, and
            Polygon.
          </p>
        </div>
      </div>
      {/* #endregion */}

      {/* #region File service image */}
      <div className="md:w-5/6 w-11/12 flex flex-col-reverse md:flex-row max-w-8xl mx-auto mb-16 max-sm:mb-4">
        <div className="w-full md:w-1/2 py-8 max-sm:pt-3 md:pl-16 max-sm:mt-0 md:mt-0 mt-8 md:px-0 px-8 max-sm:px-2">
          <p className="hg:text-4xl md:text-2xl lg:text-3xl max-sm:text-3xl max-sm:mb-12 text-4xl md:mb-0 mb-40 font-bold">
            File Service
          </p>
          <p className="relative top-1/2 text-2xl max-sm:text-base md:pr-8">
            Decentralized file storage, permanently. Upload and share files to
            your Mask friends on top of Arweave Network.
          </p>
        </div>
        <StaticImage
          alt=""
          src={"../images/FileService.png"}
          className="w-full md:w-1/2 noise-img"
        />
      </div>
      {/* #endregion */}

      {/* #region Transak image */}
      <div className="md:w-5/6 w-11/12 flex flex-col md:flex-row max-w-8xl mx-auto mb-16 max-sm:mb-4">
        <StaticImage
          alt=""
          src={"../images/Transak.png"}
          className="w-full md:w-1/2 noise-img"
        />
        <div className="w-full md:w-1/2 py-8 max-sm:pt-3 md:pl-16 max-sm:mt-0 md:mt-0 mt-8 md:px-0 px-8 max-sm:px-2">
          <p className="hg:text-4xl md:text-2xl lg:text-3xl max-sm:text-3xl max-sm:mb-12 text-4xl md:mb-0 mb-40 font-bold">
            Transak
          </p>
          <p className="relative top-1/2 text-2xl max-sm:text-base md:pr-8">
            Fiat On-Ramp Aggregator on Twitter. Buy crypto in 60+ countries with
            Transak support.
          </p>
        </div>
      </div>
      {/* #endregion */}

      {/* #region Transak image */}
      <div className="md:w-5/6 w-11/12 flex flex-col-reverse md:flex-row max-w-8xl mx-auto mb-16 max-sm:mb-4">
        <div className="w-full md:w-1/2 py-8 max-sm:pt-3 md:pl-16 max-sm:mt-0 md:mt-0 mt-8 md:px-0 px-8 max-sm:px-2">
          <p className="hg:text-4xl md:text-2xl lg:text-3xl max-sm:text-3xl max-sm:mb-12 text-4xl md:mb-0 mb-40 font-bold">
            Markets
          </p>
          <p className="relative top-1/2 text-2xl max-sm:text-base md:pr-8">
            Display token information, price charts and exchange information
            directly on social media.
          </p>
        </div>
        <StaticImage
          alt=""
          src={"../images/Markets.png"}
          className="w-full md:w-1/2 noise-img"
        />
      </div>
      {/* #endregion */}

      {/* #region NFT image */}
      <div className="md:w-5/6 w-11/12 flex flex-col md:flex-row max-w-8xl mx-auto mb-16 max-sm:mb-4">
        <StaticImage
          alt=""
          src={"../images/NFT.png"}
          className="w-full md:w-1/2 noise-img"
        />
        <div className="w-full md:w-1/2 py-8 max-sm:pt-3 md:pl-16 max-sm:mt-0 md:mt-0 mt-8 md:px-0 px-8 max-sm:px-2">
          <p className="hg:text-4xl md:text-2xl lg:text-3xl max-sm:text-3xl max-sm:mb-12 text-4xl md:mb-0 mb-40 font-bold">
            NFT
          </p>
          <p className="relative top-1/2 text-2xl max-sm:text-base md:pr-8">
            Display specific information of collectibles in Opensea and Rarible,
            make an offer directly on social media.
          </p>
        </div>
      </div>
      {/* #endregion */}

      {/* #region Swap image */}
      <div className="md:w-5/6 w-11/12 flex flex-col-reverse md:flex-row max-w-8xl mx-auto mb-16 max-sm:mb-4">
        <div className="w-full md:w-1/2 py-8 max-sm:pt-3 md:pl-16 max-sm:mt-0 md:mt-0 mt-8 md:px-0 px-8 max-sm:px-2">
          <p className="hg:text-4xl md:text-2xl lg:text-3xl max-sm:text-3xl max-sm:mb-12 text-4xl md:mb-0 mb-40 font-bold">
            Swap
          </p>
          <p className="relative top-1/2 text-2xl max-sm:text-base md:pr-8">
            Purchase tokens through DEX without additional fees and
            restrictions.
          </p>
        </div>
        <StaticImage
          alt=""
          src={"../images/Swap.png"}
          className="w-full md:w-1/2 noise-img"
        />
      </div>

      {/* #endregion */}
      <p className="sm:leading-relaxed sm:text-4xl max-sm:text-2xl max-sm:leading-8 max-sm:mt-2 font-semibold mx-auto text-center w-2/3 mt-8 min-w-280">
        Join the Mask Network Community
      </p>
      <p className="max-sm:text-base text-2xl text-center mt-8 px-6 text-gray-500 w-full mx-auto font-light">
        Mask Network is trusted and supported by an active community of users
        and contributors. Join us!
      </p>
      <div className="flex justify-between w-9/10 md:w-4/5 mx-auto font-semibold text-xl mt-8 md:mt-16 max-sm:text-sm px-2 mb-16 md:mb-44">
        <a
          href="https://github.com/DimensionDev"
          className="flex flex-col items-center w-36 max-sm:w-24"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="" src={githubImage} className="w-24 mb-3 max-sm:w-20" />
          <p>GitHub</p>
        </a>
        <a
          href="https://we.mask.io/"
          className="flex flex-col items-center w-36 max-sm:w-24"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="" src={maskdaoImage} className="w-24 mb-3 max-sm:w-20" />
          <p>MaskDAO</p>
        </a>
        <a
          href="https://snapshot.org/#/masknetwork.eth"
          className="flex flex-col items-center w-36 max-sm:w-24"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="" src={snapshotImage} className="w-24 mb-3 max-sm:w-20" />
          <p className="text-center">Mask Snapshot</p>
        </a>
      </div>
      <div className="bg-blue-50 pb-48 max-sm:pb-4">
        <p className="md:pt-24 py-16 max-sm:pt-6 max-sm:text-2xl text-4xl font-semibold text-center">
          Partner & Supporter
        </p>
        <div className="grid grid-cols-3 gap-x-16 max-sm:gap-x-4 w-10/12 md:grid-cols-5 md:max-w-6xl md:w-11/12 md:gap-x-16 gap-y-8 mx-auto hoverFilter">
          <StaticImage
            alt=""
            src={"../images/partner_binance.png"}
            placeholder="none"
          />
          <StaticImage
            alt=""
            src={"../images/partner_web30.png"}
            placeholder="none"
          />
          <StaticImage
            alt=""
            src={"../images/partner_okex.png"}
            placeholder="none"
          />
          <StaticImage
            alt=""
            src={"../images/partner_hashkey.png"}
            placeholder="none"
          />
          <StaticImage
            alt=""
            src={"../images/partner_maker.png"}
            placeholder="none"
          />
          <StaticImage
            alt=""
            src={"../images/partner_gitcoin.png"}
            placeholder="none"
          />
          <StaticImage
            alt=""
            src={"../images/partner_gun.png"}
            placeholder="none"
          />
          <StaticImage
            alt=""
            src={"../images/partner_arweave.png"}
            placeholder="none"
          />
          <StaticImage
            alt=""
            src={"../images/partner_chainide.png"}
            placeholder="none"
          />
          <StaticImage
            alt=""
            src={"../images/partner_dgc.png"}
            className="md:hidden flex opacity-0"
            placeholder="none"
          />
          <StaticImage
            alt=""
            src={"../images/partner_dgc.png"}
            placeholder="none"
          />
        </div>
      </div>
      <Footer />
      <Cookies />
    </main>
  ) : (
    <div className="h-screen" />
  )
}

function getWindowDimensions(window: any) {
  const { innerWidth } = window
  return innerWidth
}

export default IndexPage
