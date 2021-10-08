import * as React from "react";
import { useState, useEffect } from "react";

export function Cookies() {
  const [hidden, setHidden] = useState("true");

  useEffect(() => {
    setHidden(window.localStorage.getItem("accept-cookies") ?? "false");
  }, []);

  return hidden === "true" ? null : (
    <div className="bg-blue-cookies w-full z-30 sticky bottom-0 text-white">
      <div className="mx-auto p-5 md:w-4/6 w-11/12 max-w-8xl flex justify-between items-center">
        <p className="max-w-5xl font-light text-sm pr-4">
          We use cookies to enhance your experience, analyze our traffic, and
          for security and marketing. By visiting our website you agree to our
          use of cookies. *
          <a
            href="https://en.wikipedia.org/wiki/HTTP_cookie"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600"
          >
            Read more about cookies
          </a>
          *
        </p>
        <p
          className="px-4 py-3 bg-blue-mask rounded-md text-sm whitespace-nowrap cursor-pointer"
          onClick={() => {
            window.localStorage.setItem("accept-cookies", "true");
            setHidden("true");
          }}
        >
          I Accept
        </p>
      </div>
    </div>
  );
}
