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
    link: "https://realmasknetwork.notion.site/Send-an-Encrypted-Tweet-b76c1e6ec9fd4e9a8033df51669b4daf",
  },
  {
    mode: { reverse: false, row: false },
    title: "ITO (Initial Twitter Offering)",
    subtitle: "Launch decentralized asset freely and participate in token launch directly on Twitter.",
    url: ITOSvg,
    link: "https://realmasknetwork.notion.site/Participate-in-ITO-Initial-Twitter-Offering-Support-ETH-BSC-Polygon-Arbitrum-05619ffc02204848bcaf6d81b0db589f"
  },
  {
    mode: { reverse: false, row: false },
    title: "Social Trading",
    subtitle: "Pop-up trading widget that allows you to instantly view prices of the hottest Crypto/Stock and trade. Can also invest in the best performing managers.",
    url: MarketSvg,
    link: "https://realmasknetwork.notion.site/Trade-cryptos-on-Twitter-via-Uniswap-Sushi-0x-Support-ETH-BSC-Polygon-Arbitrum-f2e7d081ee38487ca1db958393ac1edc"
  },
  {
    mode: { reverse: false, row: false },
    title: "Verifiable NFT Avatars",
    subtitle: "Display your NFT avatars, verifiable on chain.",
    url: AvatarSvg,
    link: "https://realmasknetwork.notion.site/Set-any-NFT-you-own-as-your-Twitter-Profile-Picture-b60da726f7054f918d72634400479d1d"
  },
  {
    mode: { reverse: false, row: false },
    title: "Web3 Profile",
    subtitle: "Aggregate all your digital footprint, including your writing history, NFT collection, POAPs, donation records, etc all in your own profile.",
    url: Footprint,
    link: "https://realmasknetwork.notion.site/Display-Your-NFTs-on-your-Twitter-profile-page-5772759b609843309839beb056bead02"
  },
  {
    mode: { reverse: false, row: true },
    title: "Social Marketplaces",
    subtitle: `Buy and sell NFTs directly on social networks, powered by Opensea. \nInitial NFT launches also available.`,
    url: NFTSvg,
    link: "https://realmasknetwork.notion.site/Purchase-or-bid-for-NFTs-via-OpenSea-or-Rarible-on-Twitter-c388746f11774ecfa17914c900d3ed97"
  },
  {
    mode: { reverse: true, row: true },
    title: "Giveaway",
    subtitle: "Gift crypto or NFTs to any users, first come, first served.",
    url: RedPacketSvg,
    link: "https://realmasknetwork.notion.site/Gift-token-NFTs-to-your-friends-Support-ETH-BSC-and-Polygon-0a71fd421aae4563bd07caa3e2129e5b"
  },
  {
    mode: { reverse: false, row: true },
    title: "File Service",
    subtitle: "Decentralized file storage, permanently. Upload and share files to your Mask friends on top of Arweave Network.",
    url: FileSvg,
    link: "https://realmasknetwork.notion.site/Use-File-Service-via-Arweave-IPFS-SIA-Swarm-soon-8c8fe1efce5a48b49739a38f4ea8c60f"
  },
  {
    mode: { reverse: true, row: true },
    title: "Fiat On-Ramp",
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
