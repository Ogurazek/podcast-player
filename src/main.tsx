import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Header from './componentes/header/header.tsx';
import Home from './componentes/index/inicio.tsx';
import SongBar from './componentes/songbar/SongBar.tsx';
import { useAudioPlayer } from './hooks/ApiHook'; 
import './index.css';
import { AudioPlayerProvider } from "./hooks/ApiHook.tsx";

const App = () => {
  const { audioClips, handlePlayClip, audioRefs } = useAudioPlayer(); // Usamos currentClipId

  return (
    <>
      <Header />
      <Home 
        audioClips={audioClips} 
        handlePlayClip={handlePlayClip} 
        audioRefs={audioRefs}
      />
      <SongBar
      />
    </>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AudioPlayerProvider>
      <App />
    </AudioPlayerProvider>
  </StrictMode>
);