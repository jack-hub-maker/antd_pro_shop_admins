import React, { useRef, useEffect } from 'react';

const VideoPlayer = ({ videoUrl }) => {
  const videoRef = useRef(null);
  const videoPlayNum = useRef(0);

  useEffect(() => {
    const video = videoRef.current;

    const handlePlay = () => {
      videoPlayNum.current += 1;
      console.log('开始', video.currentTime, video.duration);
      console.log('播放次数', videoPlayNum.current);
      // 视频开始播放时的逻辑
    };

    const handlePause = () => {
      // 视频暂停时的逻辑
      console.log('暂停', video.currentTime, video.duration);
      console.log('播放次数', videoPlayNum.current);
    };

    const handleEnded = () => {
      // 视频播放结束时的逻辑
      console.log('结束', video.currentTime, video.duration);
      console.log('播放次数', videoPlayNum.current);
    };

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  return <video ref={videoRef} src={videoUrl} controls />;
};

export default VideoPlayer;
