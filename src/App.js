import './App.css';
import { useState, useEffect } from 'react'
import getOperatingSystem from './utils/osDetect';

function App() {
  useEffect(() => {
    document.addEventListener('fullscreenchange', () => setFullScreen(document.fullscreenElement !== null))
    setOs(getOperatingSystem(window))
  }, [])

  const [fullScreen, setFullScreen] = useState(document.fullscreenElement !== null);
  const [videoEnded, setVideoEnded] = useState(false);
  const [os, setOs] = useState(null);

  if (!fullScreen) {
    return (
      <div className='enableFullScreen'>
        <h1>Please use full screen</h1>
        <button className='button' onClick={() => { document.documentElement.requestFullscreen(); setFullScreen(true) }}>Press here</button>
      </div>
    )
  }
  else if (fullScreen && !videoEnded) {
    return (
      <div>
        <video className='video' autoPlay="autoPlay" onEnded={() => setVideoEnded(true)}>
          <source src="video.mp4" type="video/mp4" />
        </video>
      </div>
    )
  }
  else if (fullScreen && videoEnded) {
    return (
      <img alt='Spooky scarry' src='clown.jpg' />
    )
  }
}

export default App;
