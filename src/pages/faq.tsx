import * as React from "react";
import { useEffect, useState, useRef } from "react";
import { StaticImage } from "gatsby-plugin-image";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useQueryParam, StringParam } from "use-query-params";
import { SEO } from "../components/SEO";

//assets
import faqSmImage from "../images/faq_sm.png";
import faq1Image from "../images/faq_one.png";
import faq2Image from "../images/faq_two.png";
import faq3Image from "../images/faq_three.png";
import faq4Image from "../images/faq_four.png";
import faq5Image from "../images/faq_five.png";
import faq6Image from "../images/faq_six.png";
import faqOtherImage from "../images/faq_other.png";
import faq7Image from "../images/faq_seven.png";
import faq8Image from "../images/faq_eight.png";
import faq9Image from "../images/faq_nine.png";
import faq10Image from "../images/faq_ten.png";
import faqExpandImage from "../images/faq_expand.png";
import faqShrinkImage from "../images/faq_shrink.png";
import Layout from "../components/Layout";

// markup
const FaqPage = () => {
  const [size, setSize] = useState(0);
  const [type, setType] = useQueryParam("type", StringParam);

  const contents = [
    {
      title: "Getting Started",
      image: faq1Image,
      contents: [
        {
          title: "Where can I use Mask Network ?",
          show: true,
          content:
            "Mask Network is now available on Facebook, Twitter, and Minds.com.<p> We will support more platforms in the future.</p>",
        },
        {
          title: "How to install Mask Network?",
          content:
            "Go to <a class='font-semibold' href='/download-links'>download page</a> to install Mask Network directly. You can also install through the , Google Play Store(beta), or the Apple App Store(beta).",
        },
        {
          title: "How to create a persona?",
          content:
            "Once installed, the Mask extension will guide you to create a persona. Make sure you take a good note of the mnemonic phrases, then you will have a persona ready to connect all the Web 2.0 accounts and Web 3.0 addresses.",
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
            "Mask Network supports price chart by CoinMarketCap, CoinGecko, and UniSwap Info.",
        },
        {
          title: "What is swap and where can I find it?",
          content:
            "<p class='max-sm:mb-2 mb-3'>Mask Network will auto-detect trading pairs, and the “Swap🔥” will be lit. Click “Swap🔥” and you will be able to purchase the token.</p><p class='max-sm:mb-2 mb-3'>The Mask extension now supports:</p><p class='max-sm:mb-2 mb-3'>Ethereum: Uniswap, SushiSwap, 0x, Balancer, DODO</p><p class='max-sm:mb-2 mb-3'>Binance Smart Chain: PancakeSwap, SushiSwap, DODO</p><p class='max-sm:mb-2 mb-3'>Polygon: QuickSwap, SushiSwap, DODO</p><p class='max-sm:mb-2 mb-3'>Arbitrum: UniSwap</p><p class='max-sm:mb-2 mb-3'>xDai: SushiSwap</p>",
        },
        {
          title: "Does Mask Network charge a fee on swap?",
          content: "No, we don’t charge any fee.",
        },
      ],
    },
    {
      title: "File Service",
      image: faq3Image,
      contents: [
        {
          title: "How to use the file service on Mask Network?",
          content: `Please check <a class='font-semibold' href='https://realmasknetwork.notion.site/Use-File-Service-via-Arweave-IPFS-SIA-Swarm-soon-8c8fe1efce5a48b49739a38f4ea8c60f'>this tutorial</<a>.`,
        },
        {
          title: "Who will be able to see the uploaded file?",
          content:
            "You can set & make amend to the recipients of the designated file.",
        },
        {
          title: "Can my friends see the uploaded file?",
          content:
            "Only Mask Network users with specific permission settings can see this file.",
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
            '<p class="max-sm:mb-2 mb-3">ITO (Initial Twitter Offering) is a decentralized asset offering feature, available on the decentralized blockchain network infrastructure Ethereum, Binance Smart Chain, and Polygon. Users could participate in a token launch directly on Twitter; projects could also reward users or build awareness through ITO by offering their existing tokens with a discount, or simply launch a new token.</p><p class="max-sm:mb-2 mb-3">Please follow our <a class="font-semibold" href="http://masknetwork.medium.com/">Blog</a> or <a class="font-semibold" href="https://t.me/maskbook_group">Telegram Channel</a> for more information. After the event starts, find the relevant tweets of ITO and click "Enter" to participate in ITO.</p>',
        },
        {
          title: "How do I prepare for participating in an ITO?",
          content:
            "<p class='max-sm:mb-2 mb-3'>1. Please make sure that you have installed the Mask extension.</p><p class='max-sm:mb-2 mb-3'>2. Create a Mask persona and connect to your Twitter account. Don’t forget to BACK UP!</p> <p class='max-sm:mb-2 mb-3'>3. Import or create a wallet, Mask will automatically generate an Ethereum wallet address for you, and we also support connecting MetaMask and WalletConnect.</p><p class='max-sm:mb-2 mb-3'>4. Prepare enough token for purchase and for sufficient gas fee. The ITO will be encrypted in a Tweet, and the entrance can only be seen when ITO starts.</p>",
        },
        {
          title: "How much can I purchase a single ITO address?",
          content:
            "<p>Each ITO has different rules, and the purchase limit for a single wallet address will be different.</p><p>In the future, Mask Network will support various forms of auctions and joint curves to serve various ITO needs.</p>",
        },
        {
          title: "What should I do if the gas is HIGH?",
          content:
            "The fluctuating gas fee is annoying, we get that. Mask Network provides a multi-chain solution. You may have more options by switching to Binance Smart Chain (BSC), or Polygon (Matic), a Layer-2 solution.",
        },
        {
          title:
            "If an ITO is on BSC/ Polygon, but all my $MASK is on Ethereum, will I be able to meet the snapshot requirement?",
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
          content: `Please check <a class='font-semibold' href='https://realmasknetwork.notion.site/Setting-up-your-wallet-Support-MetaMask-and-WalletConnect-67c1ba13c5664eda9a9240f8e145366a'>this tutorial</<a>.`,
        },
        {
          title: "I already have a wallet…?",
          content:
            "<p class='max-sm:mb-2 mb-3'>You can connect wallets from Mask Network, MetaMask, and Wallet Connect.</p> <p class='max-sm:mb-2 mb-3'>The Mask Network extension currently supports Ethereum, Binance Smart Chain (BSC), Polygon (Matic), Arbitrum, and xDai. We will support more chains in the future.</p>",
        },
      ],
    },
    {
      title: "Lucky Drop",
      image: faq6Image,
      contents: [
        {
          title:
            "How to view the history and detailed information of the received Lucky Drop?",
          content:
            "Click the blue smiley face in the compose window, select “Lucky Drop.” You will be able to see them in the “Past” tab.",
        },
        {
          title:
            "How long is the Lucky Drop validity period? What happens when the lucky drop is expired?",
          content:
            "Lucky Drop is valid for 24 hours. After 24 hours, if parts of the Lucky Drop is unclaimed, then the remaining amount will be refunded.",
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
            "<p class='max-sm:mb-2 mb-3'>Mask Network is part of the BlueSky ecosystem. Bluesky is funded by Jack Dorsey, who proposed the creation of a decentralized social media standard/protocol in December 2019. Mask joined this chat and talked about the issues regarding the centralized social media protocols. We talked to many big names, including Tim Berners Lee, and we will post more progress in the future.</p> <p class='max-sm:mb-2 mb-3'>Check <a class='font-semibold' href='https://hackmd.io/lW-K1-97R_C1wv-bg2rfGw?view'>this article</a> for the technical details about Mask Network.</p>",
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
  ];

  const tutorialContents = [
    {
      title: "Set up & Back up",
      image: faq7Image,
      contents: [
        {
          link: "https://realmasknetwork.notion.site/Installation-set-up-dd3329c7b3124108a8e992829a61a51e",
          text: "🔨 Installation & set up",
        },
        {
          link: "https://realmasknetwork.notion.site/Setting-up-your-wallet-Support-MetaMask-and-WalletConnect-67c1ba13c5664eda9a9240f8e145366a",
          text: "👛 Setting up your wallet (Support MetaMask and WalletConnect)",
        },
        {
          link: "https://realmasknetwork.notion.site/Manually-update-the-Mask-Network-plugin-44fa7bbb3bab48bab4cb6198f54cc126",
          text: "🛠️ Manually update the Mask Network plugin",
        },
        {
          link: "https://realmasknetwork.notion.site/Back-up-your-private-key-5af0c5f5f7f342fe97b66d029159f9ca",
          text: "🗝️ Back up your private key",
        },
      ],
    },
    {
      title: "NFT Features",
      image: faq8Image,
      contents: [
        {
          link: "https://realmasknetwork.notion.site/Set-any-NFT-you-own-as-your-Twitter-Profile-Picture-b60da726f7054f918d72634400479d1d",
          text: "👻 Set any NFT you owned as your Twitter Profile Avatar",
        },
        {
          link: "https://realmasknetwork.notion.site/Display-Your-NFTs-on-your-Twitter-profile-page-5772759b609843309839beb056bead02",
          text: "🖼️ Display Your NFTs on your Twitter profile page",
        },
        {
          link: "https://realmasknetwork.notion.site/Purchase-or-bid-for-NFTs-via-OpenSea-or-Rarible-on-Twitter-c388746f11774ecfa17914c900d3ed97",
          text: "🎨 Purchase or bid for NFTs via OpenSea or Rarible on Twitter",
        },
        {
          link: "https://realmasknetwork.notion.site/See-the-latest-offer-of-a-Tweet-NFT-by-Valuables-Plugin-27424923ee454a4a9b0ed16fc5cb93d0",
          text: "🔓 See the latest offer of a Tweet NFT by Valuables Plugin",
        },
      ],
    },
    {
      title: "Personal Finance / DeFi Features",
      image: faq1Image,
      contents: [
        {
          link: "https://realmasknetwork.notion.site/Trade-cryptos-on-Twitter-via-Uniswap-Sushi-0x-Support-ETH-BSC-Polygon-Arbitrum-f2e7d081ee38487ca1db958393ac1edc",
          text: "💸 Trade cryptos on Twitter via Uniswap, Sushi, 0x (Support ETH, BSC, Polygon, Arbitrum)",
        },
        {
          link: "https://realmasknetwork.notion.site/Check-crypto-info-on-Twitter-Support-CoinGecko-CoinMarketCap-307619336f704ff78063550c7b37a1f6",
          text: "💹 Check crypto info on Twitter (Support  CoinGecko, CoinMarketCap)",
        },
        {
          link: "https://realmasknetwork.notion.site/Invest-in-your-favourite-fund-manager-via-dHEDGE-on-Twitter-ETH-and-Polygon-fb00ff2e626949279c83b59ed9207b9a",
          text: "👨🏼‍🎤 Invest in your favourite fund manager via dHEDGE on Twitter (ETH and Polygon)",
        },
        {
          link: "https://realmasknetwork.notion.site/Cultivate-a-weekly-saving-habit-via-GoodGhosting-on-Twitter-Polygon-only-f94aa38b01404b9c99c7a03935840962",
          text: "🏦 Cultivate a weekly saving habit via GoodGhosting on Twitter (Polygon only)",
        },
        {
          link: "https://realmasknetwork.notion.site/Participate-in-lossless-lottery-via-PoolTogether-on-Twitter-ETH-and-Polygon-377597e14aff441ab645ecba5ea690f1",
          text: "💱 Participate in lossless lottery via PoolTogether on Twitter (ETH and Polygon)",
        },
        {
          link: "https://realmasknetwork.notion.site/Launch-an-ITO-Initial-Twitter-Offering-Support-ETH-BSC-Polygon-Arbitrum-d84c60903f974f4880d2085a13906d55",
          text: "🚀 Launch an ITO (Initial Twitter Offering) (Support ETH, BSC, Polygon, Arbitrum)",
        },
        {
          link: "https://realmasknetwork.notion.site/Participate-in-ITO-Initial-Twitter-Offering-Support-ETH-BSC-Polygon-Arbitrum-05619ffc02204848bcaf6d81b0db589f",
          text: "🙋 Participate in ITO (Initial Twitter Offering) (Support ETH, BSC, Polygon, Arbitrum)",
        },
      ],
    },
    {
      title: "Broader Web 3.0 Features",
      image: faq9Image,
      contents: [
        {
          link: "https://realmasknetwork.notion.site/Send-an-Encrypted-Tweet-b76c1e6ec9fd4e9a8033df51669b4daf",
          text: "🔏 Send an Encrypted Tweet",
        },
        {
          link: "https://realmasknetwork.notion.site/Gift-token-NFTs-to-your-friends-Support-ETH-BSC-and-Polygon-0a71fd421aae4563bd07caa3e2129e5b",
          text: "💰 Gift token/NFTs to your friends (Support ETH, BSC and Polygon)",
        },
        {
          link: "https://realmasknetwork.notion.site/Cast-a-Snapshot-vote-10c08ed9629942dd852d9afbfab61208",
          text: "🗳️ Cast a Snapshot vote",
        },
        {
          link: "https://realmasknetwork.notion.site/Use-File-Service-via-Arweave-IPFS-SIA-Swarm-soon-8c8fe1efce5a48b49739a38f4ea8c60f",
          text: "🗄️ Use File Service via Arweave (IPFS, SIA, Swarm soon)",
        },
        {
          link: "https://realmasknetwork.notion.site/Make-a-quick-Gitcoin-Grant-donation-98ed83784ed4446a8a13fa685c7bddfb",
          text: "🔗 Make a quick Gitcoin Grant donation",
        },
        {
          link: "https://realmasknetwork.notion.site/Claim-tokens-from-ITO-Airdrop-Support-ETH-and-Polygon-c34c70345868455d8a1107244f9e5922",
          text: "🎁 Claim tokens (from ITO/Airdrop) (Support ETH and Polygon)",
        },
      ],
    },
    {
      title: "Switch Network & Cross Chain",
      image: faq10Image,
      contents: [
        {
          link: "https://realmasknetwork.notion.site/MultiChain-Switch-networks-d9ba6324159741d49e816bd96f7867f2",
          text: "⛓️ MultiChain - Switch networks",
        },
        {
          link: "https://realmasknetwork.notion.site/Use-the-Polygon-Bridge-to-convert-from-Ethereum-Mainnet-and-Polygon-295ba2736178444dbea5c1cc8b474489",
          text: "🌉 Use the Polygon Bridge to convert from Ethereum Mainnet between Polygon",
        },
        {
          link: "https://realmasknetwork.notion.site/Convert-MASK-from-ERC20-to-BEP20-04d205700d0246d3a27909eac408b971",
          text: "🌉 Convert $MASK from ERC20 to BEP20",
        },
      ],
    },
  ];

  const [anchor, setAnchor] = useState(contents[0].title);

  useEffect(() => {
    setSize(getWindowDimensions(window));

    function handleResize() {
      setSize(getWindowDimensions(window));
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Layout>
      <SEO title="FAQs — Mask Network" />
      {size ? (
        <>
          {size > 768 ? (
            <div className="w-full h-full flex relative max-h-screen-1/3 min-h-300">
              <div className="flex justify-center items-center bg-gray-200 w-1/2 max-md:absolute max-md:top-0 max-md:left-0 max-md:w-full">
                <p className="h2 w-1/2 max-md:w-full max-md:text-gray-h2">
                  How can we help you?
                </p>
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
                    setType(type === "faq" ? "tutorials" : "faq");
                  }}
                >
                  <span
                    className={
                      type === "faq"
                        ? "text-5xl text-gray-500 md:text-4xl sm:text-3xl font-bold"
                        : "text-6xl font-semibold md:text-4xl sm:text-3xl font-bold"
                    }
                  >
                    Tutorial&nbsp;/&nbsp;
                  </span>
                  <span
                    className={
                      type === "faq"
                        ? "text-6xl font-semibold md:text-4xl sm:text-3xl font-bold"
                        : "text-5xl text-gray-500 md:text-4xl sm:text-3xl font-bold"
                    }
                  >
                    FAQs
                  </span>
                </p>
                {type === "tutorials" || !type ? (
                  <div className="max-w-4xl my-24 max-sm:my-8">
                    <p className="text-4xl mb-8 px-4 md:px-0 max-sm:mb-4 max-sm:px-0 md:text-3xl sm:text-2xl">
                      An (In)Complete Guide to Mask Network (2.0)
                    </p>
                    <p className="text-xl text-gray-500 px-4 md:px-0 max-sm:text-base max-sm:px-0">
                      Mask has dedicated itself to protect data privacy and
                      build the best bridge between Web 2.0 and Web 3.0. Through
                      our browser extension, we have introduced an ecosystem of
                      30+ popular Web 3.0 dApps / Features that works seamlessly
                      on top of existing Web 2.0 sites like Twitter and
                      Facebook.
                    </p>
                  </div>
                ) : null}
                {type === "tutorials" || !type
                  ? tutorialContents.map((x, i) => (
                      <div key={i.toString()} className="w-full">
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
              {type === "faq" ? (
                <div>
                  <aside className="sticky top-16 flex sm:hidden flex-col">
                    {contents.map((x, i) => (
                      <Anchor
                        title={x.title}
                        i={i.toString()}
                        current={anchor}
                        action={() => setAnchor(x.title)}
                      />
                    ))}
                  </aside>
                </div>
              ) : null}
            </div>
          </div>
        </>
      ) : (
        <div className="h-screen" />
      )}
    </Layout>
  );
};

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
  );
}

function FaqTopic(props: any) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref) return;
    if (!ref.current) return;

    let observer = new IntersectionObserver(
      (changes) => {
        if (!ref) return;
        if (!ref.current) return;
        if (!changes[0]) return;

        if (changes[0].isIntersecting) {
          // @ts-ignore
          props.action(ref.current.textContent!);
        }
      },
      {
        root: document,
        rootMargin: "0px",
        threshold: 1.0,
      }
    );

    observer.observe(ref.current!);
  }, [ref]);

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
  );
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
  );
}

function FaqContent(props: any) {
  const [show, setShow] = useState(Boolean(props.show));

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
        <h5 className="font-bold">{props.title}</h5>
      </p>
      {show ? (
        <p
          className="text-gray-500 text-xl md:text-base sm:text-sm relative left-8 max-sm:left-7 max-xsm:left-6 w-5/6 animate__animated animate__fadeIn"
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      ) : null}
    </div>
  );
}

function getWindowDimensions(window: any) {
  const { innerWidth } = window;
  return innerWidth;
}

export default FaqPage;
