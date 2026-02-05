 import { motion } from "framer-motion";
 import { Heart, ArrowRight, Sparkles } from "lucide-react";
 import { useNavigate } from "react-router-dom";
 import FloatingHearts from "@/components/FloatingHearts";
 import CuteKitty from "@/components/CuteKitty";
 import { Button } from "@/components/ui/button";
 
 const storyMoments = [
   {
     title: "The Day We Met",
     description: "The universe brought us together, and I knew from that moment my life would never be the same.",
     emoji: "✨",
   },
   {
     title: "Our First Date",
     description: "Butterflies, nervous smiles, and the beginning of our beautiful adventure together.",
     emoji: "🦋",
   },
   {
     title: "When I Knew",
     description: "There was a moment when I looked at you and realized you were the one I'd been waiting for.",
     emoji: "💫",
   },
   {
     title: "Every Day Since",
     description: "Each day with you has been a gift, filled with love, laughter, and endless happiness.",
     emoji: "💝",
   },
 ];
 
 const OurStory = () => {
   const navigate = useNavigate();
 
   return (
     <div className="min-h-screen bg-romantic relative overflow-hidden">
       <FloatingHearts />
       
       <div className="container mx-auto px-4 py-16">
         {/* Header */}
         <motion.div
           className="text-center mb-16"
           initial={{ opacity: 0, y: -20 }}
           animate={{ opacity: 1, y: 0 }}
         >
           <CuteKitty size="md" />
           <h1 className="font-script text-5xl md:text-6xl text-gradient-romantic mt-6 mb-4">
             Our Love Story
           </h1>
           <p className="text-muted-foreground font-body max-w-md mx-auto">
             Every love story is beautiful, but ours is my favorite 💕
           </p>
         </motion.div>
 
         {/* Story moments */}
         <div className="max-w-2xl mx-auto space-y-8 mb-16">
           {storyMoments.map((moment, index) => (
             <motion.div
               key={index}
               className="glass-card rounded-3xl p-8 relative overflow-hidden"
               initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: index * 0.2 }}
             >
               <div className="flex items-start gap-4">
                 <span className="text-4xl">{moment.emoji}</span>
                 <div>
                   <h3 className="font-script text-2xl text-pink-deep mb-2">
                     {moment.title}
                   </h3>
                   <p className="font-body text-foreground leading-relaxed">
                     {moment.description}
                   </p>
                 </div>
               </div>
               <motion.div
                 className="absolute top-4 right-4"
                 animate={{ scale: [1, 1.2, 1] }}
                 transition={{ duration: 2, repeat: Infinity }}
               >
                 <Heart size={20} className="text-heart fill-heart" />
               </motion.div>
             </motion.div>
           ))}
         </div>
 
         {/* Next button */}
         <motion.div
           className="text-center"
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 1 }}
         >
           <Button
             onClick={() => navigate("/reasons-i-love-you")}
             className="bg-gradient-to-r from-heart to-pink-rose text-white px-8 py-6 rounded-full text-lg font-body shadow-romantic hover:shadow-lg transition-all group"
           >
             Continue Our Journey
             <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
           </Button>
         </motion.div>
       </div>
     </div>
   );
 };
 
 export default OurStory;