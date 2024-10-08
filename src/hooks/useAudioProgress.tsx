import { useState, useEffect } from "react";
import { useAudioPlayer } from './ApiHook'; 

export function useAudioProgress() {
  const { playingClipId, audioRefs } = useAudioPlayer(); 
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [progressPercentage, setProgressPercentage] = useState<number>(0);

  useEffect(() => {
    const currentAudio = audioRefs.current[playingClipId];
    if (currentAudio) {
      setDuration(currentAudio.duration);
      const updateCurrentTime = () => {
        setCurrentTime(currentAudio.currentTime);
        setProgressPercentage((currentAudio.currentTime / currentAudio.duration) * 100);
      };
      currentAudio.addEventListener('timeupdate', updateCurrentTime);
      return () => {
        currentAudio.removeEventListener('timeupdate', updateCurrentTime);
      };
    }
  }, [playingClipId, audioRefs]);

  const handleProgressBarClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const progressBar = event.currentTarget;
    const clickPosition = event.clientX - progressBar.getBoundingClientRect().left;
    const newWidthPercentage = (clickPosition / progressBar.clientWidth) * 100;

    const currentAudio = audioRefs.current[playingClipId];
    if (currentAudio) {
      currentAudio.currentTime = (newWidthPercentage / 100) * duration;
    }
  };

  return { currentTime, duration, progressPercentage, handleProgressBarClick };
}