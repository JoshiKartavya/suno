import React, { useEffect } from 'react'
import gsap from 'gsap'
import './Suno.scss'
import { Navbar, Footer } from '../../constants'
import { Hero, Player } from '../../components'

const Suno = () => {
  useEffect(() => {
    const cursor = document.getElementById('cursor');
    const app = document.getElementById('app');

    const handleMouseMove = (dets) => {
      gsap.to(cursor, {
        x: dets.clientX,
        y: dets.clientY,
        ease: 'back.out',
      });
    };

    app.addEventListener('mousemove', handleMouseMove);

    return () => {
      app.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  return (
    <>  
       <div className=" invisible sm:invisible md:visible lg:visible" id="app">
          <div id="cursor"></div>
          <Navbar />
          <Hero />
          <Player />
          <Footer />
       </div>
    </>
  )
}

export default Suno
