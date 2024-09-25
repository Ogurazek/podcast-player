import { useState, useRef, useEffect } from "react";

const API_URL = "https://api.audioboom.com/audio_clips";

export function useAudioPlayer() {
  const [selectedClipId, setSelectedClipId] = useState<number | null>(null);
  const [playingClipId, setPlayingClipId] = useState<number | null>(null);
  const [audioClips, setAudioClips] = useState<any[]>([]);
  const audioRefs = useRef<Record<number, HTMLAudioElement | null>>({});

  useEffect(() => {
    const fetchAudioClips = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setAudioClips(data.body.audio_clips);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    
    fetchAudioClips();
  }, []);

  const handlePlayClip = (id: number) => {
    if (playingClipId !== null && audioRefs.current[playingClipId]) {
      const currentAudio = audioRefs.current[playingClipId];
      currentAudio.pause();
      currentAudio.currentTime = 0;  
    }

    if (audioRefs.current[id]) {
      audioRefs.current[id].play().then(() => {
        setPlayingClipId(id);
        setSelectedClipId(id);
      }).catch((error) => {
        console.error("Error al reproducir:", error);
      });
    }
  };

  const handleButtonPausePlay = () => {
    if (playingClipId !== null && audioRefs.current[playingClipId]) {
      const currentAudio = audioRefs.current[playingClipId];

      if (currentAudio.paused) {
   
        currentAudio.play().then(() => {
          setPlayingClipId(playingClipId); 
        }).catch((error) => {
          console.error("Error al reproducir:", error);
        });
      } else {
     
        currentAudio.pause();
       
      }
    }
  };

  return {
    selectedClipId,
    playingClipId,
    audioClips,
    audioRefs,
    handlePlayClip,
    handleButtonPausePlay,
    setSelectedClipId,
  };
}