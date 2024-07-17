import React from 'react'
import './Footer.scss'
import 'remixicon/fonts/remixicon.css'

const Footer = () => {
  return (
    <div className='footer-container flex flex-row justify-center items-center gap-4 text-base sm:text-xl mb:text-2xl lg:text-4xl mb-4 sm:mb-6 md:mb-8 lg:mb-12'>
      <h1 className='font-body mb-4 sm:mb-6 md:mb-8 lg:mb-12'>Designed and developed by </h1>
      <button className='bg-[--contrast] border-0 outline-0 rounded-full px-4 py-2 mb-4 sm:mb-6 md:mb-8 lg:mb-12'>
        <a href="https://github.com/JoshiKartavya">
        <h1 className='bg-transparent text-base font-body'>
          KARTAVYA JOSHI 
          <i className="ri-arrow-right-s-line bg-transparent pl-4"></i>
        </h1>
        </a>
      </button>
    </div>
  )
}

export default Footer
