import React, { createContext, useContext, useState, useRef, useEffect } from "react";

const API_URL = "https://api.audioboom.com/audio_clips";

const AudioPlayerContext = createContext<any>(null);

export const AudioPlayerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedClipId, setSelectedClipId] = useState<number | null>(null);
  const [playingClipId, setPlayingClipId] = useState<number | null>(null);
  const [currentClipId, setCurrentClipId] = useState<number | null>(null); 
  const [audioClips, setAudioClips] = useState<any[]>([]);
  const [isSongBarOpen, setIsSongBarOpen] = useState<boolean>(false); 
  const audioRefs = useRef<Record<number, HTMLAudioElement | null>>({});

  useEffect(() => {
    const fetchAudioClips = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setAudioClips(data.body.audio_clips);

        data.body.audio_clips.forEach((clip: any) => {
          const audioElement = new Audio(clip.urls.high_mp3); 
          audioRefs.current[clip.id] = audioElement;
        });
      } catch (error: any) {
        console.error("Error fetching audio clips:", error.message);
      }
    };

    fetchAudioClips();
  }, []);

  const handlePlayClip = (id: number) => {
    const currentAudio = audioRefs.current[id];

    if (!currentAudio) {
      console.error("No se encontró el audio para el ID:", id);
      return;
    }

    if (playingClipId === id) {
      if (!currentAudio.paused) {
        currentAudio.pause();
        setPlayingClipId(null);
      } else {
        currentAudio.play().catch((error) => {
          console.error("Error al reanudar el audio:", error);
        });
      }
    } else {
      if (playingClipId !== null) {
        const previousAudio = audioRefs.current[playingClipId];
        if (previousAudio) {
          previousAudio.pause();
          previousAudio.currentTime = 0;
        }
      }

      currentAudio.play().then(() => {
        setPlayingClipId(id);
        setSelectedClipId(id);
        setCurrentClipId(id); 
        setIsSongBarOpen(true); 
      }).catch((error) => {
        console.error("Error al reproducir el nuevo clip:", error);
      });
    }
  };

  const closeSongBar = () => {
    if (playingClipId !== null) {
      const currentAudio = audioRefs.current[playingClipId];
      if (currentAudio) {
        currentAudio.pause();
        setPlayingClipId(null);
      }
    }
    setIsSongBarOpen(false); 
  };

  const currentClip = audioClips.find(clip => clip.id === currentClipId); 

  return (
    <AudioPlayerContext.Provider
      value={{
        selectedClipId,
        playingClipId,
        audioClips,
        audioRefs,
        handlePlayClip,
        currentClipId,
        currentClip, 
        isSongBarOpen, 
        closeSongBar 
      }}
    >
      {children}
    </AudioPlayerContext.Provider>
  );
};

export const useAudioPlayer = () => {
  const context = useContext(AudioPlayerContext);
  if (!context) {
    throw new Error("useAudioPlayer must be used within an AudioPlayerProvider");
  }
  return context;
};
