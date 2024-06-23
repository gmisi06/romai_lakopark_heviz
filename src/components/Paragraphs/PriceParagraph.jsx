import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

function PriceParagraph({ children }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ y: -10, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : { y: -10, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="indent-3 bg-white shadow m-5 p-3 rounded font-medium tracking-wide leading-relaxed grid gap-y-5 text-gray-900"
    >
      {children}
    </motion.div>
  );
}

export default PriceParagraph;
