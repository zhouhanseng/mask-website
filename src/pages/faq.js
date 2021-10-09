import * as React from "react";
import { useEffect, useState, useRef } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

//assets
import faqImage from "../images/faq.png";
import faqSmImage from "../images/faq_sm.png";
import faq1Image from "../images/faq_one.png";
import faq2Image from "../images/faq_two.png";
import faq3Image from "../images/faq_three.png";
import faq4Image from "../images/faq_four.png";
import faq5Image from "../images/faq_five.png";
import faq6Image from "../images/faq_six.png";

// markup
const FaqPage = () => {
  const [size, setSize] = useState(0);
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
            "Go to <a class='font-semibold' href='https://mask.io/download'>https://mask.io/download</a> to install Mask Network directly. You can also install through the Chrome Web Store, Google Play Store(beta), or the Apple App Store(beta).",
        },
        {
          title: "How to create a persona?",
          content:
            "Mask Network will automatically remind your own persona since you use for the first time.Just follow the steps! Click “Enter the Dashboard” -> “Personas” -> “Create persona” -> Enter Name -> Click “ Create” -> Choose to connect Twitter or Facebook account -> Mask Network will automatically find your username, confirm and click “Connect” -> Done, remember to “Say Hello to everyone”",
        },
        {
          title: "Explain like I am a nerd.",
          content:
            "Alice encrypts cleartext (M) with a random AES key (K) to get ciphertext (CT) and then securely shares K via ECIES over <a href='https://en.wikipedia.org/wiki/ECC' class='font-semibold'>SECP256K1</a> with Bob using Bob's public key (K.Bob). Alice publishes CT on Facebook and synchronizes K.Bob over GUN. Bob can then retrieve K to decrypt M.",
        },
      ],
    },
    {
      title: "Trade and Swaps",
      image: faq2Image,
      contents: [
        {
          title: "Where does the crypto price info come from?",
          show: true,
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
          show: true,
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
          show: true,
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
          show: true,
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
          show: true,
          content:
            'Click the blue smiley face on the top right corner. ->Click “Enter the Dashboard” - > “Wallets” -> Choose "Activity" -> InBound, You can see an OutBound list, Select the record you need to view.',
        },
        {
          title:
            "How long is the Lucky Drop validity period? What happens when the lucky drop is expired?",
          content:
            'The current Red Packet is valid for 24 hours. After 24 hours, if the Red Packet has a remaining quantity, the remaining cryptocurrency will be refunded. You can find that record in “Dashboard” -> “Wallets” -> Choose "Activity" -> OutBound and click the record to refund.',
        },
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
    <main>
      <Navbar />
      {size ? (
        <>
          {size > 850 ? (
            <div className="w-full flex">
              <div className="hidden md:w-1/2 md:flex justify-center items-center bg-gray-200 hg:text-5xl md:text-4xl">
                <p className="w-4/5">How can we help you?</p>
              </div>
              <img
                alt=""
                src={size > 850 ? faqImage : faqSmImage}
                className="w-full md:w-1/2 h-auto"
              />
            </div>
          ) : (
            <img alt="" src={faqSmImage} className="w-full" />
          )}
          <div className="hg:mt-36 md:mt-24 mt-16 w-full md:mb-32 mb-16">
            <div className="w-full max-w-7xl mx-auto px-5 flex justify-between">
              <div className="w-full max-w-3xl md:pr-8">
                {contents.map((x, i) => (
                  <div key={i.toString()}>
                    <FaqTopic
                      contents={contents}
                      i={i}
                      content={x}
                      action={(title) => setAnchor(title)}
                    />
                  </div>
                ))}
              </div>
              <div>
                <div className="sticky top-28 md:flex hidden flex-col">
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
            </div>
          </div>
        </>
      ) : (
        <div className="h-screen" />
      )}
      <Footer />
    </main>
  );
};

function FaqTopic(props) {
  const ref = useRef();

  useEffect(() => {
    if (!ref.current) return;

    let observer = new IntersectionObserver(
      (changes) => {
        if (!ref.current || !changes[0]) return;

        if (changes[0].isIntersecting) {
          props.action(ref.current.textContent);
        }
      },
      {
        root: document,
        rootMargin: "0px",
        threshold: 1.0,
      }
    );

    observer.observe(ref.current);
  }, []);

  return (
    <>
      <div
        ref={ref}
        className={
          "flex items-center mb-12 max-sm:mb-6 " +
          (props.i === 0 ? "" : "mt-24")
        }
      >
        <img
          alt=""
          src={props.content.image}
          className="w-12 h-12 max-sm:w-9 max-sm:h-9"
        />
        <p
          className="text-4xl max-sm:text-3xl ml-2 font-bold"
          id={props.content.title}
        >
          {props.content.title}
        </p>
      </div>
      <div className="pl-14 max-sm:pl-3">
        {props.content.contents.map((y, k) => (
          <div key={k.toString()}>
            <FaqContent show={y.show} title={y.title} content={y.content} />
          </div>
        ))}
      </div>
    </>
  );
}

function Anchor(props) {
  return (
    <AnchorLink
      offset="100"
      href={"#" + props.title}
      className={
        "py-3 px-4 border-l-4 " +
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

function FaqContent(props) {
  const [show, setShow] = useState(Boolean(props.show));

  return (
    <div className="mb-10 max-sm:mb-6">
      <p
        className="text-2xl max-sm:text-xl mb-4 max-sm:mb-2 cursor-pointer flex items-center"
        onClick={() => setShow(!show)}
      >
        <span
          className={
            (show ? "text-4xl max-sm:text-3xl " : "text-3xl max-sm:text-2xl ") +
            "pr-4 -translate-y-0.5 transform"
          }
        >
          {show ? "-" : "+"}
        </span>
        <span>{props.title}</span>
      </p>
      {show ? (
        <p
          className="text-gray-500 text-xl max-sm:text-sm relative left-8 max-sm:left-7"
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      ) : null}
    </div>
  );
}

function getWindowDimensions(window) {
  const { innerWidth } = window;
  return innerWidth;
}

export default FaqPage;
