import * as React from "react"
import { useEffect, useState, useRef } from "react"
import { StaticImage } from "gatsby-plugin-image"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { useQueryParam, StringParam } from "use-query-params"
import { SEO } from "../components/SEO"

//assets
import faqSmImage from "../images/faq_sm.png"
import faq1Image from "../images/faq_one.png"
import faq2Image from "../images/faq_two.png"
import faq3Image from "../images/faq_three.png"
import faq4Image from "../images/faq_four.png"
import faq5Image from "../images/faq_five.png"
import faq6Image from "../images/faq_six.png"
import faqOtherImage from "../images/faq_other.png"
import faq7Image from "../images/faq_seven.png"
import faq8Image from "../images/faq_eight.png"
import faq9Image from "../images/faq_nine.png"
import faq10Image from "../images/faq_ten.png"
import faqExpandImage from "../images/faq_expand.png"
import faqShrinkImage from "../images/faq_shrink.png"
import Layout from "../components/Layout"

// markup
const FaqPage = () => {
  const [size, setSize] = useState(0)
  const [type, setType] = useQueryParam("type", StringParam)

  const contents = [
    {
      title: "Getting Started",
      image: faq1Image,
      contents: [
        {
          title: "Where can I use Mask Network ?",
          show: true,
          content:
            "Mask Network is now available on Facebook and Twitter. We will support more platforms in the future.",
        },
        {
          title: "How to install Mask Network?",
          content:
            "Go to <a class='font-semibold' href='mask.io/download-links'>mask.io/download-links</a> to install Mask Network directly. You can also install through the Chrome Web Store, Google Play Store(beta), or the Apple App Store(beta).",
        },
        {
          title: "How to create a persona?",
          content:
            "Mask Network will automatically remind your own persona since you use for the first time.Just follow the steps! Click “Enter the Dashboard” -> “Personas” -> “Create persona” -> Enter Name -> Click “ Create” -> Choose to connect Twitter or Facebook account -> Mask Network will automatically find your username, confirm and click “Connect” -> Done, remember to “Say Hello to everyone”",
        },
        {
          title: "Explain like I am a nerd.",
          content:
            "Alice encrypts cleartext (M) with a random AES key (K) to get ciphertext (CT) and then securely shares <span class='underline-dotted'>K</span> via <span class='underline-dotted'>ECIES</span> over <a href='https://en.wikipedia.org/wiki/ECC' class='font-semibold'>SECP256K1</a> with Bob using Bob's public key (K.Bob). Alice publishes <span class='underline-dotted'>CT</span> on Facebook and synchronizes <span class='underline-dotted'>K.Bob</span> over GUN. Bob can then retrieve <span class='underline-dotted'>K</span> to decrypt <span class='underline-dotted'>M</span>.",
        },
      ],
    },
    {
      title: "Trade and Swaps",
      image: faq2Image,
      contents: [
        {
          title: "Where does the crypto price info come from?",
          content:
            "Mask Network support price chart by both CoinMarketCap and CoinGecko. You can change the data source on “Settings.”",
        },
        {
          title: "What is swap and where can I find it?",
          content:
            "<p class='max-sm:mb-2 mb-3'>Mask Network will auto-detect trading pairs, and the “Swap🔥” will be lit. Click “Swap🔥” and you will be able to purchase the token.</p><p class='max-sm:mb-2 mb-3'>The Mask extension now supports:</p><p class='max-sm:mb-2 mb-3'>Ethereum: Uniswap, SushiSwap, 0x, Balancer, DODO</p><p class='max-sm:mb-2 mb-3'>Binance Smart Chain: PancakeSwap, SushiSwap, DODO</p><p class='max-sm:mb-2 mb-3'>Polygon: QuickSwap, SushiSwap, DODO</p>",
        },
        {
          title: "Does Mask Network charge a fee on swap?",
          content:
            "No, the swap on Mask Network is provided by Uniswap, we don’t charge any fee.",
        },
      ],
    },
    {
      title: "File Service",
      image: faq3Image,
      contents: [
        {
          title: "How to use the file service on Mask Network?",
          content:
            "Mask Network is now available on Twitter, Facebook, and Minds.com. We will support more platforms in the future.",
        },
        {
          title: "Who will be able to see the uploaded file?",
          content:
            "You can set & make amend to the recipients of the designated file.",
        },
        {
          title: "Can my friends see the uploaded file?",
          content:
            "Only our users with the proper permission can see this file.",
        },
      ],
    },
    {
      title: "About ITO",
      image: faq4Image,
      contents: [
        {
          title: "What is ITO ( Initial Twitter Offering )?",
          content:
            '<p class="max-sm:mb-2 mb-3">ITO (Initial Twitter Offering) is a decentralized asset offering feature, available on the decentralized blockchain network infrastructure Ethereum, Binance Smart Chain, and Polygon. Users could participate in a token launch directly on Twitter; projects could also reward users or build awareness through ITO by offering their existing tokens with a discount, or simply launch a new token.</p><p class="max-sm:mb-2 mb-3">Please follow our Blog (<a class="font-semibold" href="http://masknetwork.medium.com/">http://masknetwork.medium.com/</a>) or Telegram Channel for more information. After the event starts, find the relevant tweets of ITO and click "Enter" to participate in ITO.</p>',
        },
        {
          title: "How do I prepare for participating in an ITO?",
          content:
            "<p class='max-sm:mb-2 mb-3'>First of all, please make sure that you have installed the Mask extension.</p><p class='max-sm:mb-2 mb-3'>Second, please create a Mask account and bind the Twitter account. Remember to back up the Mask account~</p> <p class='max-sm:mb-2 mb-3'>Third, import or bind a wallet, Mask will automatically generate an Ethereum wallet address for you, and we also support binding MetaMask and WalletConnect.</p><p class='max-sm:mb-2 mb-3'>Fourth, prepare enough token for purchasing, and a sufficient gas fee. We encrypt the ITO page in Tweet, and the entrance can only be seen when ITO starts.</p>",
        },
        {
          title: "How much can I purchase a single ITO address?",
          content:
            "According to the different rules of each ITO, the purchase limit of a single address is different. Mask Network also plans to support various forms of auctions and joint curves to serve various ITO needs.",
        },
        {
          title: "What should I do if gas is very high?",
          content:
            "The fluctuating gas fee is annoying, we get that. Mask Network provides a multi-chain solution. You may have more options by switching to Binance Smart Chain (BSC), or Polygon (Matic), a Layer 2 solution.",
        },
        {
          title:
            "If an ITO is on BSC/Polygon, but my $MASK is on Ethereum, will I be able to meet the snapshot requirement?",
          content:
            "Don’t worry about it, it doesn’t matter which chain your asset is on.",
        },
      ],
    },
    {
      title: "Wallet",
      image: faq5Image,
      contents: [
        {
          title: "How to create a wallet?",
          content:
            "Mask Network will automatically create an Ethereum wallet for you since you create a persona. Or you can create a wallet on the dashboard. Click “Enter the Dashboard” -> “Wallets” -> “Create Wallet” -> Enter Wallet Name -> Choose “ I confirm that i need to create a wallet” -> Click “Import” -> Done!",
        },
        {
          title: "I already have a wallet…?",
          content:
            "<p class='max-sm:mb-2 mb-3'>You can connect wallets from Mask Network, MetaMask, and Wallet Connect.</p> <p class='max-sm:mb-2 mb-3'> The Mask Network extension currently supports Ethereum, Binance Smart Chain (BSC), and Polygon (Matic).</p>",
        },
      ],
    },
    {
      title: "Lucky Drop",
      image: faq6Image,
      contents: [
        {
          title:
            "How to view the history and detail information of the received Lucky Drop?",
          content:
            'Click the blue smiley face on the top right corner. ->Click “Enter the Dashboard” - > “Wallets” -> Choose "Activity" -> InBound, You can see an OutBound list, Select the record you need to view.',
        },
        {
          title:
            "How long is the Lucky Drop validity period? What happens when the lucky drop is expired?",
          content:
            'The current Lucky Drop is valid for 24 hours. After 24 hours, if the Lucky Drop has a remaining quantity, the remaining cryptocurrency will be refunded. You can find that record in “Dashboard” -> “Wallets” -> Choose "Activity" -> OutBound and click the record to refund.',
        },
      ],
    },
    {
      title: "Other",
      image: faqOtherImage,
      contents: [
        {
          title: "Will Mask Network be banned (by Twitter)?",
          content:
            "<p class='max-sm:mb-2 mb-3'>Mask Network is part of the BlueSky ecosystem. Bluesky is funded by Jack Dorsey, who proposed the creation of a decentralized social media standard/protocol in December 2019. Mask joined this chat and talked about the issues regarding the centralized social media protocols. We talked to many big names, including Tim Berners Lee, and we will post more progress in the future.</p> <p class='max-sm:mb-2 mb-3'>Check this article for the technical details about Mask Network.</p>",
        },
        {
          title:
            "My Twitter account is banned :( What happens to my assets now?",
          content:
            "Don’t worry, the assets are still in your wallet. Your wallet address is separate from the Twitter account, therefore as long as you have access to your wallet, your assets will be fine.",
        },
        {
          title: "Where can I trade $MASK?",
          content:
            "You can trade $MASK in Uniswap, SushiSwap, Quickswap, Coinbase, Binance, and other exchanges.",
        },
      ],
    },
  ]

  const tutorialContents = [
    {
      title: "Setup",
      image: faq7Image,
      contents: [
        {
          text: "Installation & set up",
          link: "https://realmasknetwork.notion.site/Installation-set-up-8147f28c734c4038b4cba4b6ba9a772f",
        },
        {
          text: "Setting up your wallet (Support MetaMask and WalletConnect)",
          link: "https://realmasknetwork.notion.site/Setting-up-your-wallet-Support-MetaMask-and-WalletConnect-3f39ee5c74a6403f88d8af3e2a76ec0b",
        },
        {
          text: "Manually update the Mask Network plugin",
          link: "https://realmasknetwork.notion.site/Manually-update-the-Mask-Network-plugin-1e87e9d71ae64e5c8cf0d6bc11f57fb3",
        },
        {
          text: "Back up your private key",
          link: "https://realmasknetwork.notion.site/Back-up-your-private-key-ad5909e3cf8849bdb7e5989d8487e8d3",
        },
      ],
    },
    {
      title: "Features",
      image: faq8Image,
      contents: [
        {
          text: "Send an Encrypted Text",
          link: "https://realmasknetwork.notion.site/Send-an-Encrypted-Text-365ba60facbd4d069ea6ca72ec16a154",
        },
        {
          text: "Purchase NFTs or place a bid  for NFTs  via OpenSea or Rarible on Twitter",
          link: "https://realmasknetwork.notion.site/Purchase-NFTs-or-place-a-bid-for-NFTs-via-OpenSea-or-Rarible-on-Twitter-912fea95f84b49bfb481ef152e1423c1",
        },
        {
          text: "Use File Service via Arweave (IPFS, SIA, Swarm soon)",
          link: "https://realmasknetwork.notion.site/Use-File-Service-via-Arweave-IPFS-SIA-Swarm-soon-e5d60b122fda433e921ddad242b58c05",
        },
        {
          text: "Cast a Snapshot vote",
          link: "https://realmasknetwork.notion.site/Cast-a-Snapshot-vote-4ba42d31d00647d782ff431e8fe986d2",
        },
        {
          text: "Send a Lucky Drop (Support ETH, BSC and Polygon)",
          link: "https://realmasknetwork.notion.site/Send-a-Red-Packet-Support-ETH-BSC-and-Polygon-d5a3c18464474a07bd07581c31cea7f7",
        },
        {
          text: "Launch an ITO (Initial Twitter Offering) (Support ETH, BSC and Polygon)",
          link: "https://realmasknetwork.notion.site/Launch-an-ITO-Initial-Twitter-Offering-Support-ETH-BSC-and-Polygon-eb242a21eaff4c48ba4c1445bd7b9482",
        },
        {
          text: "Participate in ITO (Initial Twitter Offering) (Support ETH, BSC and Polygon)",
          link: "https://realmasknetwork.notion.site/Participate-in-ITO-Initial-Twitter-Offering-Support-ETH-BSC-and-Polygon-16de37684de54f36923f55158159a11c",
        },
        {
          text: "Claim tokens (from ITO/Airdrop) (Support ETH only, Polygon soon)",
          link: "https://realmasknetwork.notion.site/Claim-tokens-from-ITO-Airdrop-Support-ETH-only-Polygon-soon-90ccfe8812ea4e44bb998921b80aaa80",
        },
        {
          text: "Check cryptocurrency info on social media (CoinGecko, CoinMarketCap, Uniswap Info)",
          link: "https://realmasknetwork.notion.site/Check-cryptocurrency-info-on-social-media-CoinGecko-CoinMarketCap-Uniswap-Info-f086e3aa33964f74a84cf2033dfcba9c",
        },
        {
          text: "Display the NFTs you own on your Twitter profile",
          link: "https://realmasknetwork.notion.site/Display-the-NFTs-you-own-on-your-Twitter-profile-1cdcf9569ecc4e98987e05c88e0d2deb",
        },
      ],
    },
    {
      title: "Switch Network & Cross Chain",
      image: faq1Image,
      contents: [
        {
          text: "Switch network between ETH, BSC, and Polygon",
          link: "https://realmasknetwork.notion.site/Switch-network-between-ETH-BSC-and-Polygon-30501828d0db492fb2ee9b9f9822c178",
        },
        {
          text: "Use the Polygon Bridge to convert from Ethereum Mainnet and Polygon",
          link: "https://realmasknetwork.notion.site/Use-the-Polygon-Bridge-to-convert-from-Ethereum-Mainnet-and-Polygon-81c0a8268b064c80aec2ee226871741a",
        },
        {
          text: "Convert $MASK from ERC20 to BEP20",
          link: "https://realmasknetwork.notion.site/Convert-MASK-from-ERC20-to-BEP20-7e982c16c1404d758a3c94b1e5ee9ca2",
        },
      ],
    },
    {
      title: "$Mask Token Related",
      image: faq9Image,
      contents: [
        {
          text: "How to add $MASK liquidity to PancakeSwap",
          link: "https://realmasknetwork.notion.site/How-to-add-MASK-liquidity-to-PancakeSwap-1af175c8a4524e3d8c3ec988480c4674",
        },
      ],
    },
    {
      title: "Third-party Plugins",
      image: faq10Image,
      contents: [
        {
          text: "See the latest offer of a Tweet NFT by Valuables Plugin",
          link: "https://realmasknetwork.notion.site/See-the-latest-offer-of-a-Tweet-NFT-by-Valuables-Plugin-ce284e61c703460096f1b10f8e378685",
        },
        {
          text: "Make a quick Gitcoin Grant donation using the Mask extension",
          link: "https://realmasknetwork.notion.site/Make-a-quick-Gitcoin-Grant-donation-using-the-Mask-extension-89bdc65b8fa34c05a3707792ea05e52f",
        },
        {
          text: "Trade tokens via Uniswap, Sushi, 0x,Balancer, Dodo,etc. on Twitter (Support ETH, BSC and Polygon)",
          link: "https://realmasknetwork.notion.site/Trade-tokens-via-Uniswap-Sushi-0x-etc-on-Twitter-Support-ETH-BSC-and-Polygon-803402915c2c4148a269dc88faf0306e",
        },
        {
          text: "Cultivate a weekly saving habit via GoodGhosting on Twitter (Polygon only)",
          link: "https://realmasknetwork.notion.site/Cultivate-a-weekly-saving-habit-via-GoodGhosting-on-Twitter-Polygon-only-6b80d1ee67b64987aa54be7cb4fd9983",
        },
        {
          text: "Copy your favourite manager's portfolio via dHEDGE on Twitter (ETH and Polygon)",
          link: "https://realmasknetwork.notion.site/Copy-your-favourite-manager-s-portfolio-via-dHEDGE-on-Twitter-ETH-and-Polygon-eab2d7120a094834b24d86b1a54aa1c7",
        },
        {
          text: "Participate in lossless lottery via PoolTogether on Twitter (ETH and Polygon)",
          link: "https://realmasknetwork.notion.site/Participate-in-lossless-lottery-via-PoolTogether-on-Twitter-ETH-and-Polygon-4e4954ffc592452b9c8903babec47959",
        },
      ],
    },
  ]

  const [anchor, setAnchor] = useState(contents[0].title)

  useEffect(() => {
    setSize(getWindowDimensions(window))

    function handleResize() {
      setSize(getWindowDimensions(window))
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <Layout>
      <SEO title="FAQs — Mask Network" />
      {size ? (
        <>
          {size > 768 ? (
            <div className="w-full h-full flex relative max-h-screen-1/3 min-h-300">
              <div className="flex justify-center items-center bg-gray-200 w-1/2 max-md:absolute max-md:top-0 max-md:left-0 max-md:w-full">
                <p className="h2 w-1/2 max-md:w-full max-md:text-gray-h2">How can we help you?</p>
              </div>
              <div className="w-1/2 max-md:w-full overflow-hidden">
                {size > 768 ? (
                  <StaticImage
                    alt=""
                    src={"../images/faq.png"}
                    className="noise-img"
                    placeholder="none"
                  />
                ) : (
                  <StaticImage
                    alt=""
                    src={"../images/faq_sm.png"}
                    className="noise-img"
                    placeholder="none"
                  />
                )}
              </div>
            </div>
          ) : (
            <img alt="" src={faqSmImage} className="w-full" />
          )}
          <div className="w-full md:mb-32 mb-16 min-lg:mt-48 md:mt-24 mt-16">
            <div className="w-full max-w-7xl mx-auto px-5 flex justify-between">
              <div className="w-full md:pr-8 pl-4 md:pl-2 sm:pl-0">
                <p
                  className="cursor-pointer mb-14 max-sm:mb-6"
                  onClick={() => {
                    setType(type === "faq" ? "tutorials" : "faq")
                  }}
                >
                  <span
                    className={
                      type === "faq"
                        ? "text-5xl text-gray-500 md:text-4xl sm:text-3xl font-bold"
                        : "text-6xl font-semibold md:text-4xl sm:text-3xl font-bold"
                    }
                  >
                    Tutorial\
                  </span>
                  <span
                    className={
                      type === "faq"
                        ? "text-6xl font-semibold md:text-4xl sm:text-3xl font-bold"
                        : "text-5xl text-gray-500 md:text-4xl sm:text-3xl font-bold"
                    }
                  >
                    FAQ
                  </span>
                </p>
                {type === "tutorials" || !type ? (
                  <div className="max-w-4xl my-24 max-sm:my-8">
                    <p className="text-4xl mb-8 px-4 md:px-0 max-sm:mb-4 max-sm:px-0 md:text-3xl sm:text-2xl">
                      An (In)Complete Guide to Mask Network
                    </p>
                    <p className="text-xl text-gray-500 px-4 md:px-0 max-sm:text-base max-sm:px-0">
                      Mask Network is the portal to the new internet that
                      connects mainstream Web 2.0 social media with the open,
                      decentralized Web 3.0. Through our browser extension,
                      users could get a glimpse of the decentralized application
                      world. You can easily make borderless cryptocurrency
                      transfers, decentralized file storage and sharing, display
                      and trade NFTs, participate in various DeFi projects, and
                      vote on governance proposals. Do everything in a Web 3.0
                      way, but on top of Web 2.0.
                    </p>
                  </div>
                ) : null}
                {type === "tutorials" || !type
                  ? tutorialContents.map((x, i) => (
                      <div key={i.toString()} className="max-w-3xl">
                        <TutorialTopic i={i} content={x} />
                      </div>
                    ))
                  : null}
                {type === "faq"
                  ? contents.map((x, i) => (
                      <div key={i.toString()} className="max-w-3xl">
                        <FaqTopic
                          contents={contents}
                          i={i}
                          content={x}
                          action={(title: any) => setAnchor(title)}
                        />
                      </div>
                    ))
                  : null}
              </div>
              {type === "faq" || !type ? (
                <div>
                  <div className="sticky top-16 flex sm:hidden flex-col">
                    {contents.map((x, i) => (
                      <Anchor
                        title={x.title}
                        i={i.toString()}
                        current={anchor}
                        action={() => setAnchor(x.title)}
                      />
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </>
      ) : (
        <div className="h-screen" />
      )}
    </Layout>
  )
}

function TutorialTopic(props: any) {
  return (
    <>
      <div
        className={
          "flex items-center mb-8 max-md:mb-4 " +
          (props.i === 0 ? "" : "mt-20 max-sm:mt-6")
        }
      >
        <img
          alt=""
          src={props.content.image}
          className="w-12 h-12 max-sm:w-9 max-sm:h-9"
        />
        <p className="text-4xl ml-2 font-bold md:text-3xl sm:text-2xl">
          {props.content.title}
        </p>
      </div>
      <div className="ml-14 max-sm:ml-2 flex flex-col">
        {props.content.contents.map((x: any) => (
          <a
            href={x.link}
            target="_blank"
            rel="noreferrer"
            className="font-semibold mb-8 max-md:mb-4 text-xl max-sm:text-base max-sm:font-light max-sm:mb-4 max-sm:underline md:text-base sm:text-sm "
          >
            {x.text}
          </a>
        ))}
      </div>
    </>
  )
}

function FaqTopic(props: any) {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref) return
    if (!ref.current) return

    let observer = new IntersectionObserver(
      (changes) => {
        if (!ref) return
        if (!ref.current) return
        if (!changes[0]) return

        if (changes[0].isIntersecting) {
          // @ts-ignore
          props.action(ref.current.textContent!)
        }
      },
      {
        root: document,
        rootMargin: "0px",
        threshold: 1.0,
      }
    )

    observer.observe(ref.current!)
  }, [ref])

  return (
    <>
      <div
        ref={ref}
        className={
          "flex items-center mb-12 max-md:mb-6 " +
          (props.i === 0 ? "" : "mt-24")
        }
      >
        <img
          alt=""
          src={props.content.image}
          className="w-12 h-12 max-sm:w-9 max-sm:h-9"
        />
        <p
          className="text-4xl md:text-3xl sm:text-2xl ml-2 font-bold"
          id={props.content.title}
        >
          {props.content.title}
        </p>
      </div>
      <div className="pl-14 max-sm:pl-3">
        {props.content.contents.map((y: any, k: any) => (
          <div key={k.toString()}>
            <FaqContent show={y.show} title={y.title} content={y.content} />
          </div>
        ))}
      </div>
    </>
  )
}

function Anchor(props: any) {
  return (
    <AnchorLink
      offset="100"
      href={"#" + props.title}
      className={
        "whitespace-nowrap py-3 px-4 border-l-4 " +
        (props.title === props.current
          ? " border-gray-800 text-gray-800"
          : "border-gray-300 text-gray-300 font-light")
      }
      onClick={props.action}
    >
      {props.title}
    </AnchorLink>
  )
}

function FaqContent(props: any) {
  const [show, setShow] = useState(Boolean(props.show))

  return (
    <div className="mb-10 max-sm:mb-6">
      <p
        className="text-2xl md:text-xl sm:text-base mb-4 max-md:mb-2 cursor-pointer flex items-center"
        onClick={() => setShow(!show)}
      >
        <img
          src={!show ? faqExpandImage : faqShrinkImage}
          className="pr-4 w-8 max-md:w-6"
        />
        <span className='font-bold'>{props.title}</span>
      </p>
      {show ? (
        <p
          className="text-gray-500 text-xl md:text-base sm:text-sm relative left-8 max-sm:left-7 max-xsm:left-6 w-5/6"
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      ) : null}
    </div>
  )
}

function getWindowDimensions(window: any) {
  const { innerWidth } = window
  return innerWidth
}

export default FaqPage
