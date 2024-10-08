import { useState, useEffect } from "react";
import { useAudioPlayer } from './ApiHook'; 

export function usePlayPause() {
  const { playingClipId, currentClip, handlePlayClip } = useAudioPlayer(); 
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    setIsPlaying(playingClipId === currentClip?.id);
  }, [playingClipId, currentClip]);

  const handlePlayPause = () => {
    if (currentClip?.id) {
      handlePlayClip(currentClip.id);
    }
  };

  return { isPlaying, handlePlayPause };
}