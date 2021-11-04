import * as React from "react"
import { SEO } from "../components/SEO"
import { Banner } from "../components/Banner"
import { SectionItem } from "../components/SectionItem"
import Layout from "../components/Layout"
import FiatSvg from "../images/outsvg/fiat.svg"
import NFTSvg from "../images/outsvg/nft.svg"
import MessageSvg from "../images/outsvg/message.svg"
import ITOSvg from "../images/outsvg/ito.svg"
import FileSvg from "../images/outsvg/file.svg"
import RedPacketSvg from "../images/outsvg/red_packet.svg"
import Footprint from "../images/outsvg/footprint.svg"
import MarketSvg from "../images/outsvg/market.svg"
import AvatarSvg from "../images/outsvg/avatar.svg"

import { JoinCommunity } from "../components/JoinCommunity"
import { BrowserExtension } from "../components/BrowserExtension"
import { Partner } from "../components/Partner"
import { Background } from "../components/Background"

const sectionConfig = [
  {
    mode: { reverse: false, row: false },
    title: "Encryption & Unlock",
    subtitle: "Encrypt or set access criteria for your unique content, share only with your target audience",
    url: MessageSvg
  },
  {
    mode: { reverse: false, row: false },
    title: "ITO (Initial Twitter Offering)",
    subtitle: "Launch decentralized asset freely and participate in token launch directly on Twitter",
    url: ITOSvg
  },
  {
    mode: { reverse: false, row: false },
    title: "Social Trading",
    subtitle: "Pop-up trading widget that allows you to instantly view prices of the hottest Crypto/Stock and trade. Can also invest in the best performing  managers.",
    url: MarketSvg
  },
  {
    mode: { reverse: false, row: false },
    title: "Verifiable NFT Avatars",
    subtitle: "Pop-up trading widget that allows you to instantly view prices of the hottest Crypto/Stock and trade. Can also invest in the best performing  managers.",
    url: AvatarSvg
  },
  {
    mode: { reverse: false, row: false },
    title: "Digital Footprint Aggregation",
    subtitle: "Aggregate all your digital footprint, including your writing history, NFT collection, POAPs, donation records, etc all in your own profile",
    url: Footprint
  },
  {
    mode: { reverse: false, row: true },
    title: "Social Marketplaces",
    subtitle: `Buy and sell NFTs directly on social networks, powered by Opensea. \nInitial NFT launches also available.`,
    url: NFTSvg
  },
  {
    mode: { reverse: true, row: true },
    title: "Giveaway",
    subtitle: "Gift crypto or NFTs to any users, first come first serve.",
    url: RedPacketSvg
  },
  {
    mode: { reverse: false, row: true },
    title: "File Service",
    subtitle: "Decentralized file storage, permanently. Upload and share files to your Mask friends on top of Arweave Network",
    url: FileSvg
  },
  {
    mode: { reverse: true, row: true },
    title: "Fiat On-ramp",
    subtitle: "Fiat On-Ramp Aggregator on Twitter. Buy crypto in 60+ countries with Transak support.",
    url: FiatSvg
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
              <SectionItem {...x} key={x.title} />
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
