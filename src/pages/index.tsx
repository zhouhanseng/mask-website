import * as React from "react"
import { useEffect, useState } from "react"
import { SEO } from "../components/SEO"
import { StaticImage } from "gatsby-plugin-image"
import { Banner } from "../components/Banner"
import { SectionItem } from "../components/SectionItem"
import Layout from "../components/Layout"
import FiatSvg from "../images/fiat.svg"
import NFTSvg from "../images/nft.svg"
import MessageSvg from "../images/messsage.svg"
import ITOSvg from "../images/ito.svg"
import { JoinCommunity } from "../components/JoinCommunity"
import { BrowserExtension } from "../components/BrowserExtension"

const sectionConfig = [
  {
    mode: { reverse: false, row: false },
    title: "Encryption & Unlock",
    subtitle: "Encrypt or set access criteria for your unique content, share only with your target audience",
    children: <MessageSvg />
  },
  {
    mode: { reverse: false, row: false },
    title: "ITO (Initial Twitter Offering)",
    subtitle: "Launch decentralized asset freely and participate in token launch directly on Twitter",
    children: <ITOSvg />
  },
  {
    mode: { reverse: false, row: true },
    title: "Social Marketplaces",
    subtitle: "Buy and sell NFTs directly on social networks, powered by Opensea Initial NFT launches also available",
    children: <NFTSvg />
  },
  {
    mode: { reverse: false, row: true },
    title: "Fiat On-ramp",
    subtitle: "Fiat On-Ramp Aggregator on Twitter. Buy crypto in 60+ countries with Transak support.",
    children: <FiatSvg />
  }
]

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
    <Layout>
      <SEO title="Mask Network" />
      <Banner />
      <div className="container mx-auto mt-10">
        <BrowserExtension />
      </div>
      {
        sectionConfig.map((x) => {
          return (
            <SectionItem {...x} key={x.title}>
              {x.children}
            </SectionItem>
          )
        })
      }
      <JoinCommunity />
      {/* #endregion */}
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
    </Layout>
  ) : (
    <div className="h-screen" />
  )
}

function getWindowDimensions(window: any) {
  const { innerWidth } = window
  return innerWidth
}

export default IndexPage
