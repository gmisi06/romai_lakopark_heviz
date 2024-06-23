import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function ToGallaryButton() {
  const navigate = useNavigate();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <motion.button
      className="bg-slate-900 hover:bg-slate-700 tr text-white text-center px-2 py-1 font-semibold rounded shadow ease-in-out"
      initial={{ y: -20, opacity: 0 }}
      ref={ref}
      animate={inView ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
      transition={{ duration: 1 }}
      onClick={() => navigate("/galeria")}
    >
      Ugrás a képekhez
    </motion.button>
  );
}

export default ToGallaryButton;
