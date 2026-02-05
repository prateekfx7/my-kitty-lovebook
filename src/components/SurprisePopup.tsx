import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles, X } from "lucide-react";
import CuteKitty from "./CuteKitty";

const SurprisePopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Show popup when user is near the bottom (within 100px)
      if (scrollPosition >= documentHeight - 100) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-pink-deep/40 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setIsVisible(false)}
        />

        {/* Popup content */}
        <motion.div
          className="relative glass-card rounded-3xl p-8 md:p-12 max-w-md w-full shadow-romantic text-center"
          initial={{ scale: 0, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", duration: 0.6 }}
        >
          {/* Close button */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-secondary transition-colors"
          >
            <X size={20} className="text-muted-foreground" />
          </button>

          {/* Floating hearts animation */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: `${10 + i * 12}%`,
                  bottom: "-20px",
                }}
                animate={{
                  y: [-20, -150],
                  opacity: [0, 1, 0],
                  scale: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2 + i * 0.3,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              >
                <Heart
                  size={14 + i * 2}
                  className="text-heart fill-heart"
                />
              </motion.div>
            ))}
          </div>

          {/* Kitty decoration */}
          <motion.div
            className="mb-6"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <CuteKitty size="lg" />
          </motion.div>

          {/* Main message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles size={24} className="text-gold" />
              <h3 className="font-script text-4xl md:text-5xl text-gradient-romantic">
                I Love You
              </h3>
              <Sparkles size={24} className="text-gold" />
            </div>

            <p className="font-script text-2xl md:text-3xl text-pink-deep mb-6">
              Forever & Always
            </p>

            <p className="font-body text-muted-foreground mb-8">
              Thank you for being the most wonderful person in my life. 
              You are my everything. 💕
            </p>

            {/* Heart animation */}
            <motion.div
              className="flex justify-center gap-2"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              {[...Array(5)].map((_, i) => (
                <Heart
                  key={i}
                  size={24 + (i === 2 ? 8 : 0)}
                  className="text-heart fill-heart"
                  style={{
                    animationDelay: `${i * 0.1}s`,
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SurprisePopup;