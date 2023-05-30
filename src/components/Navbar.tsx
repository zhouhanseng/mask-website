import React, { memo, PropsWithChildren, useState } from "react";
import { Link } from "gatsby";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Drawer, List } from "@mui/material";
// assets
import { GetMaskButton } from "./GetMaskButton";
import { Logo } from "./Logo";

interface MenuLinkProps extends PropsWithChildren<{}> {
  open: boolean;
  to: string;
}

interface MenuProps {
  open: boolean;
}

const MenuLink = memo<MenuLinkProps>(({ open, to, children }) => {
  return (
    <div className="sm:min-w-full md-for-menu:min-w-full">
      <Link
        to={to}
        className="menu-link relative"
        activeClassName={"menu-link-active"}
      >
        {children}
      </Link>
    </div>
  );
});

const Menu = ({ open }: MenuProps) => {
  return (
    <div className="w-full flex sm:flex-col md-for-menu:flex-col items-center justify-center md-for-menu:justify-start self-start h-full">
      <MenuLink open={open} to={"/"}>
        Home
      </MenuLink>
      <div className="sm:min-w-full md-for-menu:min-w-full">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://news.mask.io/"
          className="menu-link"
        >
          News
        </a>
      </div>
      <div className="sm:min-w-full md-for-menu:min-w-full">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://we.mask.io/"
          className="menu-link"
        >
          Community
        </a>
      </div>
      <MenuLink to="/faq" open={open}>
        Help
      </MenuLink>
      <MenuLink to="/about" open={open}>
        About
      </MenuLink>
    </div>
  );
};

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav
        className={
          "flex flex-grow-0 items-center px-6 justify-between w-full h-20 z-10"
        }
      >
        <Link aria-label="home link" to="/" className="w-1/6">
          <Logo />
        </Link>
        <div
          className={
            "flex flex-grow items-center w-2/5 justify-between sm:min-w-nav-links antialiased text-xl h-full sm:flex sm:hidden md-for-menu:hidden"
          }
        >
          <Menu open={open} />
        </div>
        <div className="w-1/6 flex justify-end">
          <div className="md-for-menu:hidden sm:hidden">
            <GetMaskButton size={"small"} />
          </div>

          {!open ? (
            <MenuIcon
              onClick={() => setOpen(true)}
              className={
                "text-black cursor-pointer flex transform scale-y-150 hidden sm:flex md-for-menu:flex"
              }
            />
          ) : null}
        </div>
        {open ? (
          <Drawer
            PaperProps={{
              sx: { width: "100vw", minHeight: "100vh", background: "#F5F9FF" },
            }}
            className="w-full"
            open={open}
            onClose={() => setOpen(false)}
          >
            <div className="w-full h-16 pt-5 px-6">
              <Link to="/" aria-label="home">
                <Logo />
              </Link>
            </div>
            <CloseIcon
              onClick={() => setOpen(false)}
              className={
                "absolute right-4 top-5 text-black cursor-pointer flex hidden md:flex sm:flex"
              }
            />
            <List className="w-full flex flex-col px-4 pt-8 text-xl max-md:px-2 max-md:pt-4">
              <div className="p-10 max-md:p-4">
                <div className="pb-8 pt-4 max-md:pb-4 max-md:pt-2">
                  <h2 className="h2">
                    <p>Your Portal To The New,</p>
                    <p>Open Internet</p>
                  </h2>
                </div>
                <div className="pb-8" onClick={() => setOpen(false)}>
                  <GetMaskButton size={"large"} />
                </div>
                <Menu open={open} />
              </div>
            </List>
          </Drawer>
        ) : null}
      </nav>
    </>
  );
};
