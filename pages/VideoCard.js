import YouTube from 'react-youtube';
import { useState } from 'react';
import styles from "@/styles/Video.module.css";

function VideoCard(props) {
  const { videoId } = props;
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const opts = {
    height: '240',
    width: '320',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className={styles.card}>
      <div className={styles.video_player}>
        {isPlaying ? (
          <YouTube videoId={videoId} opts={opts} onPause={handlePause} />
        ) : (
          <div className={styles.thumbnail} onClick={handlePlay}>
            <img src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`} alt="Video thumbnail" />
            <div className={styles.play_button}>
              <svg viewBox="0 0 24 24">
                <path fill="currentColor" d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default VideoCard;