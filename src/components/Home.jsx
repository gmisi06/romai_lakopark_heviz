import { motion } from "framer-motion";
import Paragraph from "./Paragraphs/Paragraph";
import reactsvg from "../assets/IMG_1135_elokep.jpg";
import headerbg from "../assets/IMG_1133.jpg";
import { Link } from "react-scroll";
import Heading from "./Paragraphs/Heading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import ToGallaryButton from "./Buttons/ToGallaryButton";
import HomeImage from "./Images/HomeImage";

function Home() {
  return (
    <div className="relative">
      <div className="bg-slate-900 h-screen w-full relative shadow select-none">
        <img
          className="absolute w-full h-full object-cover brightness-50 shadow"
          src={headerbg}
        ></img>
        <div className="backdrop-blur w-full h-full flex flex-col items-center justify-center">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center font-serif bg-wdhite -mt-64 py-2 px-4 text-4xl md:text-8xl text-white font-bold tracking-wider drop-shadow-[1.5px_1.5px_1.5px_rgba(0,0,0,0.8)]"
          >
            Római Lakópark Hévíz
          </motion.h1>
          <Link to="main" smooth={true} duration={1000}>
            <motion.button
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="absolute bottom-64 md:bottom-40 left-0 right-0 ml-auto mr-auto w-48 text-center bg-white text-slate-900 rounded font-bold px-3 py-1 text-lg hover:bg-gray-300"
            >
              <div className="animate-bounce w-full text-center text-white absolute text-2xl left-0 -bottom-10">
                <FontAwesomeIcon icon={faAngleDown} />
              </div>
              Tovább olvasok
            </motion.button>
          </Link>
        </div>
      </div>
      <main id="main" className="w-10/12 max-w-6xl my-20 pt-20 mx-auto">
        <Heading>Üdvözöljük!</Heading>
        <div className="grid lg:grid-cols-2">
          <HomeImage src={reactsvg} />{" "}
          <div>
            <Paragraph>
              Ha Ön pihenésre, kikapcsolódásra, csendre vágyik, ahol reggelente
              madarak csicsergésére ébredhet és egy gyönyörű zöld parkban
              gyönyörködhet, akkor válassza apartmanjainkat!
            </Paragraph>
            <Paragraph>
              Az aktív pihenést kedvelőket szabadtéri úszómedence, napozóágy,
              kerti kiülő és teniszpálya várja. Gyermekei önfeledten
              futkározhatnak és játszhatnak a játékelemekkel kibővített
              pihenőparkban.
            </Paragraph>
            <Paragraph>
              Gépkocsiját zárt parkolóban, távirányítóval működtetett
              kapubejárattal tudhatja biztonságban.
            </Paragraph>
            <Paragraph>
              Apartmanjaink a gyógyfürdő bejáratától mindössze 600 m-re, 15 perc
              sétára találhatóak a város déli részén. 1 km-en belül
              megtalálhatóak élelmiszerbolt (SPAR), éttermek.
            </Paragraph>
          </div>
        </div>

        <div className="h-1 bg-gray-300 my-16 mx-16" />

        <Heading>Appartmanjaink</Heading>

        <section>
          <Paragraph>
            Tágas, 46 m2 alapterületű apartmanjaink 2-4 fő részére biztosítanak
            kényelmes és otthonos szálláslehetőséget, továbbá vendégeink
            kényelmet szolgálja az épületekben található lift.
          </Paragraph>

          <Paragraph>
            <p>
              A lépcsőházból az apartmanba belépve az előszobába érkezünk, innen
              nyílik a kádas fürdőszoba toalettel, továbbhaladva a nappaliba
              léphetünk.
            </p>
            <p>
              A nappali egyik sarkában kapott helyet a jól felszerelt konyha
              (hűtőszekrény, villanytűzhely, mikrohullámú sütő, kávéfőző és
              további konyhai felszerelések, eszközök). A nappali másik felében
              található az ággyá alakítható kanapé ahonnan kényelmesen lehet
              nézni a televíziót, valamint innen nyílik a franciaágyas hálószoba
              és innen juthatunk ki a kerti bútorokkal ellátott erkélyre.
            </p>
          </Paragraph>
          <div className="flex justify-center sm:justify-end sm:mx-32 mt-10">
            <ToGallaryButton />
          </div>
        </section>

        <div className="h-1 bg-gray-300 my-16 mx-16" />

        <Heading>Önök írták Rólunk...</Heading>

        <div>
          <Paragraph>
            „Tiszta, kényelmes apartman, rendkívül nyugodt, zöld környezetben.
            Még szeretnénk visszatérni.”
          </Paragraph>
          <Paragraph>
            „Minden tekintetben jó volt; tágas, tiszta, csendes és a személyzet
            is segítőkész volt.”
          </Paragraph>
          <Paragraph>
            „Csendes, nyugodt környezetben pihenhettem itt a barátaimmmal. A
            fogadtatás kedves és barátságos volt. A park, a kert csodás. A lift
            és az autó biztonságos parkolása is nagyon tetszett. A lakás tiszta
            tágas, ízlésesen berendezett. Kényelmes fekhelyek, jól felszerelt
            konyha, minden tiszta, rendezett. Köszönöm, hogy itt lehettünk!”
          </Paragraph>
          <Paragraph>
            „Nagyon jó volt a szoba, csendes környék. Kutyus ki tudott menni
            könnyen. Felszereltsége a lakásnak fullos mindenféle téren. Jövőre
            is akarunk menni pont ebbe a lakásba, ha lehetséges. Gyalog közel
            volt, ahova el akartunk menni.”
          </Paragraph>
        </div>
      </main>
    </div>
  );
}

export default Home;
