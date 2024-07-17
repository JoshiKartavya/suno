import React from 'react'
import EarthCanvas from '../canvas/Earth'
import './Hero.scss'

const Hero = () => {
  return (
    <>
        <div className='hero-container h-max w-full flex flex-col gap-5 md:flex-col lg:flex-row justify-between items-center px-10 py-10 md:py-[2rem] md:px-[3rem]'>
          <div className='hero-left flex flex-col gap-5'>
            <h1 className=' font-display text-2xl md:text-4xl lg:text-6xl bg-transparent'>Feel the New Era of Music</h1>
            <p className='font-body text-1xl md:2xl lg:3xl bg-transparent font-thin'>Stream new hits and classic tunes. Let the music play.</p>
            <a className='' href="#player-container">
            <button className='flex flex-row items-center gap-4 bg-[--contrast] text-[--secondary] font-body px-4 py-2 md:py-4 md:px-6 text-2xl rounded-3xl w-max shadow-lg'>
              <h5 className='bg-transparent whitespace-nowrap text-xl font-body' >Hear a song</h5>
              <svg className=' h-8 bg-transparent' viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title/><g data-name="Layer 14" id="Layer_14"><path d="M16,1A15,15,0,0,0,1,16v8a1,1,0,0,0,2,0V16a13,13,0,0,1,26,0v8a1,1,0,0,0,2,0V16A15,15,0,0,0,16,1Z"/><path d="M8.49,17h-1A3.51,3.51,0,0,0,4,20.51v7A3.51,3.51,0,0,0,7.51,31h1A3.51,3.51,0,0,0,12,27.49v-7A3.51,3.51,0,0,0,8.49,17ZM10,27.49A1.52,1.52,0,0,1,8.49,29h-1A1.52,1.52,0,0,1,6,27.49v-7A1.52,1.52,0,0,1,7.51,19h1A1.52,1.52,0,0,1,10,20.51Z"/><path d="M24.49,17h-1A3.51,3.51,0,0,0,20,20.51v7A3.51,3.51,0,0,0,23.51,31h1A3.51,3.51,0,0,0,28,27.49v-7A3.51,3.51,0,0,0,24.49,17ZM26,27.49A1.52,1.52,0,0,1,24.49,29h-1A1.52,1.52,0,0,1,22,27.49v-7A1.52,1.52,0,0,1,23.51,19h1A1.52,1.52,0,0,1,26,20.51Z"/></g></svg>
            </button>
            </a>
          </div>
          <div className='hero-right bg-transparent flex flex-col gap-5 xl:flex-1 lg:h-[60vh] md:h-[60vh] h-[40vh]'>
            <EarthCanvas />
          </div>
        </div>
    </>
  )
}

export default Hero
