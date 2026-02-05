import FloatingHearts from "@/components/FloatingHearts";
import Sparkles from "@/components/Sparkles";
import WelcomeSection from "@/components/WelcomeSection";
import PhotoGallery from "@/components/PhotoGallery";
import LoveNotes from "@/components/LoveNotes";
import MemoriesTimeline from "@/components/MemoriesTimeline";
import BirthdayLetter from "@/components/BirthdayLetter";
import MusicPlayer from "@/components/MusicPlayer";
import SurprisePopup from "@/components/SurprisePopup";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-romantic relative overflow-x-hidden">
      {/* Background animations */}
      <FloatingHearts />
      <Sparkles />

      {/* Main content */}
      <main>
        <WelcomeSection />
        
        {/* Decorative divider */}
        <div className="flex items-center justify-center py-8">
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-pink-rose to-transparent" />
          <span className="mx-4 text-2xl">💕</span>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-pink-rose to-transparent" />
        </div>

        <PhotoGallery />
        
        <LoveNotes />
        
        {/* Another divider */}
        <div className="flex items-center justify-center py-8">
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-heart to-transparent" />
          <span className="mx-4 text-2xl">🐱</span>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-heart to-transparent" />
        </div>

        <MemoriesTimeline />
        
        <BirthdayLetter />
        
        <Footer />
      </main>

      {/* Fixed elements */}
      <MusicPlayer />
      <SurprisePopup />
    </div>
  );
};

export default Index;
