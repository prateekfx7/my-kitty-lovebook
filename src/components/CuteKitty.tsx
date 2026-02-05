import { motion } from "framer-motion";

interface CuteKittyProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const CuteKitty = ({ className = "", size = "md" }: CuteKittyProps) => {
  const sizeClasses = {
    sm: "w-12 h-12",
    md: "w-20 h-20",
    lg: "w-32 h-32",
  };

  return (
    <motion.svg
      viewBox="0 0 100 100"
      className={`${sizeClasses[size]} ${className}`}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", duration: 0.6 }}
    >
      {/* Ears */}
      <path
        d="M20 35 L30 15 L40 35 Z"
        fill="hsl(340, 70%, 85%)"
        stroke="hsl(340, 80%, 70%)"
        strokeWidth="2"
      />
      <path
        d="M60 35 L70 15 L80 35 Z"
        fill="hsl(340, 70%, 85%)"
        stroke="hsl(340, 80%, 70%)"
        strokeWidth="2"
      />
      {/* Inner ears */}
      <path d="M25 32 L30 20 L35 32 Z" fill="hsl(350, 90%, 65%)" />
      <path d="M65 32 L70 20 L75 32 Z" fill="hsl(350, 90%, 65%)" />
      
      {/* Face */}
      <ellipse
        cx="50"
        cy="55"
        rx="35"
        ry="30"
        fill="hsl(340, 70%, 85%)"
        stroke="hsl(340, 80%, 70%)"
        strokeWidth="2"
      />
      
      {/* Blush */}
      <ellipse cx="25" cy="60" rx="8" ry="5" fill="hsl(350, 90%, 80%)" opacity="0.6" />
      <ellipse cx="75" cy="60" rx="8" ry="5" fill="hsl(350, 90%, 80%)" opacity="0.6" />
      
      {/* Eyes - closed happy */}
      <motion.path
        d="M35 50 Q40 45 45 50"
        fill="none"
        stroke="hsl(340, 40%, 30%)"
        strokeWidth="3"
        strokeLinecap="round"
        animate={{ scaleY: [1, 0.8, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.path
        d="M55 50 Q60 45 65 50"
        fill="none"
        stroke="hsl(340, 40%, 30%)"
        strokeWidth="3"
        strokeLinecap="round"
        animate={{ scaleY: [1, 0.8, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      
      {/* Nose */}
      <ellipse cx="50" cy="58" rx="4" ry="3" fill="hsl(350, 90%, 65%)" />
      
      {/* Mouth */}
      <path
        d="M50 61 Q45 68 40 65"
        fill="none"
        stroke="hsl(340, 40%, 30%)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M50 61 Q55 68 60 65"
        fill="none"
        stroke="hsl(340, 40%, 30%)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      
      {/* Whiskers */}
      <g stroke="hsl(340, 40%, 40%)" strokeWidth="1.5" strokeLinecap="round">
        <line x1="15" y1="55" x2="30" y2="57" />
        <line x1="15" y1="62" x2="30" y2="62" />
        <line x1="15" y1="69" x2="30" y2="67" />
        <line x1="85" y1="55" x2="70" y2="57" />
        <line x1="85" y1="62" x2="70" y2="62" />
        <line x1="85" y1="69" x2="70" y2="67" />
      </g>
    </motion.svg>
  );
};

export default CuteKitty;