import { motion } from "framer-motion";

interface PreloaderProps {
  size?: number;
  duration?: number;
}
const Preloader = ({ size = 100, duration = 0.7 }: PreloaderProps) => {
  return (
    <motion.img
      animate={{
        rotate: "360deg",
        transition: {
          repeat: Infinity,
          ease: "linear",
          duration,
        },
      }}
      src="/logo-icon.svg"
      width={size}
      alt="preloader"
    />
  );
};

export default Preloader;
