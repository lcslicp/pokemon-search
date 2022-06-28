import React from 'react'

const Footer = () => {
  return (
    <div className='flex gap-x-4 text-stone text-base font-light border-48 text-right md:mb-2 '>
            <a href="https://www.linkedin.com/in/lcslicp/" target="_blank">linkedin</a>
            <a href="https://github.com/lcslicp" target="_blank">github</a>
            <a href="https://www.behance.net/lcslicp" target="_blank">behance</a>
            <a href="https://dribbble.com/lcslicp" target="_blank" className=' lg:pr-96 lg:mr-24'>dribbble</a>
        <div className=' text-xs lg:-right-96 lg:bottom-6 lg:w-full opacity-50 md:absolute md:-right-48 md:text-right md:w-full md:pl-12 md:-mb-4'>
            Designed and Developed by Leslie Pino  &middot; 2022
        </div>
    </div>
  )
}

export default Footer