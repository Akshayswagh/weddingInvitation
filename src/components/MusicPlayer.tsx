import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX, Music } from "lucide-react";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPrompt, setShowPrompt] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Free shehnai music URL
  const musicUrl = "@/assets/website sound.mpeg";

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setIsPlaying(!isPlaying);
    setShowPrompt(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => setShowPrompt(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <audio ref={audioRef} src={musicUrl} loop preload="auto" />
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
        {showPrompt && (
          <div className="bg-card border border-border rounded-lg px-4 py-2 shadow-lg animate-fade-in font-body text-sm text-foreground">
            🎵 शहनाई संगीत ऐकण्यासाठी क्लिक करा
          </div>
        )}
        <button
          onClick={togglePlay}
          className="group relative w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-xl"
          style={{
            background: "linear-gradient(135deg, hsl(var(--maroon)), hsl(var(--gold)))",
            boxShadow: isPlaying
              ? "0 0 25px hsl(var(--gold) / 0.5), 0 0 50px hsl(var(--gold) / 0.2)"
              : "0 4px 20px hsl(var(--maroon) / 0.4)",
          }}
        >
          {isPlaying ? (
            <Volume2 className="w-6 h-6 text-primary-foreground animate-pulse" />
          ) : (
            <VolumeX className="w-6 h-6 text-primary-foreground" />
          )}
          {isPlaying && (
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75" />
              <span className="relative inline-flex rounded-full h-4 w-4 bg-gold" />
            </span>
          )}
        </button>
      </div>
    </>
  );
};

export default MusicPlayer;
