 import { motion } from "framer-motion";
 import { Heart, ArrowRight, Star, Sparkles } from "lucide-react";
 import { useNavigate } from "react-router-dom";
 import FloatingHearts from "@/components/FloatingHearts";
 import CuteKitty from "@/components/CuteKitty";
 import { Button } from "@/components/ui/button";
 
 const wishes = [
   {
     wish: "May your year be filled with endless happiness and beautiful surprises",
     icon: "🌟",
   },
   {
     wish: "May all your dreams come true, one beautiful moment at a time",
     icon: "✨",
   },
   {
     wish: "May you always know how loved and cherished you are",
     icon: "💝",
   },
   {
     wish: "May laughter and joy follow you wherever you go",
     icon: "🦋",
   },
   {
     wish: "May this new year of your life be your best one yet",
     icon: "🎀",
   },
 ];
 
 const WishesForYou = () => {
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
           <motion.div
             animate={{ y: [0, -10, 0] }}
             transition={{ duration: 2, repeat: Infinity }}
           >
             <CuteKitty size="lg" />
           </motion.div>
           <h1 className="font-script text-5xl md:text-6xl text-gradient-romantic mt-6 mb-4">
             My Wishes For You
           </h1>
           <p className="text-muted-foreground font-body max-w-md mx-auto">
             On your special day, I wish you... 🎂
           </p>
         </motion.div>
 
         {/* Wishes */}
         <div className="max-w-2xl mx-auto space-y-6 mb-16">
           {wishes.map((item, index) => (
             <motion.div
               key={index}
               className="glass-card rounded-3xl p-8 text-center relative overflow-hidden"
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: index * 0.2 }}
             >
               <motion.span
                 className="text-5xl block mb-4"
                 animate={{ scale: [1, 1.2, 1], rotate: [0, 5, -5, 0] }}
                 transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }}
               >
                 {item.icon}
               </motion.span>
               <p className="font-body text-lg text-foreground leading-relaxed">
                 {item.wish}
               </p>
               
               {/* Decorative stars */}
               <motion.div
                 className="absolute top-4 left-4"
                 animate={{ opacity: [0.3, 1, 0.3] }}
                 transition={{ duration: 2, repeat: Infinity }}
               >
                 <Star size={16} className="text-gold fill-gold" />
               </motion.div>
               <motion.div
                 className="absolute top-4 right-4"
                 animate={{ opacity: [0.3, 1, 0.3] }}
                 transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
               >
                 <Star size={16} className="text-gold fill-gold" />
               </motion.div>
             </motion.div>
           ))}
         </div>
 
         {/* Final reveal teaser */}
         <motion.div
           className="text-center mb-8"
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 1.5 }}
         >
           <p className="font-script text-2xl text-pink-deep mb-2">
             But most importantly...
           </p>
           <div className="flex items-center justify-center gap-2">
             <Heart size={16} className="text-heart fill-heart animate-heartbeat" />
             <span className="text-muted-foreground font-body">
               There's something special waiting for you
             </span>
             <Heart size={16} className="text-heart fill-heart animate-heartbeat" />
           </div>
         </motion.div>
 
         {/* Next button */}
         <motion.div
           className="text-center"
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 2 }}
         >
           <Button
             onClick={() => navigate("/final-wish")}
             className="bg-gradient-to-r from-heart to-pink-rose text-white px-8 py-6 rounded-full text-lg font-body shadow-romantic hover:shadow-lg transition-all group animate-pulse"
           >
             Reveal My Final Wish
             <Sparkles className="ml-2" />
           </Button>
         </motion.div>
       </div>
     </div>
   );
 };
 
 export default WishesForYou;