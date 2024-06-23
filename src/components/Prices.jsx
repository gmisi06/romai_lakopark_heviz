import { motion } from "framer-motion";
import Heading from "./Paragraphs/Heading";
import PriceParagraph from "./Paragraphs/PriceParagraph";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareParking,
  faPersonSwimming,
  faMoneyBillWave,
} from "@fortawesome/free-solid-svg-icons";

function Prices() {
  return (
    <main className="w-10/12 mx-auto">
      <Heading>Áraink</Heading>
      <div className="overflow-x-auto">
        <motion.table
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="table text-xs sm:text-lg text-slate-700 font-semibold"
        >
          <thead>
            <tr className="bg-slate-900 text-slate-300">
              <th></th>
              <th>2 fő/éj</th>
              <th>3 fő/éj</th>
              <th>4 fő/éj</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>2-6 éj</th>
              <motion.td
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                17.000 Ft
              </motion.td>
              <motion.td
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                19.000 Ft
              </motion.td>
              <motion.td
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                21.000 Ft
              </motion.td>
            </tr>
          </tbody>
        </motion.table>
      </div>

      <PriceParagraph>
        <p className="indent-0 mb-0">Az áraink tartalmazzák:</p>
        <ul>
          <li>
            <FontAwesomeIcon icon={faMoneyBillWave} className="text-xl mr-2" />
            szállásdíjat
          </li>
          <li>
            <FontAwesomeIcon icon={faPersonSwimming} className="text-xl mr-2" />
            medence és teniszpálya használatát
          </li>
          <li>
            <FontAwesomeIcon icon={faSquareParking} className="text-xl mr-2" />
            parkolóhelyet a gépkocsi számára
          </li>
        </ul>
        <p className="indent-0 mb-0">
          SZÉP kártyát (OTP, K&H, MKB) elfogadunk! Az apartman az érkezés napján
          14 órától foglalható el, elutazás napján pedig 10 óráig áll kedves
          Vendégeink rendelkezésére.
        </p>
      </PriceParagraph>
      <Heading>Egész évben várjuk Kedves Vendégeinket!</Heading>
    </main>
  );
}

export default Prices;
