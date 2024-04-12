import React from 'react'
import Image from 'next/image'
const Pic = () => {
  return (
    <>
    <div className='pt-11'>
    <Image
    src="/pic.svg"
    width={1920}
    height={221}
    alt="Picture of the author"
    />
    </div>
    </>
  )
}

export default Pic
