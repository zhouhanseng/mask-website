import * as React from "react"
import { SEO } from "../components/SEO"
import { Banner } from "../components/Banner"
import { SectionItem } from "../components/SectionItem"
import Layout from "../components/Layout"
import FiatSvg from "../images/fiat.svg"
import NFTSvg from "../images/nft.svg"
import MessageSvg from "../images/messsage.svg"
import ITOSvg from "../images/ito.svg"
import FileSvg from "../images/file.svg"
import RedPacketSvg from "../images/red_packet.svg"
import Footprint from "../images/footprint.svg"
import MarketSvg from "../images/market.svg"

import { JoinCommunity } from "../components/JoinCommunity"
import { BrowserExtension } from "../components/BrowserExtension"
import { Partner } from "../components/Partner"
import { Background } from "../components/Background"

const sectionConfig = [
  {
    mode: { reverse: false, row: false },
    title: "Encryption & Unlock",
    subtitle: "Encrypt or set access criteria for your unique content, share only with your target audience",
    children: <MessageSvg/>
  },
  {
    mode: { reverse: false, row: false },
    title: "ITO (Initial Twitter Offering)",
    subtitle: "Launch decentralized asset freely and participate in token launch directly on Twitter",
    children: <ITOSvg/>
  },
  {
    mode: { reverse: false, row: true },
    title: "Social Trading",
    subtitle: "Pop-up trading widget that allows you to instantly view prices of the hottest Crypto/Stock and trade. Can also invest in the best performing  managers.",
    children: <MarketSvg/>
  },
  {
    mode: { reverse: false, row: false },
    title: "Digital Footprint Aggregation",
    subtitle: "Aggregate all your digital footprint, including your writing history, NFT collection, POAPs, donation records ,etc all in your own profile",
    children: <Footprint/>
  },
  {
    mode: { reverse: false, row: true },
    title: "Social Marketplaces",
    subtitle: "Buy and sell NFTs directly on social networks, powered by Opensea Initial NFT launches also available",
    children: <NFTSvg/>
  },
  {
    mode: { reverse: true, row: true },
    title: "Giveaway",
    subtitle: "Gift crypto or NFTs to any users, first come first serve.",
    children: <RedPacketSvg/>
  },
  {
    mode: { reverse: false, row: true },
    title: "File Service",
    subtitle: "Decentralized file storage, permanently. Upload and share files to your Mask friends on top of Arweave Network",
    children: <FileSvg/>
  },
  {
    mode: { reverse: true, row: true },
    title: "Fiat On-ramp",
    subtitle: "Fiat On-Ramp Aggregator on Twitter. Buy crypto in 60+ countries with Transak support.",
    children: <FiatSvg/>
  }
]

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Mask Network"/>
      <div className="fixed top-0 left-0" style={{ zIndex: -1 }}>
        <Background />
      </div>
      <Banner/>
      <div className='bg-gradient-to-b from-white to-gray-background w-full'>
        <div className="container mx-auto mt-16">
          <BrowserExtension/>
        </div>
      </div>
      <div className='bg-gray-background w-full'>
        {
          sectionConfig.map((x) => {
            return (
              <SectionItem {...x} key={x.title}>
                {x.children}
              </SectionItem>
            )
          })
        }
      </div>
      <div className='bg-gradient-to-b from-white to-gray-background w-full'>
        <JoinCommunity/>
        <Partner />
      </div>
    </Layout>
  )
}


export default IndexPage
