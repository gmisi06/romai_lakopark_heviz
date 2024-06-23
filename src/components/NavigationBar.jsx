import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimney,
  faImage,
  faMoneyBillWave,
  faAddressCard,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";

function NavigationBar() {
  const navigate = useNavigate();
  const detailsRef = useRef(null);

  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
    if (detailsRef.current) {
      detailsRef.current.removeAttribute("open");
    }
  };

  return (
    <nav className="z-10 bg-slate-900 text-white font-bold text-lg grid lg:flex gap-2 lg:gap-12 justify-center lg:justify-between px-5 py-3 shadow text-center tracking-wider sticky top-0 w-full h-fit">
      <div className="text-center lg:flex lg:items-center">Római Lakópark</div>
      <div className="grid lg:flex gap-1 lg:gap-12 lg:block hidden">
        <motion.button
          className="px-2 py-1 hover:bg-slate-700 rounded shadow bg-slate-800 w-36 cursor-pointer"
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          onClick={() => {
            navigate("/");
            window.scrollTo(0, 0);
          }}
        >
          <FontAwesomeIcon icon={faHouseChimney} className="mr-1" />
          Kezdőlap
        </motion.button>

        <motion.div
          className="px-2 py-1 hover:bg-slate-700 rounded shadow bg-slate-800 w-36 cursor-pointer"
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          onClick={() => {
            navigate("/galeria");
            window.scrollTo(0, 0);
          }}
        >
          <FontAwesomeIcon icon={faImage} className="mr-1" />
          Galéria
        </motion.div>

        <motion.div
          className="px-2 py-1 hover:bg-slate-700 rounded shadow bg-slate-800 w-36 cursor-pointer"
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          onClick={() => {
            navigate("/araink");
            window.scrollTo(0, 0);
          }}
        >
          <FontAwesomeIcon icon={faMoneyBillWave} className="mr-1" />
          Áraink
        </motion.div>

        <motion.div
          className="px-2 py-1 hover:bg-slate-700 rounded shadow bg-slate-800 w-36 cursor-pointer"
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          onClick={() => navigate("/kapcsolat")}
        >
          <FontAwesomeIcon icon={faAddressCard} className="mr-1" />
          Kapcsolat
        </motion.div>
      </div>
      <div className="lg:hidden block w-screen">
        <details ref={detailsRef} className="dropdown w-full">
          <summary className="list-none text-2xl">
            <FontAwesomeIcon className="cursor-pointer" icon={faBars} />
          </summary>
          <ul className="p-2 shadow dropdown-content z-[1] bg-slate-900 w-full leading-loose">
            <li>
              <button onClick={() => handleNavigate("/")}>
                <FontAwesomeIcon icon={faHouseChimney} className="mr-1" />
                Kezdőlap
              </button>
            </li>
            <li>
              <button onClick={() => handleNavigate("/galeria")}>
                <FontAwesomeIcon icon={faImage} className="mr-1" />
                Galéria
              </button>
            </li>
            <li>
              <button onClick={() => handleNavigate("/araink")}>
                <FontAwesomeIcon icon={faMoneyBillWave} className="mr-1" />
                Áraink
              </button>
            </li>
            <li>
              <button onClick={() => handleNavigate("/kapcsolat")}>
                <FontAwesomeIcon icon={faAddressCard} className="mr-1" />
                Kapcsolat
              </button>
            </li>
          </ul>
        </details>
      </div>
    </nav>
  );
}

export default NavigationBar;
