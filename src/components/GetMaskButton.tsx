import { Link } from "gatsby";
import React, { memo } from "react";
import buryPointTrigger from "../utils/gtag";

interface GetMaskButtonProps {
  size: "large" | "small";
}

export const GetMaskButton = memo<GetMaskButtonProps>(({ size }) => {
  const classname =
    size === "large"
      ? "inline-flex text-lg w-48 text-white border-blue-600 bg-blue-600 px-6 py-4 text-center font-bold py-2 border-none justify-center border rounded-full cursor-pointer animate__animated animate__fadeInDown"
      : "inline-flex text-sm w-32 text-white border-blue-600 bg-blue-600 px-4 py-3 text-center font-bold py-2 border-none justify-center border rounded-full cursor-pointer";
  return (
    <Link
      onClick={() => buryPointTrigger("event", "getmask")}
      to="/download-links"
      className={classname}
    >
      Install Mask
    </Link>
  );
});
