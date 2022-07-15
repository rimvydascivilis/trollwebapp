import './App.css';
import { useState, useEffect } from 'react'

function App() {
  useEffect(() => {
    document.addEventListener('fullscreenchange', () => setFullScreen(document.fullscreenElement !== null))
  }, [])

  const [fullScreen, setFullScreen] = useState(document.fullscreenElement !== null);
  const [videoEnded, setVideoEnded] = useState(false);

  if (!fullScreen) {
    return (
      <div className='enableFullScreen'>
        <h1>Please enable full screen</h1>
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
