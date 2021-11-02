import * as React from "react"
import { SEO } from "../components/SEO"
import { Banner } from "../components/Banner"
import { SectionItem } from "../components/SectionItem"
import Layout from "../components/Layout"
import FiatSvg from "../images/fiat.svg"
import NFTSvg from "../images/nft.svg"
import MessageSvg from "../images/messsage.svg"
import ITOSvg from "../images/ito.svg"
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
    title: "Social Marketplaces",
    subtitle: "Buy and sell NFTs directly on social networks, powered by Opensea Initial NFT launches also available",
    children: <NFTSvg/>
  },
  {
    mode: { reverse: false, row: true },
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
        <div className="container mx-auto mt-10">
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
