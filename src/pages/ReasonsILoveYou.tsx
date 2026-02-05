 import { motion } from "framer-motion";
 import { Heart, ArrowRight, Star } from "lucide-react";
 import { useNavigate } from "react-router-dom";
 import FloatingHearts from "@/components/FloatingHearts";
 import Sparkles from "@/components/Sparkles";
 import { Button } from "@/components/ui/button";
 
 const reasons = [
   "Your beautiful smile lights up my entire world",
   "The way you laugh makes my heart melt",
   "You understand me like no one else does",
   "Your kindness inspires me every day",
   "You make even ordinary moments magical",
   "The way you care for everyone around you",
   "Your dreams and ambitions amaze me",
   "You're my best friend and soulmate",
   "Every moment with you feels like home",
   "You make me want to be a better person",
 ];
 
 const ReasonsILoveYou = () => {
   const navigate = useNavigate();
 
   return (
     <div className="min-h-screen bg-romantic relative overflow-hidden">
       <FloatingHearts />
       <Sparkles />
       
       <div className="container mx-auto px-4 py-16">
         {/* Header */}
         <motion.div
           className="text-center mb-12"
           initial={{ opacity: 0, y: -20 }}
           animate={{ opacity: 1, y: 0 }}
         >
           <motion.div
             animate={{ rotate: [0, 10, -10, 0] }}
             transition={{ duration: 2, repeat: Infinity }}
           >
             <span className="text-6xl">💝</span>
           </motion.div>
           <h1 className="font-script text-5xl md:text-6xl text-gradient-romantic mt-6 mb-4">
             Reasons I Love You
           </h1>
           <p className="text-muted-foreground font-body max-w-md mx-auto">
             There are infinite reasons, but here are just a few... 💕
           </p>
         </motion.div>
 
         {/* Reasons grid */}
         <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
           {reasons.map((reason, index) => (
             <motion.div
               key={index}
               className="glass-card rounded-2xl p-6 flex items-center gap-4"
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ delay: index * 0.1 }}
               whileHover={{ scale: 1.02, y: -5 }}
             >
               <div className="flex-shrink-0">
                 <motion.div
                   animate={{ scale: [1, 1.2, 1] }}
                   transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.1 }}
                 >
                   <Heart size={24} className="text-heart fill-heart" />
                 </motion.div>
               </div>
               <p className="font-body text-foreground">{reason}</p>
             </motion.div>
           ))}
         </div>
 
         {/* Counter */}
         <motion.div
           className="text-center mb-12"
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 1.2 }}
         >
           <p className="font-script text-2xl text-pink-deep">
             And a million more reasons I discover every day...
           </p>
         </motion.div>
 
         {/* Next button */}
         <motion.div
           className="text-center"
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 1.5 }}
         >
           <Button
             onClick={() => navigate("/wishes-for-you")}
             className="bg-gradient-to-r from-heart to-pink-rose text-white px-8 py-6 rounded-full text-lg font-body shadow-romantic hover:shadow-lg transition-all group"
           >
             See My Wishes For You
             <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
           </Button>
         </motion.div>
       </div>
     </div>
   );
 };
 
 export default ReasonsILoveYou;