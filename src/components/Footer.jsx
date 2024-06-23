import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import FooterButton from "./Buttons/FooterButton";

function Footer() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.4,
  });

  return (
    <footer className="bg-slate-900 p-5 mt-auto mb-0">
      <div className="grid sm:grid-cols-2 text-gray-200 w-3/6 mx-auto min-w-80 relative text-center">
        <motion.div
          className="sm:pr-5 grid gap-y-2 sm:text-right"
          initial={{ x: -50, opacity: 0 }}
          ref={ref}
          animate={inView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <p>Római Lakópark Hévíz</p>
          <p>
            <FontAwesomeIcon icon={faLocationDot} /> 8380 Hévíz, Római utca 3.
          </p>
          <p>Magyarország (HU)</p>
          <p>
            <FontAwesomeIcon icon={faPhone} /> Telefon: +36302241844
          </p>
        </motion.div>
        <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 bg-gray-200 w-1 h-full text-center" />
        <motion.div
          className="sm:hidden block h-1 bg-gray-200 w-full my-2"
          initial={{ opacity: 0 }}
          ref={ref}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
        />
        <motion.div
          className="sm:pl-5 grid justify-center sm:justify-start"
          initial={{ x: 50, opacity: 0 }}
          ref={ref}
          animate={inView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <FooterButton to="/">Kezdőlap</FooterButton>
          <FooterButton to="/galeria">Galéria</FooterButton>
          <FooterButton to="/araink">Áraink</FooterButton>
          <FooterButton to="/kapcsolat">Kapcsolat</FooterButton>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
