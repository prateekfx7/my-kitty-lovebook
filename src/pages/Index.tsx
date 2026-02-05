import FloatingHearts from "@/components/FloatingHearts";
import Sparkles from "@/components/Sparkles";
import WelcomeSection from "@/components/WelcomeSection";
import PhotoGallery from "@/components/PhotoGallery";
import LoveNotes from "@/components/LoveNotes";
import MemoriesTimeline from "@/components/MemoriesTimeline";
import BirthdayLetter from "@/components/BirthdayLetter";
import MusicPlayer from "@/components/MusicPlayer";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Index = () => {
  const navigate = useNavigate();
 
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

        {/* Continue journey button */}
        <motion.div
          className="text-center py-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="font-script text-2xl text-pink-deep mb-6">
            Ready to continue our journey? 💕
          </p>
          <Button
            onClick={() => navigate("/our-story")}
            className="bg-gradient-to-r from-heart to-pink-rose text-white px-8 py-6 rounded-full text-lg font-body shadow-romantic hover:shadow-lg transition-all group"
          >
            Begin the Adventure
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>

        <Footer />
      </main>

      {/* Fixed elements */}
      <MusicPlayer />
    </div>
  );
};

export default Index;
