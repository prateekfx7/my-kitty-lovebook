import { motion } from "framer-motion";
import { Heart, Calendar, MapPin, Star } from "lucide-react";

const memories = [
  {
    id: 1,
    date: "When We First Met",
    title: "The Day My Life Changed",
    description: "I still remember the butterflies I felt when I first saw your smile. Little did I know, you would become my whole world.",
    icon: Star,
  },
  {
    id: 2,
    date: "Our First Date",
    title: "Magic in the Air",
    description: "Every second with you felt like a beautiful dream. I knew right then that you were someone truly special.",
    icon: Heart,
  },
  {
    id: 3,
    date: "Our First Trip Together",
    title: "Adventures Begin",
    description: "Exploring the world with you by my side made me realize - home isn't a place, it's wherever you are.",
    icon: MapPin,
  },
  {
    id: 4,
    date: "Today & Forever",
    title: "Celebrating You",
    description: "Every day with you is a gift. Today, on your birthday, I celebrate the wonderful person you are.",
    icon: Calendar,
  },
];

const MemoriesTimeline = () => {
  return (
    <section className="py-20 px-4 relative">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-script text-4xl md:text-5xl text-gradient-romantic mb-4">
          Our Love Story
        </h2>
        <p className="text-muted-foreground font-body">
          A timeline of our most precious moments 💕
        </p>
      </motion.div>

      <div className="max-w-3xl mx-auto relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-rose via-heart to-pink-blush transform md:-translate-x-1/2" />

        {memories.map((memory, index) => (
          <motion.div
            key={memory.id}
            className={`relative flex items-center mb-12 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {/* Timeline dot */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 z-10">
              <motion.div
                className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-rose to-heart flex items-center justify-center shadow-glow"
                whileHover={{ scale: 1.2 }}
              >
                <memory.icon size={18} className="text-primary-foreground" />
              </motion.div>
            </div>

            {/* Content card */}
            <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
              <motion.div
                className="glass-card rounded-2xl p-6 shadow-romantic"
                whileHover={{ y: -5 }}
              >
                <span className="text-sm font-body text-pink-deep font-semibold">
                  {memory.date}
                </span>
                <h3 className="font-script text-2xl text-foreground mt-1 mb-3">
                  {memory.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  {memory.description}
                </p>
                <div className="mt-4 flex gap-1">
                  {[...Array(3)].map((_, i) => (
                    <Heart
                      key={i}
                      size={14}
                      className="text-heart fill-heart"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MemoriesTimeline;