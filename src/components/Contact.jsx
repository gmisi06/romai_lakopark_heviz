import Heading from "./Paragraphs/Heading";
import Paragraph from "./Paragraphs/Paragraph";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <main className="w-10/12 mx-auto">
      <Heading>Kapcsolat</Heading>
      <Paragraph>
        <p className="indent-0">
          <span className="font-bold">
            <FontAwesomeIcon className="mr-1" icon={faEnvelope} />
            Email:
          </span>
          <br />
          lanczzs@gmail.com
        </p>
        <p className="indent-0">
          <span className="font-bold">
            <FontAwesomeIcon icon={faLocationDot} className="mr-1" /> Cím:
          </span>
          <br />
          8380 Hévíz, Római utca 3.
          <br />
          Magyarország (HU)
        </p>
        <p className="indent-0">
          <span className="font-bold">
            <FontAwesomeIcon icon={faPhone} className="mr-1" />
            Telefon:
          </span>
          <br />
          +36 30 224 1844
        </p>
      </Paragraph>
    </main>
  );
}

export default Contact;
