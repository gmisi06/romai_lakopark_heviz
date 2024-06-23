import { motion } from "framer-motion";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

function Image({ src, open }) {
  const [loading, setLoading] = useState(true);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 50, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-96 shadow h-min overflow-hidden rounded-md h-64 relative"
      onClick={open}
    >
      <img
        className={`hover:scale-125 transition-all duration-500 cursor-pointer w-full h-full z-10 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
        src={src}
        onLoad={() => setLoading(false)}
        onError={() => setLoading(false)}
      />
      {loading && (
        <div className="w-full h-full bg-gray-300 absolute top-0 left-0 z-0 animate-pulse" />
      )}
    </motion.div>
  );
}

export default Image;
