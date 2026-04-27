import React from 'react';
import {BsFillPlayFill, BsFillPauseFill} from 'react-icons/bs';
import { cakevideo } from '../../constants';

import './Intro.css';

const Intro = () => {
  const vidRef = React.useRef(null);
  const [playVideo, setPlayVideo] = React.useState(false);

  const handleVideo = () => {
    if (!vidRef.current) return;

    if (playVideo) {
      vidRef.current.pause();
      setPlayVideo(false);
    } else {
      vidRef.current.play();
      setPlayVideo(true);
    }
  };

  return (
    <div className="app__video">
      <video
        src={cakevideo}
        ref={vidRef}
        type="video/mp4"
        loop
        muted
        playsInline
      />

      <div className="app__video-overlay flex__center">
        <button
          type="button"
          className="app__video-overlay_circle flex__center"
          onClick={handleVideo}
          aria-label={playVideo ? 'Pause video' : 'Play video'}
        >
          {playVideo ? (
            <BsFillPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </button>
      </div>
    </div>
  );
};

export default Intro;
