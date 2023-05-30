import React from "react";
import { SEO } from "../components/SEO";
import { Banner } from "../components/Banner";
import { SectionItem } from "../components/SectionItem";
import Layout from "../components/Layout";
import FiatSvg from "../images/outsvg/fiat.svg";
import NFTSvg from "../images/outsvg/nft.svg";
import MessageSvg from "../images/outsvg/message.svg";
import ITOSvg from "../images/outsvg/ito.svg";
import FileSvg from "../images/outsvg/file.svg";
import RedPacketSvg from "../images/outsvg/red_packet.svg";
import Footprint from "../images/outsvg/footprint.svg";
import MarketSvg from "../images/outsvg/market.svg";
import AvatarSvg from "../images/outsvg/avatar.svg";

import { JoinCommunity } from "../components/JoinCommunity";
import { BrowserExtension } from "../components/BrowserExtension";
import { Partner } from "../components/Partner";
import { Background } from "../components/Background";

const sectionConfig = [
  {
    mode: { reverse: false, row: false },
    title: "Encrypt Messages For Friends’ Eyes Only",
    subtitle:
      "Use the Mask Extension to hide your content from prying eyes and allow only your target audience to see it.",
    url: MessageSvg,
    link: "https://realmasknetwork.notion.site/Send-an-Encrypted-Tweet-b76c1e6ec9fd4e9a8033df51669b4daf",
  },
  {
    mode: { reverse: false, row: false },
    title: "Launch New Projects Via a ITO (Initial Twitter Offering)",
    subtitle:
      "If you’re launching a new project on the Ethereum, BSC, Polygon, or Arbitrum networks, ITOs are a completely new way of launching decentralised assets fairly.",
    url: ITOSvg,
    link: "https://realmasknetwork.notion.site/Participate-in-ITO-Initial-Twitter-Offering-Support-ETH-BSC-Polygon-Arbitrum-05619ffc02204848bcaf6d81b0db589f",
  },
  {
    mode: { reverse: false, row: false },
    title: "Built In Social Trading Tools",
    subtitle:
      "With integrated widgets on social media platforms, you’ll be able to view the latest prices of crypto assets without leaving the page. Powered by Uniswap, SushiSwap, Ox, and dHEDGE.",
    url: MarketSvg,
    link: "https://realmasknetwork.notion.site/Trade-cryptos-on-Twitter-via-Uniswap-Sushi-0x-Support-ETH-BSC-Polygon-Arbitrum-f2e7d081ee38487ca1db958393ac1edc",
  },
  {
    mode: { reverse: false, row: false },
    title: "Verify NFT Avatars",
    subtitle:
      "Got a BAYC or a Punk? Get your profile pictures verified on-chain. For free.",
    url: AvatarSvg,
    link: "https://realmasknetwork.notion.site/Set-any-NFT-you-own-as-your-Twitter-Profile-Picture-b60da726f7054f918d72634400479d1d",
  },
  {
    mode: { reverse: false, row: false },
    title: "Create Your Own Web 3 Profile",
    subtitle: `Aggregate your digital activities - including NFTs, POAPs, donation records etc - all in one place. Anonymised or not, that’s completely up to you.`,
    url: Footprint,
    link: "https://realmasknetwork.notion.site/Display-Your-NFTs-on-your-Twitter-profile-page-5772759b609843309839beb056bead02",
  },
  {
    mode: { reverse: false, row: true },
    title: "Shop at Social Marketplaces",
    subtitle: `Buy and sell NFTs directly from social media platforms. Powered by OpenSea and other NFT marketplaces.`,
    url: NFTSvg,
    link: "https://realmasknetwork.notion.site/Purchase-or-bid-for-NFTs-via-OpenSea-or-Rarible-on-Twitter-c388746f11774ecfa17914c900d3ed97",
  },
  {
    mode: { reverse: true, row: true },
    title: "Start and Take Part In Giveaways",
    subtitle:
      "Gift NFTs and tokens to users on a first-come-first-served basis.",
    url: RedPacketSvg,
    link: "https://realmasknetwork.notion.site/Gift-token-NFTs-to-your-friends-Support-ETH-BSC-and-Polygon-0a71fd421aae4563bd07caa3e2129e5b",
  },
  {
    mode: { reverse: false, row: true },
    title: "Store Your Files On a Decentralised Network",
    subtitle:
      "Use a next generation Dropbox. Permanent, uncensorable, open to all. \nPowered by Arweave.",
    url: FileSvg,
    link: "https://realmasknetwork.notion.site/Use-File-Service-via-Arweave-IPFS-SIA-Swarm-soon-8c8fe1efce5a48b49739a38f4ea8c60f",
  },
  {
    mode: { reverse: true, row: true },
    title: "On-ramp Fiat easily",
    subtitle:
      "Buy crypto assets directly via credit card or bank transfer in over 60 countries. \nPowered by Transak.",
    url: FiatSvg,
    link: "",
  },
];

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Mask Network" />
      <div className="fixed top-0 left-0" style={{ zIndex: -100 }}>
        <Background />
      </div>
      <Banner />
      <div className="bg-gradient-to-b from-white to-gray-background w-full">
        <div className="container mx-auto mt-16">
          <BrowserExtension />
        </div>
      </div>
      <div className="bg-gray-background w-full">
        {sectionConfig.map((x) => {
          return <SectionItem {...x} key={x.title} />;
        })}
      </div>
      <div className="bg-gradient-to-b from-white to-gray-background w-full">
        <JoinCommunity />
        <Partner />
      </div>
    </Layout>
  );
};

export default IndexPage;
