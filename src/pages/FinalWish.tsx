 import { useState, useEffect } from "react";
 import { motion, AnimatePresence } from "framer-motion";
 import { Heart, Sparkles, Star, PartyPopper } from "lucide-react";
 import FloatingHearts from "@/components/FloatingHearts";
 import CuteKitty from "@/components/CuteKitty";
 import cuteKittyImage from "@/assets/cute-kitty.png";
 
 const FinalWish = () => {
   const [stage, setStage] = useState(0);
   const [showConfetti, setShowConfetti] = useState(false);
 
   useEffect(() => {
     const timers = [
       setTimeout(() => setStage(1), 1000),
       setTimeout(() => setStage(2), 2500),
       setTimeout(() => setStage(3), 4000),
       setTimeout(() => {
         setStage(4);
         setShowConfetti(true);
       }, 5500),
     ];
 
     return () => timers.forEach(clearTimeout);
   }, []);
 
   return (
     <div className="min-h-screen bg-romantic relative overflow-hidden flex items-center justify-center">
       <FloatingHearts />
       
       {/* Confetti effect */}
       {showConfetti && (
         <div className="fixed inset-0 pointer-events-none z-50">
           {[...Array(50)].map((_, i) => (
             <motion.div
               key={i}
               className="absolute"
               style={{
                 left: `${Math.random() * 100}%`,
                 top: "-20px",
               }}
               animate={{
                 y: ["0vh", "100vh"],
                 rotate: [0, 360 * (Math.random() > 0.5 ? 1 : -1)],
                 opacity: [1, 0],
               }}
               transition={{
                 duration: 3 + Math.random() * 2,
                 repeat: Infinity,
                 delay: Math.random() * 2,
               }}
             >
               {i % 4 === 0 ? (
                 <Heart size={16} className="text-heart fill-heart" />
               ) : i % 4 === 1 ? (
                 <Star size={16} className="text-gold fill-gold" />
               ) : i % 4 === 2 ? (
                 <span className="text-2xl">🎀</span>
               ) : (
                 <span className="text-2xl">✨</span>
               )}
             </motion.div>
           ))}
         </div>
       )}
 
       <div className="container mx-auto px-4 py-16 text-center">
         <AnimatePresence mode="wait">
           {stage === 0 && (
             <motion.div
               key="stage0"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               className="text-center"
             >
               <motion.div
                 animate={{ scale: [1, 1.2, 1] }}
                 transition={{ duration: 1, repeat: Infinity }}
               >
                 <Heart size={80} className="text-heart fill-heart mx-auto" />
               </motion.div>
             </motion.div>
           )}
 
           {stage === 1 && (
             <motion.div
               key="stage1"
               initial={{ opacity: 0, scale: 0.5 }}
               animate={{ opacity: 1, scale: 1 }}
               exit={{ opacity: 0, scale: 0.5 }}
             >
               <h2 className="font-script text-4xl md:text-5xl text-pink-deep mb-4">
                 Close your eyes for a moment...
               </h2>
               <motion.div
                 animate={{ opacity: [0.5, 1, 0.5] }}
                 transition={{ duration: 2, repeat: Infinity }}
               >
                 <Sparkles size={40} className="text-gold mx-auto" />
               </motion.div>
             </motion.div>
           )}
 
           {stage === 2 && (
             <motion.div
               key="stage2"
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -20 }}
             >
               <h2 className="font-script text-4xl md:text-5xl text-pink-deep mb-4">
                 Take a deep breath...
               </h2>
               <div className="flex justify-center gap-4">
                 {[...Array(3)].map((_, i) => (
                   <motion.div
                     key={i}
                     animate={{ scale: [0.8, 1.2, 0.8] }}
                     transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
                   >
                     <Heart size={30} className="text-heart fill-heart" />
                   </motion.div>
                 ))}
               </div>
             </motion.div>
           )}
 
           {stage === 3 && (
             <motion.div
               key="stage3"
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               exit={{ opacity: 0, scale: 1.2 }}
             >
               <h2 className="font-script text-4xl md:text-5xl text-pink-deep mb-4">
                 Now open them...
               </h2>
               <motion.div
                 animate={{ rotate: [0, 360] }}
                 transition={{ duration: 2, repeat: Infinity }}
               >
                 <Star size={50} className="text-gold fill-gold mx-auto" />
               </motion.div>
             </motion.div>
           )}
 
           {stage === 4 && (
             <motion.div
               key="stage4"
               initial={{ opacity: 0, scale: 0 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ type: "spring", duration: 0.8 }}
               className="max-w-2xl mx-auto"
             >
               {/* Main reveal */}
               <motion.div
                 className="glass-card rounded-3xl p-8 md:p-12 shadow-romantic relative overflow-hidden"
                 animate={{ boxShadow: ["0 0 30px rgba(236, 72, 153, 0.3)", "0 0 60px rgba(236, 72, 153, 0.5)", "0 0 30px rgba(236, 72, 153, 0.3)"] }}
                 transition={{ duration: 2, repeat: Infinity }}
               >
                 {/* Floating decorations */}
                 <div className="absolute inset-0 pointer-events-none overflow-hidden">
                   {[...Array(12)].map((_, i) => (
                     <motion.div
                       key={i}
                       className="absolute"
                       style={{
                         left: `${5 + i * 8}%`,
                         bottom: "-10px",
                       }}
                       animate={{
                         y: [-10, -100],
                         opacity: [0, 1, 0],
                       }}
                       transition={{
                         duration: 2 + i * 0.2,
                         repeat: Infinity,
                         delay: i * 0.2,
                       }}
                     >
                       <Heart size={12 + i} className="text-heart fill-heart" />
                     </motion.div>
                   ))}
                 </div>
 
                 {/* Kitty */}
                 <motion.div
                   animate={{ y: [0, -15, 0] }}
                   transition={{ duration: 2, repeat: Infinity }}
                   className="mb-6"
                 >
                   <img
                     src={cuteKittyImage}
                     alt="Cute Kitty"
                     className="w-32 h-32 mx-auto drop-shadow-lg"
                   />
                 </motion.div>
 
                 {/* Main message */}
                 <motion.div
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.5 }}
                 >
                   <div className="flex items-center justify-center gap-3 mb-4">
                     <PartyPopper size={32} className="text-gold" />
                     <h1 className="font-script text-5xl md:text-7xl text-gradient-romantic">
                       Happy Birthday!
                     </h1>
                     <PartyPopper size={32} className="text-gold" />
                   </div>
 
                   <motion.div
                     className="flex items-center justify-center gap-2 mb-6"
                     animate={{ scale: [1, 1.05, 1] }}
                     transition={{ duration: 1.5, repeat: Infinity }}
                   >
                     <Sparkles size={24} className="text-gold" />
                     <h2 className="font-script text-3xl md:text-4xl text-pink-deep">
                       My Beautiful Love
                     </h2>
                     <Sparkles size={24} className="text-gold" />
                   </motion.div>
 
                   <div className="space-y-4 font-body text-foreground leading-relaxed mb-8">
                     <p>
                       On this special day, I want you to know that you are the most 
                       precious gift life has ever given me.
                     </p>
                     <p>
                       You fill my days with joy, my heart with love, and my life with 
                       meaning. Thank you for being you. 💕
                     </p>
                   </div>
 
                   {/* I Love You */}
                   <motion.div
                     className="py-6 px-8 rounded-2xl bg-gradient-to-r from-heart/20 via-pink-rose/20 to-heart/20"
                     animate={{ scale: [1, 1.02, 1] }}
                     transition={{ duration: 2, repeat: Infinity }}
                   >
                     <p className="font-script text-4xl md:text-5xl text-gradient-romantic mb-2">
                       I Love You
                     </p>
                     <p className="font-script text-2xl text-pink-deep">
                       Forever & Always 💝
                     </p>
                   </motion.div>
 
                   {/* Hearts row */}
                   <motion.div
                     className="flex justify-center gap-3 mt-8"
                     animate={{ scale: [1, 1.1, 1] }}
                     transition={{ duration: 1.5, repeat: Infinity }}
                   >
                     {[...Array(7)].map((_, i) => (
                       <motion.div
                         key={i}
                         animate={{ y: [0, -5, 0] }}
                         transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
                       >
                         <Heart
                           size={20 + (i === 3 ? 10 : 0)}
                           className="text-heart fill-heart"
                         />
                       </motion.div>
                     ))}
                   </motion.div>
                 </motion.div>
               </motion.div>
 
               {/* Footer message */}
               <motion.p
                 className="mt-8 font-body text-muted-foreground"
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 1.5 }}
               >
                 Made with all my love, just for you 🐱💕
               </motion.p>
             </motion.div>
           )}
         </AnimatePresence>
       </div>
     </div>
   );
 };
 
 export default FinalWish;