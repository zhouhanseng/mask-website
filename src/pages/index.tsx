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
    subtitle: "Encrypt or set access criteria for your unique content, share only with your target audience.",
    url: MessageSvg,
    link: "https://realmasknetwork.notion.site/Send-an-Encrypted-Text-365ba60facbd4d069ea6ca72ec16a154",
  },
  {
    mode: { reverse: false, row: false },
    title: "ITO (Initial Twitter Offering)",
    subtitle: "Launch decentralized asset freely and participate in token launch directly on Twitter.",
    url: ITOSvg,
    link: "https://realmasknetwork.notion.site/Participate-in-ITO-Initial-Twitter-Offering-Support-ETH-BSC-and-Polygon-16de37684de54f36923f55158159a11c"
  },
  {
    mode: { reverse: false, row: false },
    title: "Social Trading",
    subtitle: "Pop-up trading widget that allows you to instantly view prices of the hottest Crypto/Stock and trade. Can also invest in the best performing managers.",
    url: MarketSvg,
    link: "https://realmasknetwork.notion.site/Trade-tokens-via-Uniswap-Sushi-0x-etc-on-Twitter-Support-ETH-BSC-and-Polygon-803402915c2c4148a269dc88faf0306e"
  },
  {
    mode: { reverse: false, row: false },
    title: "Verifiable NFT Avatars",
    subtitle: "Display your NFT avatars, verifiable on chain.",
    url: AvatarSvg,
    link: ""
  },
  {
    mode: { reverse: false, row: false },
    title: "Digital Footprint Aggregation",
    subtitle: "Aggregate all your digital footprint, including your writing history, NFT collection, POAPs, donation records, etc all in your own profile.",
    url: Footprint,
    link: "https://realmasknetwork.notion.site/Trade-tokens-via-Uniswap-Sushi-0x-etc-on-Twitter-Support-ETH-BSC-and-Polygon-803402915c2c4148a269dc88faf0306e"
  },
  {
    mode: { reverse: false, row: true },
    title: "Social Marketplaces",
    subtitle: `Buy and sell NFTs directly on social networks, powered by Opensea. \nInitial NFT launches also available.`,
    url: NFTSvg,
    link: ""
  },
  {
    mode: { reverse: true, row: true },
    title: "Giveaway",
    subtitle: "Gift crypto or NFTs to any users, first come first serve.",
    url: RedPacketSvg,
    link: "https://realmasknetwork.notion.site/Send-a-Red-Packet-Support-ETH-BSC-and-Polygon-d5a3c18464474a07bd07581c31cea7f7"
  },
  {
    mode: { reverse: false, row: true },
    title: "File Service",
    subtitle: "Decentralized file storage, permanently. Upload and share files to your Mask friends on top of Arweave Network.",
    url: FileSvg,
    link: "https://realmasknetwork.notion.site/Use-File-Service-via-Arweave-IPFS-SIA-Swarm-soon-e5d60b122fda433e921ddad242b58c05"
  },
  {
    mode: { reverse: true, row: true },
    title: "Fiat On-ramp",
    subtitle: "Fiat On-Ramp Aggregator on Twitter. Buy crypto in 60+ countries with Transak support.",
    url: FiatSvg,
    link: ""
  }
]

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Mask Network"/>
      <div className="fixed top-0 left-0" style={{ zIndex: -100 }}>
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
