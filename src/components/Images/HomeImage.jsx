import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

function HomeImage({ src }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <motion.img
      className="my-5 mx-auto rounded"
      src={src}
      ref={ref}
      initial={{ x: -100, opacity: 0 }}
      animate={inView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
      transition={{ duration: 0.5 }}
    />
  );
}

export default HomeImage;
