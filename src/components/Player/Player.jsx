import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player/youtube';
import './Player.scss';
import 'remixicon/fonts/remixicon.css';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

const API_KEY = 'AIzaSyAmwv0ID0LuA1mIDSy0bPMBVGGEyINVk_8';

const Player = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [currentVideoDetails, setCurrentVideoDetails] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.5); // Volume state
  const playerRef = useRef(null);

  const searchYouTube = async () => {
    const response = await axios.get(`https://www.googleapis.com/youtube/v3/search`, {
      params: {
        part: 'snippet',
        q: query,
        type: 'video',
        key: API_KEY,
      },
    });
    setResults(response.data.items.slice(0, 4));  // Limit results to 4
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      searchYouTube();
    }
  };

  const playAudio = (video) => {
    setCurrentVideo(`https://www.youtube.com/watch?v=${video.id.videoId}`);
    setCurrentVideoDetails(video.snippet);
    setIsPlaying(true);
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleProgress = (state) => {
    setProgress(state.played);
  };

  const handleSeek = (e) => {
    playerRef.current.seekTo(parseFloat(e.target.value));
  };

  const handleVolumeChange = (change) => {
    setVolume((prevVolume) => Math.min(1, Math.max(0, prevVolume + change)));
  };

  const handleKeyPress = (e) => {
    if (e.code === 'Space') {
      handlePlayPause();
    }
  };

  const handleDuration = (duration) => {
    setDuration(duration);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleEnded = () => {
    setIsPlaying(false);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [isPlaying]);

  useGSAP(() => {
    const t1 = gsap.timeline();

    t1.from('.searchbar-container', {
      duration: 1,
      opacity: 0,
      y: 100,
    });
    t1.from('.song-list', {
      duration: 1,
      opacity: 0,
      x: 100,
    });
    t1.from('.song-info', {
      duration: 1,
      opacity: 0,
      x: -100,
    });
  });

  return (
    <div className="player-continer p-4 sm:p-8 md:p-12 lg:p-16" id='player-container'>
      <div className='player-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl pb-4 font-display'>
        <h1>Enjoy your favourite song</h1>
      </div>

      <div className="player-content flex flex-col items-center gap-4 w-full h-full">
        <div className="searchbar-container w-full flex items-center justify-center gap-5">
          <input
            className='border-dashed border-2 border-[--secondary] w-full h-10 md:h-16 rounded-3xl text-xl md:text-3xl px-7 focus:border-dashed font-body'
            type="text"
            placeholder='Search the song here!'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button onClick={searchYouTube} id='search-btn'><i className="ri-search-line text-3xl md:text-5xl"></i></button>
        </div>

        <div className="song-container w-full h-full flex flex-col-reverse sm:flex-col-reverse gap-4 md:flex-col-reverse lg:flex-row">
          <div className="song-info border-dashed border-[--secondary] rounded-xl border-2 min-h-[40vh] sm:min-h-[40vh] md:min-h-[70vh] lg:min-h-[70vh] w-full p-4 flex flex-col items-center">
            {currentVideoDetails && (
              <>
                <img 
                  className='w-[95%] rounded-2xl mt-3'
                  src={currentVideoDetails.thumbnails.maxres?.url || currentVideoDetails.thumbnails.high.url} 
                  alt={currentVideoDetails.title} 
                  id='thumbnail-img' 
                />
                <h2 className='text-2xl md:text-4xl font-body mt-5'>
                  {currentVideoDetails.title.length > 25
                    ? `${currentVideoDetails.title.substring(0, 25)}...`
                    : currentVideoDetails.title}
                </h2>
                <div className='controls mt-5 flex flex-col items-center w-full'>
                  <button onClick={handlePlayPause}>
                    {isPlaying ? <i className="ri-pause-fill text-[--primary] bg-[--secondary] p-5 rounded-full text-xl md:text-2xl"></i> : <i className="ri-play-fill text-[--primary] bg-[--secondary] p-5 rounded-full text-xl md:text-2xl"></i>}
                  </button>
                  <div className="time-info mt-7">
                    <span>{formatTime(progress * duration)}</span> /
                    <span>{formatTime(duration)}</span>
                  </div>
                  <input
                    className="w-60 sm:w-80 md:w-96 h-5 appearance-none bg-gray-300 rounded-lg overflow-hidden"
                    type="range"
                    min={0}
                    max={1}
                    step="any"
                    value={progress}
                    onChange={handleSeek}
                  />
                  <div className="volume-control mt-5 flex items-center gap-5">
                    <i className="ri-volume-down-line text-2xl cursor-pointer text-[--primary] bg-[--secondary] py-3 px-4 rounded-full" onClick={() => handleVolumeChange(-0.05)}></i>
                    <div className="volume-display w-10 h-10 flex items-center justify-center rounded-full bg-gray-200">
                      {Math.round(volume * 100)}%
                    </div>
                    <i className="ri-volume-up-fill text-2xl cursor-pointer text-[--primary] bg-[--secondary] py-3 px-4 rounded-full" onClick={() => handleVolumeChange(+0.05)}></i>
                  </div>
                </div>
                <ReactPlayer
                  ref={playerRef}
                  url={currentVideo}
                  playing={isPlaying}
                  volume={volume}
                  onProgress={handleProgress}
                  onDuration={handleDuration}
                  onEnded={handleEnded}
                  width="0"
                  height="0"
                  config={{
                    youtube: {
                      playerVars: { controls: 1 },
                    },
                  }}
                />
              </>
            )}
          </div>
          <div className="song-list border-dashed border-[--secondary] rounded-xl border-2 min-h-[40vh] sm:min-h-[40vh] md:min-h-[70vh] lg:min-h-[70vh] w-full p-4 ">
            <ul className='flex flex-col gap-5'>
              {results.map((video) => (
                <li className='flex flex-row justify-between items-center' key={video.id.videoId}>
                  <div className='flex flex-row sm:flex-row md:flex-row items-center sm:items-center md:items-center gap-2' id='song-titles'>
                    <img className='w-40 md:w-48' src={video.snippet.thumbnails.high.url} alt={video.snippet.title} id='thumbnail-img' />
                    <h2 className='text-lg md:text-2xl font-body'>
                      {video.snippet.title.length > 25
                        ? `${video.snippet.title.substring(0, 25)}...`
                        : video.snippet.title}
                    </h2>
                  </div>
                  <button onClick={() => playAudio(video)}><i className="ri-play-fill text-2xl text-[--primary] bg-[--secondary] p-3 rounded-full"></i></button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
