import { motion } from "framer-motion";
import { Heart, Cat } from "lucide-react";
import { useState } from "react";

interface Photo {
  id: number;
  url: string;
  caption: string;
}

const placeholderPhotos: Photo[] = [
  { id: 1, url: "/placeholder.svg", caption: "Our first photo together 💕" },
  { id: 2, url: "/placeholder.svg", caption: "That beautiful sunset date 🌅" },
  { id: 3, url: "/placeholder.svg", caption: "Adventures with you 🎢" },
  { id: 4, url: "/placeholder.svg", caption: "Cozy moments at home 🏠" },
  { id: 5, url: "/placeholder.svg", caption: "Celebrating us 🥂" },
  { id: 6, url: "/placeholder.svg", caption: "Forever grateful for you 💖" },
];

const PhotoGallery = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 relative">
      {/* Section header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <Cat className="w-8 h-8 text-pink-rose" />
          <h2 className="font-script text-4xl md:text-5xl text-gradient-romantic">
            Our Beautiful Moments
          </h2>
          <Cat className="w-8 h-8 text-pink-rose" />
        </div>
        <p className="text-muted-foreground font-body">
          Every picture tells our love story 📸
        </p>
      </motion.div>

      {/* Photo grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {placeholderPhotos.map((photo, index) => (
          <motion.div
            key={photo.id}
            className="relative group"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            onHoverStart={() => setHoveredId(photo.id)}
            onHoverEnd={() => setHoveredId(null)}
          >
            {/* Heart frame decoration */}
            <div className="absolute -top-3 -left-3 z-10">
              <Heart
                size={24}
                className="text-heart fill-heart animate-heartbeat"
              />
            </div>
            <div className="absolute -top-3 -right-3 z-10">
              <Heart
                size={20}
                className="text-pink-rose fill-pink-rose"
              />
            </div>

            {/* Photo card */}
            <motion.div
              className="glass-card rounded-3xl overflow-hidden shadow-romantic cursor-pointer"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Image container with kitty frame */}
              <div className="relative aspect-square overflow-hidden bg-pink-soft">
                <img
                  src={photo.url}
                  alt={photo.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-pink-deep/60 to-transparent flex items-end justify-center pb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredId === photo.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-primary-foreground font-body text-center px-4">
                    {photo.caption}
                  </p>
                </motion.div>

                {/* Corner decorations */}
                <div className="absolute bottom-2 right-2 opacity-60">
                  <Cat size={20} className="text-pink-rose" />
                </div>
              </div>
            </motion.div>

            {/* Bottom decoration */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
              <Heart size={16} className="text-pink-blush fill-pink-blush" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Note about photos */}
      <motion.p
        className="text-center text-sm text-muted-foreground mt-12 font-body"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        💕 Replace these placeholders with your precious memories together 💕
      </motion.p>
    </section>
  );
};

export default PhotoGallery;