import * as React from "react";
import { useEffect, useState } from "react";
import { Link } from "gatsby";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Drawer, List } from "@mui/material";
// assets
import logoBlueImage from "../images/logo_blue.png";
import logoWhiteImage from "../images/logo.png";

export const Navbar = () => {
  const [path, setPath] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setPath(window.location.pathname);
  }, []);

  return (
    <nav
      className={
        (["/", "/mask-website", "/mask-website/"].includes(path)
          ? "absolute"
          : "bg-gray-50 sticky top-0") +
        " flex items-center px-6 justify-between w-full h-20 z-10"
      }
    >
      <img
        alt=""
        src={
          ["/", "/mask-website", "/mask-website/"].includes(path)
            ? logoWhiteImage
            : logoBlueImage
        }
        className="w-1/6 max-w-nav-logo min-w-nav-logo"
      />
      <div
        className={
          (["/", "/mask-website", "/mask-website/"].includes(path)
            ? "text-white"
            : "text-gray-900") +
          " items-center w-2/5 justify-between min-w-nav-links antialiased font-extralight text-xl h-full" +
          // Response: show nav links > 768px
          " md:flex hidden"
        }
      >
        <Link
          to="/"
          className={
            (["/", "/mask-website", "/mask-website/"].includes(path)
              ? "font-bold"
              : "") + " flex items-center font-extralight"
          }
        >
          Home
        </Link>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://news.mask.io/"
          className="flex items-center font-extralight"
        >
          News
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://we.mask.io/"
          className="flex items-center font-extralight"
        >
          Community
        </a>
        <Link
          to="/faq"
          className={
            ([
              "/faq",
              "/faq/",
              "/mask-website/faq",
              "/mask-website/faq/",
            ].includes(path)
              ? "text-blue-600 font-bold border-b-2 border-blue-600 transform translate-y-px"
              : "") + " px-2 flex items-center h-full font-extralight"
          }
        >
          Help
        </Link>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://kan-1.gitbook.io/mask-network/plugin-system/mask-plugin"
          className="flex items-center font-extralight"
        >
          Docs
        </a>
        <Link
          to="/about"
          className={
            ([
              "/about",
              "/about/",
              "/mask-website/about",
              "/mask-website/about/",
            ].includes(path)
              ? "text-blue-600 font-bold border-b-2 border-blue-600 transform translate-y-px"
              : "") + " px-2 flex items-center h-full font-extralight"
          }
        >
          About
        </Link>
      </div>
      <div>
        {[
          "/download",
          "/download/",
          "/mask-website/download",
          "/mask-website/download/",
        ].includes(path) ? null : (
          <Link
            to="/download"
            className={
              (["/", "/mask-website", "/mask-website/"].includes(path)
                ? "text-white border-white"
                : "text-white border-blue-600 bg-blue-600") +
              " px-6 py-2 border-solid border rounded-full cursor-pointer" +
              // Response: show download button > 768px
              " md:flex hidden"
            }
          >
            Use Mask
          </Link>
        )}

        {!open ? (
          <MenuIcon
            onClick={() => setOpen(true)}
            className={
              (["/", "/mask-website", "/mask-website/"].includes(path)
                ? "text-white"
                : "text-black") +
              " cursor-pointer flex md:hidden transform scale-y-150"
            }
          />
        ) : (
          <CloseIcon
            onClick={() => setOpen(true)}
            className={
              (["/", "/mask-website", "/mask-website/"].includes(path)
                ? "text-white"
                : "text-black") + " cursor-pointer flex md:hidden"
            }
          />
        )}
      </div>
      {open ? (
        <Drawer open={open} onClose={() => setOpen(false)}>
          <List className="w-72 flex flex-col px-4 pt-8 text-xl">
            <Link to="/" className="py-4 border-b border-gray-300">
              Home
            </Link>
            <Link
              to="https://news.mask.io/"
              className="py-4 border-b border-gray-300"
            >
              News
            </Link>
            <Link
              to="https://we.mask.io/"
              className="py-4 border-b border-gray-300"
            >
              Community
            </Link>
            <Link to="/faq" className="py-4 border-b border-gray-300">
              Help
            </Link>
            <Link
              to="https://kan-1.gitbook.io/mask-network/plugin-system/mask-plugin"
              className="py-4 border-b border-gray-300"
            >
              Docs
            </Link>
            <Link to="/about" className="py-4 border-b border-gray-300">
              About
            </Link>
            {[
              "/download",
              "/download/",
              "/mask-website/download",
              "/mask-website/download/",
            ].includes(path) ? null : (
              <Link to="/download" className="py-4 border-b border-gray-300">
                Use Mask
              </Link>
            )}
          </List>
        </Drawer>
      ) : null}
    </nav>
  );
};
