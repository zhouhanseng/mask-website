import * as React from "react";
import Layout from "../components/Layout";
import ArrowDownImg from "../images/outsvg/arrow_down.svg";
import DownloadTestFlightImg from "../images/download_testflight.png";
import DownloadMaskImg from "../images/download_mask.png";
import AcceptImg from "../images/accept.png";
import InstallImg from "../images/install.png";
import OpenImg from "../images/open.png";
import { SEO } from "../components/SEO";

const StepClassName = "text-blue-mask text-2xl font-bold mt-12 mb-4";
const ArrowDownClassName = "mx-2";
const BtnGuideTextClassName =
  "flex items-center justify-center text-base font-bold";
const InfoClassName = "max-w-infoMax text-center mt-10 mx-auto";
const ImgContainer = "max-w-imgMax mx-auto";

const Step1Render = () => {
  return (
    <div>
      <div className={StepClassName}>Step 1</div>
      <div className={BtnGuideTextClassName}>
        Click to download TestFlight
        <img src={ArrowDownImg} alt="arrD" className={ArrowDownClassName} />
      </div>
      <a
        href="https://apps.apple.com/us/app/testflight/id899247664?l=zh"
        target="_blank"
        className="flex justify-center"
        rel="noreferrer"
      >
        <img style={{ width: "50%" }} src={DownloadTestFlightImg} alt="" />
      </a>
      <div className={InfoClassName}>
        If you already have TestFlight, please scroll down to Step 2
      </div>
    </div>
  );
};
const Step2Render = () => {
  return (
    <div>
      <div className={StepClassName}>Step 2</div>
      <div className={BtnGuideTextClassName}>
        Click to download Mask Network
        <img src={ArrowDownImg} alt="arrD" className={ArrowDownClassName} />
      </div>
      <a
        href="https://testflight.apple.com/join/PYomz4pJ"
        target="_blank"
        className="flex justify-center "
        rel="noreferrer"
      >
        <img style={{ width: "50%" }} src={DownloadMaskImg} alt="" />
      </a>
      <div className={InfoClassName}>
        In TestFlight, click the “<strong>Accept</strong>” button and then the "
        <strong>Install</strong>" button
      </div>
      <div className={ImgContainer}>
        <img src={AcceptImg} alt="" />
      </div>
      <div className={ImgContainer}>
        <img src={InstallImg} alt="" />
      </div>
    </div>
  );
};

const Step3Render = () => {
  return (
    <div>
      <div className={StepClassName}>Step 3</div>

      <div className={InfoClassName}>
        After installation, click the "<strong>open</strong>" button and you can
        use it normally
      </div>
      <div className={ImgContainer}>
        <img src={OpenImg} alt="" />
      </div>
    </div>
  );
};
const TestFlightDocPage = () => {
  return (
    <Layout>
      <SEO title="TestFlight - Mask Network" />
      <div className="flex-col text-center items-center justify-center">
        {Step1Render()}
        {Step2Render()}
        {Step3Render()}
      </div>
    </Layout>
  );
};

export default TestFlightDocPage;
