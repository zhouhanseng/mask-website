import * as React from "react";
import { useEffect, useState } from "react";
import { SEO } from "../components/SEO";
import { StaticImage } from "gatsby-plugin-image";

//assets
import chromeImage from "../images/chrome.png";
import firefoxImage from "../images/firefox.png";
import mobileAppImage from "../images/mobile_side_app.png";
import appleStoreImage from "../images/apple_store.png";
import googlePlayImage from "../images/google_play.png";
import testFlightImage from "../images/test_flight.png";
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
  const handleTestFlightClick = async () => {
    switch (os) {
      case "Other":
        window.location.pathname = "/tf-docs/";
        break;
      case "Android":
        break;
      case "iOS":
        try {
          await window.fetch("items-beta://");
          window.open("https://testflight.apple.com/join/PYomz4pJ");
        } catch (e) {
          window.location.pathname = "/tf-docs/";
        }
        break;
      default:
        return;
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
          <div className="bg-blue-mask w-full py-16">
            <div className="container mx-auto flex md:justify-between flex-row sm:flex-col-reverse items-center justify-between px-16 max-md:px-8">
              <div className="h-48 max-sm:h-36 max-sm:px-4 w-full max-w-md text-white flex flex-col justify-between md:mt-0 mt-20 min-lg:mt-0">
                <p className="text-4xl font-bold max-sm:text-center mb-4">
                  Mobile App
                </p>
                <p className="w-full md:max-w-xss md:font-medium font-light text-xl max-sm:text-sm leading-tight max-sm:text-center mb-4">
                  Enjoy the Web 3.0 world with Mask Network
                </p>
                <div className="flex sm:justify-between gap-x-4">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.dimension.maskbook"
                    target="_blank"
                    rel="noreferrer"
                    className="text-center"
                  >
                    <img alt="google" src={googlePlayImage} />
                  </a>
                  <a
                    href="https://mask.io/links/?ios-app-store"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img alt="app" src={appleStoreImage} />
                  </a>
                  {os !== "Android" && (
                    <div
                      className="cursor-pointer"
                      onClick={handleTestFlightClick}
                    >
                      <img src={testFlightImage} alt="testflight" />
                    </div>
                  )}
                </div>
              </div>
              <img
                alt=""
                src={mobileAppImage}
                className="max-w-1/3 max-md:max-w-1/2"
              />
            </div>
          </div>
          <div className="w-full flex py-16 bg-white justify-center items-center">
            <div className="flex flex-col justify-center items-center">
              <img alt="" src={apkImage} className="w-48" />
              <a
                href="https://github.com/DimensionDev/Mask-Android-Release/releases/download/1.34.0/app-release.apk"
                className="bg-black-main rounded-md px-4 py-3 mt-8 text-white"
              >
                Github releases
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full bg-blue-mask flex flex-col items-center">
          <p className="text-white h2 text-center pt-28 max-sm:pt-12 mb-7 px-4">
            Install Mask Network on Your Devices
          </p>
          <p className="text-white text-xl items-center px-6 text-center mb-7">
            Enjoy the Web 3.0 world with Mask Network
          </p>

          <a
            href={
              os === "iOS"
                ? "https://mask.io/links/?ios-app-store"
                : "https://play.google.com/store/apps/details?id=com.dimension.maskbook"
            }
            className="mb-16"
          >
            <img
              alt=""
              src={os === "iOS" ? appleStoreImage : googlePlayImage}
              className="w-download-badge"
            />
          </a>
          <StaticImage
            alt=""
            src={"../images/mobile_side_app.png"}
            placeholder="blurred"
            className="mx-auto px-4 max-md:max-w-1/2"
          />
          <p
            onClick={() => {
              document.body.scrollTop = document.documentElement.scrollTop = 0;
              setShowAll(true);
            }}
            className="px-4 text-white text-lg text-center underline mb-24 max-sm:mb-14 sm:mt-16"
          >
            Download for another operating system
          </p>
        </div>
      )}
    </Layout>
  ) : null;
};

export default DownloadPage;
