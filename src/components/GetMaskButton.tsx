import { Link } from "gatsby"
import * as React from "react"
import { memo } from "react"

interface GetMaskButtonProps {
  size: 'large' | 'small'
}

export const GetMaskButton = memo<GetMaskButtonProps>(({ size }) => {
  const classname = size === 'large' ?
    "text-lg w-60 text-white border-blue-600 bg-blue-600 px-6 py-4 text-center text-lg py-2 border-none justify-center border rounded-full cursor-pointer md:flex hidden"
    : "text-sm w-28 text-white border-blue-600 bg-blue-600 px-4 py-3 text-center text-lg py-2 border-none justify-center border rounded-full cursor-pointer md:flex hidden"
  return (
    <Link
      to="/download-links"
      className={classname} >
      Get Mask
    </Link>
  )
})