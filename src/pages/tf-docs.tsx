import * as React from "react";
import Layout from "../components/Layout";
import ArrowDownImg from "../images/outsvg/arrow_down.svg";
import DownloadTestFlightImg from "../images/download_testflight.png";
import DownloadMaskImg from "../images/download_mask.png";
import AcceptImg from "../images/accept.png";
import InstallImg from "../images/install.png";
import OpenImg from "../images/open.png";
import { SEO } from "../components/SEO";

const StepClassName = "text-blue-mask text-2xl font-bold mt-16 mb-5";
const ArrowDownClassName = "mx-2";
const BtnGuideTextClassName =
  "flex items-center justify-center text-base font-bold mb-1";
const InfoClassName = "max-w-infoMax text-center mt-10 mx-auto";
const ImgContainer = "max-w-imgMax mx-auto my-2";

const Step1Render = () => {
  return (
    <div className="flex flex-col items-center">
      <div className={StepClassName}>Step 1</div>
      <div className={BtnGuideTextClassName}>
        Click to download TestFlight
        <img src={ArrowDownImg} alt="arrD" className={ArrowDownClassName} />
      </div>
      <a
        href="https://apps.apple.com/us/app/testflight/id899247664?l=zh"
        target="_blank"
        rel="noreferrer"
        style={{ width: "200px" }}
      >
        <img width="100%" src={DownloadTestFlightImg} alt="" />
      </a>
      <div className={InfoClassName}>
        If you already have TestFlight, please scroll down to Step 2
      </div>
    </div>
  );
};
const Step2Render = () => {
  return (
    <div className="flex flex-col items-center">
      <div className={StepClassName}>Step 2</div>
      <div className={BtnGuideTextClassName}>
        Click to download Mask Network
        <img src={ArrowDownImg} alt="arrD" className={ArrowDownClassName} />
      </div>
      <a
        href="https://testflight.apple.com/join/PYomz4pJ"
        target="_blank"
        rel="noreferrer"
        style={{ width: "200px" }}
      >
        <img width="100%" src={DownloadMaskImg} alt="" />
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
    <div className="pb-16">
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
      <div className="flex-col text-center items-center justify-center bg-tfBg-main w-full">
        {Step1Render()}
        {Step2Render()}
        {Step3Render()}
      </div>
    </Layout>
  );
};

export default TestFlightDocPage;
