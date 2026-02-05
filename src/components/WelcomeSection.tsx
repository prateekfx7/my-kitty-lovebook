import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import CuteKitty from "./CuteKitty";
import cuteKittyImage from "@/assets/cute-kitty.png";

const WelcomeSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Decorative elements */}
      <motion.div
        className="absolute top-20 left-10 text-heart"
        animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <Heart size={32} className="fill-heart" />
      </motion.div>
      <motion.div
        className="absolute top-40 right-16 text-pink-rose"
        animate={{ y: [0, -20, 0], rotate: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      >
        <Heart size={24} className="fill-pink-rose" />
      </motion.div>
      <motion.div
        className="absolute bottom-32 left-20"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <Sparkles size={28} className="text-gold" />
      </motion.div>

      <div className="text-center z-10 max-w-4xl">
        {/* Cute Kitty */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", duration: 1, delay: 0.2 }}
          className="mb-6"
        >
          <img
            src={cuteKittyImage}
            alt="Cute Kitty"
            className="w-32 h-32 md:w-40 md:h-40 mx-auto drop-shadow-lg"
          />
        </motion.div>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h1 className="font-script text-5xl md:text-7xl lg:text-8xl text-gradient-romantic mb-4">
            Happy Birthday
          </h1>
          <motion.div
            className="flex items-center justify-center gap-3 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Heart size={20} className="text-heart fill-heart animate-heartbeat" />
            <span className="font-script text-3xl md:text-4xl text-pink-deep">
              My Love
            </span>
            <Heart size={20} className="text-heart fill-heart animate-heartbeat" />
          </motion.div>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl text-muted-foreground font-body max-w-xl mx-auto mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          On this special day, I want to celebrate the most beautiful person in my life.
          You make every moment magical. ✨
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          className="mt-12"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-sm font-body">Scroll to explore our love story</span>
            <motion.div
              className="w-6 h-10 border-2 border-pink-rose rounded-full flex justify-center pt-2"
            >
              <motion.div
                className="w-1.5 h-3 bg-pink-rose rounded-full"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WelcomeSection;