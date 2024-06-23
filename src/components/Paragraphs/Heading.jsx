import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

function Heading({ children }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <motion.h1
      ref={ref}
      initial={{ y: -50, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center mx-auto text-3xl my-8 font-semibold text-gray-600 font-serif"
    >
      {children}
    </motion.h1>
  );
}

export default Heading;
