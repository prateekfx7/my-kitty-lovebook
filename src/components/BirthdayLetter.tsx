import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import CuteKitty from "./CuteKitty";

const BirthdayLetter = () => {
  return (
    <section className="py-20 px-4 relative">
      <motion.div
        className="max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {/* Letter header */}
        <motion.div
          className="text-center mb-8"
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-4">
            <CuteKitty size="md" />
          </div>
          <h2 className="font-script text-4xl md:text-5xl text-gradient-romantic">
            A Letter For You
          </h2>
        </motion.div>

        {/* Letter content */}
        <motion.div
          className="glass-card rounded-3xl p-8 md:p-12 shadow-romantic relative overflow-hidden"
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Decorative corners */}
          <div className="absolute top-4 left-4">
            <Heart size={20} className="text-pink-blush fill-pink-blush" />
          </div>
          <div className="absolute top-4 right-4">
            <Heart size={20} className="text-pink-blush fill-pink-blush" />
          </div>
          <div className="absolute bottom-4 left-4">
            <Sparkles size={20} className="text-gold" />
          </div>
          <div className="absolute bottom-4 right-4">
            <Sparkles size={20} className="text-gold" />
          </div>

          <div className="font-body text-foreground leading-relaxed space-y-4">
            <p className="font-script text-2xl text-pink-deep">
              My Dearest Love,
            </p>
            
            <p>
              On this beautiful day, I want you to know just how much you mean to me. 
              From the moment you came into my life, everything changed for the better.
            </p>
            
            <p>
              Your smile is my favorite sight in the world. Your laughter is my favorite 
              melody. Your love is my greatest treasure. Every day with you feels like 
              a beautiful dream I never want to wake up from.
            </p>
            
            <p>
              Thank you for being my best friend, my partner, and my everything. 
              Thank you for loving me, for believing in me, and for making every 
              ordinary moment extraordinary.
            </p>
            
            <p>
              On your special day, I wish you all the happiness in the world. May this 
              year bring you endless joy, beautiful surprises, and all the love your 
              heart can hold.
            </p>
            
            <p className="pt-4">
              Happy Birthday, my love. Here's to another year of adventures, 
              laughter, and making memories together.
            </p>

            <div className="pt-6 text-right">
              <p className="font-script text-2xl text-pink-deep">
                Forever Yours,
              </p>
              <p className="font-script text-xl text-muted-foreground mt-1">
                With All My Love 💕
              </p>
            </div>
          </div>

          {/* Animated hearts */}
          <motion.div
            className="absolute -bottom-2 left-1/2 transform -translate-x-1/2"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Heart size={32} className="text-heart fill-heart" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default BirthdayLetter;