import useScrollReveal from "@/hooks/useScrollReveal";

import HeaderSection from "@/components/HeaderSection";
import BrideGroomSection from "@/components/BrideGroomSection";
import EventsSection from "@/components/EventsSection";
import FooterSection from "@/components/FooterSection";
import MusicPlayer from "@/components/MusicPlayer";

const Index = () => {
  useScrollReveal();

  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(180deg, hsl(0 70% 28%), hsl(39 60% 88%))" }}>
      
      <MusicPlayer />
      <HeaderSection />
      <BrideGroomSection />
      <EventsSection />
      <FooterSection />
    </div>
  );
};

export default Index;
