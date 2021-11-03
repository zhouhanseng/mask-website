import { Link } from "gatsby"
import * as React from "react"
import { memo } from "react"

interface GetMaskButtonProps {
  size: 'large' | 'small'
}

export const GetMaskButton = memo<GetMaskButtonProps>(({ size }) => {
  const classname = size === 'large' ?
    "inline-flex text-lg w-48 text-white border-blue-600 bg-blue-600 px-6 py-4 text-center font-bold py-2 border-none justify-center border rounded-full cursor-pointer animate__animated animate__fadeInDown"
    : "inline-flex text-sm w-28 text-white border-blue-600 bg-blue-600 px-4 py-3 text-center font-bold py-2 border-none justify-center border rounded-full cursor-pointer"
  return (
    <Link
      to="/download-links"
      className={classname} >
      Get Mask
    </Link>
  )
})