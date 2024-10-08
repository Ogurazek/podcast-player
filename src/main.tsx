import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Header from './componentes/header/header.tsx';
import Home from './componentes/index/inicio.tsx';
import SongBar from './componentes/songbar/SongBar.tsx';
import { useAudioPlayer } from './hooks/ApiHook'; 
import './index.css';
import { AudioPlayerProvider } from "./hooks/ApiHook.tsx";

const App = () => {
  const { audioClips, handlePlayClip, audioRefs, playingClipId, currentClipId } = useAudioPlayer(); // Usamos currentClipId

  return (
    <>
      <Header />
      <Home 
        audioClips={audioClips} 
        handlePlayClip={handlePlayClip} 
        audioRefs={audioRefs}
      />
      <SongBar
        
        clipId={currentClipId} // Pasamos currentClipId a SongBar
        titulo="Can't Stop the Feeling!"
        subtitulo="Calvin Harris"
        tiempo="0:10 / 3:41"
        portada="https://s3-alpha-sig.figma.com/img/579b/eaee/3b02630be867dbdbd629e9d32572a9b5?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=px7WHy2D5Stukp1xsFHRMu4ozabWk3wdIH27tBEfEfOTGpsX6ytflymMSh0ZyEDOY8~kl5KCFIV2YUuI2M41u0BA4UcnNn-WjoKANuRAUviQy78KXhEuVphUpskye-bL2Ds-acfdecUaVSpO0KJKqtPLInxR29mneG5KAEfpm1Szay~oYS3WsBiSaO6tRW2ilf9dScaRO4zpG9br7hNOsrOR8r3diVtpYFvkjRXBlSvMOyCVe~hCvGHqDvgxIbBvzt4CnNxB7Kxxet7PianrhIwcmm7UA9ubLz5gZrZkZ0Q~obWLLOiB-1yvKdxVzF1bN3dcEwUK7sei~s-bx9h8Aw__"
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