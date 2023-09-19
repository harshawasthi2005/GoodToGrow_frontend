import VideoCard from './VideoCard';
import styles from "@/styles/Video.module.css";

function VideoList() {
  const videoIds_1 = [ 'WIrA4YexLRQ',    'ogjf7ORKfd8',    'HGk_ypEuS24',  'KEs5UyBJ39g'];
  const videoIds_2 = ['M3_pLsDdeuU','3oI-34aPMWM','OsNklbh9gYI','lea-Wl_uWXY'];

  return (
    <div>
      <div className={styles.title}>Algorithms</div>
    <div className={styles.video_list}>
      {videoIds_1.map(videoId => (
        <VideoCard key={videoId} videoId={videoId} />
      ))}
    </div>
    <div className={styles.title}>Graph</div>
    <div className={styles.video_list}>
      {videoIds_2.map(videoId => (
        <VideoCard key={videoId} videoId={videoId} />
      ))}
    </div>
    </div>
  );
}

export default VideoList;