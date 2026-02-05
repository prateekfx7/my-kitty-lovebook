import { motion } from "framer-motion";
import { Heart, Star } from "lucide-react";

const notes = [
  {
    id: 1,
    text: "You make my heart skip a beat every single day.",
    emoji: "💗",
  },
  {
    id: 2,
    text: "With you, every moment becomes a beautiful memory.",
    emoji: "✨",
  },
  {
    id: 3,
    text: "You're the reason I believe in fairy tales.",
    emoji: "🦋",
  },
];

const LoveNotes = () => {
  return (
    <section className="py-16 px-4 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${20 + i * 20}%`,
              top: `${10 + (i % 3) * 30}%`,
            }}
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          >
            <Star size={16} className="text-gold fill-gold" />
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="font-script text-4xl text-gradient-romantic mb-2">
            Little Love Notes
          </h2>
          <div className="flex items-center justify-center gap-2">
            <Heart size={16} className="text-heart fill-heart" />
            <span className="text-muted-foreground font-body text-sm">
              Words from my heart to yours
            </span>
            <Heart size={16} className="text-heart fill-heart" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {notes.map((note, index) => (
            <motion.div
              key={note.id}
              className="glass-card rounded-2xl p-6 text-center shadow-soft hover:shadow-romantic transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-4xl mb-4 block">{note.emoji}</span>
              <p className="font-body text-foreground leading-relaxed">
                "{note.text}"
              </p>
              <div className="mt-4 flex justify-center">
                <Heart size={20} className="text-pink-rose fill-pink-rose animate-heartbeat" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoveNotes;