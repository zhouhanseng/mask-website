import * as React from "react";
import { useEffect, useState } from "react";
import { SEO } from "../components/SEO";
import { StaticImage } from "gatsby-plugin-image";

//assets
import chromeImage from "../images/chrome.png";
import firefoxImage from "../images/firefox.png";
import mobileAppImage from "../images/mobile_side_app.png";
import fireflyDownloadImage from "../images/firefly_download.png";
import operaImage from "../images/opera.svg";
import apkImage from "../images/apk.png";
import Layout from "../components/Layout";
import buryPointTrigger from "../utils/gtag";

// markup
const DownloadPage = () => {
  const [os, setOs] = useState("");
  const [showAll, setShowAll] = useState(false);
  useEffect(() => {
    // @ts-ignore
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/android/i.test(userAgent)) {
      setOs("Android");
    } else if (/iPad|iPhone|iPod/.test(userAgent)) {
      setOs("iOS");
    } else {
      setOs("Other");
    }
  }, []);
  const handleIosTFClick = () => {
    const CallApp = require("callapp-lib");
    const newHref = window.location.href.replace("download-links", "tf-docs");
    if (typeof window !== undefined) {
      if (os === "iOS") {
        const options = {
          scheme: {
            protocol: "itms-beta",
          },
          appstore: newHref,
          fallback: newHref,
          timeout: 500,
        };
        const callLib = new CallApp(options);
        callLib.open({
          path: "testflight.apple.com/join/PYomz4pJ",
        });
      } else {
        window.location.href = newHref;
      }
    }
  };
  return os ? (
    <Layout>
      <SEO title="Download Links - Mask Network" />
      {os === "Other" || showAll ? (
        <div className="mt-16 sm:mt-0 w-full max-sm:my-8">
          <div className="flex flex-col items-center text-center px-4 sm:hidden">
            <p className="h2 mb-4">Install Mask Network on Your Devices</p>
            <p className="text-2xl max-sm:text-xl max-sm:font-light hg:mb-24 md:mb-16 mb-8">
              Enjoy the Web 3.0 world with Mask Network
            </p>
            <StaticImage
              quality={90}
              alt=""
              src="../images/download.png"
              placeholder="none"
              className="max-w-5xl w-10/12"
            />
            <div className="max-w-4xl w-10/12 flex justify-between max-sm:flex-col my-16">
              {[
                {
                  name: "Chrome / Edge",
                  image: chromeImage,
                  text: "Chrome Web Store",
                  link: "https://chrome.google.com/webstore/detail/mask-network/jkoeaghipilijlahjplgbfiocjhldnap",
                  type: "ChromeWebStore",
                },
                {
                  name: "Opera",
                  image: operaImage,
                  text: "ADD-ONS",
                  link: "https://addons.opera.com/en/extensions/details/maskbook/",
                  type: "Add_ons",
                },
                {
                  name: "Firefox",
                  image: firefoxImage,
                  text: "ADD-ONS",
                  link: "https://addons.mozilla.org/en-US/firefox/addon/maskbook",
                  type: "Add_ons",
                },
              ].map((value, i) => (
                <div
                  className={
                    (i === 0 ? "mb-24" : "") +
                    " flex flex-col justify-between h-72 items-center md:w-64"
                  }
                >
                  <p className="text-4xl font-light">{value.name}</p>
                  <p className="text-xl font-medium">Status: Stable</p>
                  <img alt="" src={value.image} className="w-20 h-20" />
                  <a
                    href={value.link}
                    onClick={() => buryPointTrigger("event", value.type)}
                    className="bg-black-main text-white py-3 text-center w-download-badge rounded-md cursor-pointer"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {value.text}
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-blue-mask w-full py-[114px]">
            <div className="mx-auto flex container md:justify-between flex-row sm:flex-col-reverse items-center justify-between px-16 max-md:px-8">
              <div className="h-48 max-sm:h-36 max-sm:px-4 w-full text-white flex flex-col justify-between sm:items-center md:mt-0 mt-20 min-lg:mt-0">
                <p className="text-[48px] font-bold max-sm:text-center mb-4 sm:text-[32px] sm:text-center">
                  Mobile App Firefly
                </p>
                <p className="w-full font-poppins md:max-w-xss font-bold text-[24px] sm:text-sm leading-tight sm:text-center mb-14">
                  WEB3 SOCIAL AGGRTGATOR​
                </p>
                <div
                  className="flex border-2 border-white rounded-[12px] w-[206px] p-[10px] bg-black-main gap-[12px] justify-center items-center cursor-pointer"
                  onClick={() => {
                    window.open("https://firefly.land/", "_blank");
                  }}
                >
                  <img
                    alt="a download icon"
                    src={fireflyDownloadImage}
                    className="w-[30px] h-[40px]"
                  />
                  <div className="flex text-[20px] font-medium font-poppin text-white font-poppins">
                    Get Firefly
                  </div>
                </div>
              </div>
              <img
                alt="a mobile phone with firefly installed"
                src={mobileAppImage}
                className="max-w-1/3 max-md:max-w-1/2"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full bg-blue-mask flex flex-col items-center">
          <p className="text-white text-[32px] font-bold h2 text-center pt-28 max-sm:pt-12 mb-7 px-4">
            Install Firefly on Your Devices!
          </p>
          <p className="text-white font-Manrope font-normal text-[20px] items-center px-6 text-center mb-7">
            WEB3 SOCIAL AGGRTGATOR​
          </p>
          <div className="mb-16 flex-col items-center gap-8">
            <a
              href={
                os === "iOS"
                  ? "https://mask.io/links/?ios-app-store"
                  : "https://play.google.com/store/apps/details?id=com.dimension.maskbook"
              }
              className="block"
            >
              <div className="flex border-2 border-white rounded-[12px] w-[206px] p-[10px] bg-black-main gap-[12px] justify-center items-center cursor-pointer">
                <img
                  alt="a download icon"
                  src={fireflyDownloadImage}
                  className="w-[30px] h-[40px]"
                />
                <div className="flex text-[20px] font-medium text-white font-poppins">
                  Get Firefly
                </div>
              </div>
            </a>
          </div>

          <div className="w-full px-6">
            <StaticImage
              alt=""
              src={"../images/mobile_side_app.png"}
              placeholder="blurred"
              className="w-full"
            />
          </div>
          <p
            onClick={() => {
              document.body.scrollTop = document.documentElement.scrollTop = 0;
              setShowAll(true);
            }}
            className="text-white text-[18px] font-normal text-center underline mb-24 max-sm:mb-14 sm:mt-16 font-Roboto"
          >
            Download for another operating system
          </p>
        </div>
      )}
    </Layout>
  ) : null;
};

export default DownloadPage;
