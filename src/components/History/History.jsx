import React from 'react'
import './History.scss'

const History = () => {
  return (
    <>
      <div className="history bg-[#181618]">
        <div className="back px-3 py-4 bg-transparent">
          <a href="/">
            <svg className='h-6 sm:h-8 md:h-12 lg:h-12 bg-transparent text-[#e6e5dd]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#e6e5dd"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 4C7.58172 4 4 7.58172 4 12H7C8.10457 12 9 12.8954 9 14V19C9 20.1046 8.10457 21 7 21H4C2.89543 21 2 20.1046 2 19V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V19C22 20.1046 21.1046 21 20 21H17C15.8954 21 15 20.1046 15 19V14C15 12.8954 15.8954 12 17 12H20C20 7.58172 16.4183 4 12 4ZM4 14V19H7V14H4ZM17 14V19H20V14H17Z"></path></svg>
          </a>
        </div>

        <div data-color="violet"  className="page4 section h-[450vh] w-full text-[#E6E5DD] relative pt-20 bg-transparent">
          <div className="award-title sticky top-32 ml-5 md:ml-0 bg-transparent">
            <h1 className="text-[12vw] md:text-[10vw] xl:text-[10vw] md:ml-20 leading-none bg-transparent font-display text-[#E6E5DD]">Classical <i className="ri-music-2-fill bg-[#E6E5DD] text-[#181618] rounded-full px-4 py-3"></i></h1>
            <h1 className="text-[12vw] md:text-[10vw] xl:text-[10vw] md:ml-20 leading-none bg-transparent font-display text-[#E6E5DD]">Indian music</h1>
          </div>

          <div className="awards h-[200vh] w-full relative text-[#1b1446] bg-transparent">
          <div className="award1 backdrop-blur-md h-[60vh] w-[80vw] md:h-[40vh] md:w-[90vw] lg:w-[70vw] xl:w-[60vw] absolute top-[50vh] left-10 lg:left-20 border-[#00000078] border-[1px] rounded-[1.5rem] flex flex-col md:gap-4 md:flex-row justify-center items-center p-2 px-5 bg-transparent">
            <div className="award1-img h-[50%] w-full md:h-full md:w-1/2 mt-5 md:mt-10 flex justify-center bg-transparent ">
              <img className="w-[100%] h-[90%] 2xl:w-[95%] rounded-2xl object-center" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Tanjore-style_Carnatic_tambura.JPG/270px-Tanjore-style_Carnatic_tambura.JPG" alt="Carnatic music"/>
            </div>
            <div className="award1-desc w-full h-1/2 md:w-1/2 md:h-full flex flex-col justify-center gap-3 bg-transparent">
              <h1 className="text-[4vw] sm:text-[3vw] md:text-[2.5vw] lg:text-[2.2vw] xl:text-[1.7vw] 2xl:text-[1.5vw] font-semibold   leading-none text-center md:text-start bg-transparent text-[#E6E5DD] font-body">Carnatic music</h1>
              <h2 className="text-[3.5vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1.7vw] xl:text-[1.5vw] 2xl:text-[1.1vw] font-medium tracking-normal   leading-6 text-center md:text-start bg-transparent text-[#E6E5DD] font-body">known as Karnāṭaka saṃgīta or Karnāṭaka saṅgītam in the South Indian languages,It is one of two main subgenres of Indian classical music that evolved from ancient Hindu texts and traditions, particularly the Samaveda. The main emphasis in Carnatic music is on vocal music; most compositions are written to be sung, and even when played on instruments, they are meant to be performed in gāyaki style.</h2>
            </div>
          </div>
    
          <div className="award2 backdrop-blur-md pb-5 md:pb-0 h-[45vh] w-[80vw] md:h-[40vh] md:w-[90vw] lg:w-[70vw] xl:w-[60vw] absolute top-[130vh] right-10 lg:right-20 border-[#00000078] border-[1px] rounded-[1.5rem] flex flex-col md:gap-4 md:flex-row justify-center items-center md:pt-5 px-5 bg-transparent">
            <div className="award2-img h-[70%] w-full md:h-full md:w-1/2 mt-5 flex justify-center overflow-hidden bg-transparent">
              <img className="w-[100%] h-[90%] 2xl:w-[95%] rounded-2xl object-top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Shiva_as_the_Lord_of_Dance_LACMA_edit.jpg/330px-Shiva_as_the_Lord_of_Dance_LACMA_edit.jpg" alt="Nāṭya Shāstra"/>
            </div>
            <div className="award2-desc w-full h-1/2 md:w-1/2 md:h-full flex flex-col justify-center gap-3 bg-transparent">
              <h1 className="text-[4vw] sm:text-[3vw] md:text-[2.5vw] lg:text-[2.2vw] xl:text-[1.7vw] 2xl:text-[1.5vw] font-semibold   leading-none text-center md:text-start bg-transparent text-[#E6E5DD] font-body">Nāṭya Shāstra</h1>
              <h2 className="text-[3.5vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1.7vw] xl:text-[1.5vw] 2xl:text-[1.1vw] font-medium tracking-normal   leading-6 text-center md:text-start bg-transparent text-[#E6E5DD] font-body">नाट्य शास्त्र, ( Nāṭyaśāstra ) is a Sanskrit treatise on the performing arts. The text is attributed to sage Bharata, and its first complete compilation is dated to between 200 BCE and 200 CE, but estimates vary between 500 BCE and 500 CE.</h2>
            </div>
          </div>
    
          <div className="award3 backdrop-blur-md h-[60vh] w-[80vw] md:h-[40vh] md:w-[90vw] lg:w-[70vw] xl:w-[60vw] absolute top-[210vh] left-10 lg:left-20 border-[#00000078] border-[1px] rounded-[1.5rem] flex flex-col md:gap-4 md:flex-row justify-center items-center md:pt-5 px-5 bg-transparent">
            <div className="award3-img h-[50%] w-full md:h-full md:w-1/2 mt-5 flex justify-center bg-transparent ">
              <img className="w-[100%] h-[85%] 2xl:w-[95%] rounded-2xl object-contain bg-transparent" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Bharathanatyam_By_Ranjitha.jpg/155px-Bharathanatyam_By_Ranjitha.jpg" alt="Song and dance in arts"/>
            </div>
            <div className="award3-desc w-full h-1/2 md:w-1/2 md:h-full flex flex-col justify-center gap-3 bg-transparent">
              <h1 className="text-[4vw] sm:text-[3vw] md:text-[2.5vw] lg:text-[2.2vw] xl:text-[1.7vw] 2xl:text-[1.5vw] font-semibold tracking-normal leading-5 text-center md:text-start bg-transparent text-[#E6E5DD] font-body">Song and dance in arts</h1>
              <h2 className="text-[3.5vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1.7vw] xl:text-[1.5vw] 2xl:text-[1.1vw] font-medium    leading-6 text-center md:text-start bg-transparent text-[#E6E5DD] font-body">The most studied version of the text, consisting of about 6000 poetic verses, is structured into 36 chapters. The tradition believes that the text originally had 12,000 verses. Somewhat different versions of the manuscripts exist, and these contain 37 or 38 chapters. Predominant number of its verses are in precise Anustubh meter, some verses are in Arya meter (a morae-based Sanskrit meter).</h2>
            </div>
          </div>

          <div className="award4 backdrop-blur-md h-[60vh] w-[80vw] md:h-[40vh] md:w-[90vw] lg:w-[70vw] xl:w-[60vw] absolute top-[290vh] right-10 lg:right-20 border-[#00000078] border-[1px] rounded-[1.5rem] flex flex-col md:gap-4 md:flex-row justify-center items-center md:pt-5 px-5 bg-transparent">
            <div className="award3-img h-[50%] w-full md:h-full md:w-1/2 mt-5 flex justify-center bg-transparent ">
              <img className="w-[100%] h-[85%] 2xl:w-[95%] rounded-2xl" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Veena.png/222px-Veena.png" alt=""/>
            </div>
            <div className="award4-desc w-full h-1/2 md:w-1/2 md:h-full flex flex-col justify-center gap-3 bg-transparent">
              <h1 className="text-[4vw] sm:text-[3vw] md:text-[2.5vw] lg:text-[2.2vw] xl:text-[1.7vw] 2xl:text-[1.5vw] font-semibold leading-5 text-center md:text-start bg-transparent text-[#E6E5DD] font-body">Musical instrument</h1>
              <h2 className="text-[3.5vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1.7vw] xl:text-[1.5vw] 2xl:text-[1.1vw] font-medium leading-6 text-center md:text-start bg-transparent text-[#E6E5DD] font-body">तत्र स्वराः –षड्‍जश्‍च ऋषभश्‍चैव गान्धारो मध्यमस्तथा । पञ्‍चमो धैवतश्‍चैव सप्तमोऽथ निषादवान् ॥ २१॥ <br /> — Natya Shastra, 28.21</h2>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default History
