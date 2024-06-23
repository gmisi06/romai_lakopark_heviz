import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

function Paragraph({ children }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ x: -100, opacity: 0 }}
      animate={inView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="indent-3 bg-white shadow m-5 p-3 rounded font-medium tracking-wide leading-relaxed grid gap-y-5 text-gray-900"
    >
      {children}
    </motion.div>
  );
}

export default Paragraph;
