import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import CuteKitty from "./CuteKitty";

const Footer = () => {
  return (
    <footer className="py-16 px-4 text-center relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="flex justify-center mb-6">
          <CuteKitty size="sm" />
        </div>
        
        <p className="font-script text-2xl text-pink-deep mb-4">
          Made with love, just for you
        </p>
        
        <div className="flex items-center justify-center gap-2 text-muted-foreground font-body text-sm">
          <Heart size={14} className="text-heart fill-heart animate-heartbeat" />
          <span>Happy Birthday, My Love</span>
          <Heart size={14} className="text-heart fill-heart animate-heartbeat" />
        </div>
        
        <motion.p
          className="mt-8 font-body text-xs text-muted-foreground/60"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          A digital love letter celebrating the most amazing person ✨
        </motion.p>
      </motion.div>
    </footer>
  );
};

export default Footer;