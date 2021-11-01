import * as React from "react"
import { memo, PropsWithChildren, useEffect, useState } from "react"
import { Link } from "gatsby"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import { Drawer, List } from "@mui/material"
// assets
import LogoBlueImage from "../images/logo_blue.svg"
import { GetMaskButton } from "./GetMaskButton"

interface MenuLinkProps extends PropsWithChildren<{}>{
  open: boolean
  to: string
}

interface MenuProps {
  open: boolean
}


const MenuLink = memo<MenuLinkProps>(({ open , to, children }) => {
 return (
   <Link to={to} className="menu-link relative font-medium" activeClassName={"menu-link-active"}>
     {children}
   </Link>
 )
})

const Menu = ({ open }: MenuProps) => {
  return (
    <div className="flex flex-col md:flex-row">
      <MenuLink open={open} to={"/"}>Home</MenuLink>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://news.mask.io/"
        className="menu-link"
      >
        News
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://we.mask.io/"
        className="menu-link"
      >
        Community
      </a>
      <MenuLink
        to="/faq"
        open={open}
      >
        Help
      </MenuLink>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://kan-1.gitbook.io/mask-network/plugin-system/mask-plugin"
        className="menu-link"
      >
        Docs
      </a>
      <MenuLink to="/about" open={open}>
        About
      </MenuLink>
    </div>
  )
}


export const Navbar = () => {
  const [path, setPath] = useState("")
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setPath(window.location.pathname)
  }, [])

  return (
    <>
      <div className="flex">
        {open ? (
          <CloseIcon
            onClick={() => setOpen(false)}
            className={
                "text-black cursor-pointer flex md:hidden"
            }
          />
        ) : null}
      </div>
      <nav
        className={"flex items-center px-6 justify-between w-full h-20 z-10"}
      >
        <Link to="/">
          <LogoBlueImage className="w-1/6 max-w-nav-logo min-w-nav-logo" />
        </Link>
        <div
          className={ "items-center hg:w-2/5 justify-between min-w-nav-links antialiased text-xl h-full md:flex hidden "} >
              <Menu open={open} />
        </div>
        <div>
          <GetMaskButton size={'small'} />

          {!open ? (
            <MenuIcon
              onClick={() => setOpen(true)}
              className={"text-black cursor-pointer flex md:hidden transform scale-y-150" } />
          ) : null}
        </div>
        {open ? (
          <Drawer open={open} onClose={() => setOpen(false)}>
            <List className="w-72 flex flex-col px-4 pt-8 text-xl bg-gray-100 h-full">
              <p className="text-lg text-gray-400 mb-5">
                Welcome to Mask Network
              </p>
              <Menu open={open} />
            </List>
          </Drawer>
        ) : null}
      </nav>
    </>
  )
}
