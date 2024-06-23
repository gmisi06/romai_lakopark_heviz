import Heading from "./Paragraphs/Heading";
import IMG_1131 from "../assets/img/IMG_1131.jpg";
import IMG_1132 from "../assets/img/IMG_1132.jpg";
import IMG_1133 from "../assets/img/IMG_1133.jpg";
import IMG_1134 from "../assets/img/IMG_1134.jpg";
import IMG_1135 from "../assets/img/IMG_1135.jpg";
import IMG_1136 from "../assets/img/IMG_1136.jpg";
import IMG_1137 from "../assets/img/IMG_1137.jpg";
import IMG_1139 from "../assets/img/IMG_1139.jpg";
import IMG_1140 from "../assets/img/IMG_1140.jpg";
import IMG_1142 from "../assets/img/IMG_1142.jpg";
import IMG_1143 from "../assets/img/IMG_1143.jpg";
import IMG_1144 from "../assets/img/IMG_1144.jpg";
import A19_1 from "../assets/img/A19/20210629_085754.jpg";
import A19_2 from "../assets/img/A19/20210629_085746.jpg";
import A19_3 from "../assets/img/A19/20210629_085336.jpg";
import A19_4 from "../assets/img/A19/20210629_085244.jpg";
import A19_5 from "../assets/img/A19/20210629_085645.jpg";
import A19_6 from "../assets/img/A19/20210629_085552.jpg";
import Image from "./Images/Image";
import Carousel from "./Images/Carousel";
import { useEffect, useState } from "react";

const images = [
  IMG_1131,
  IMG_1132,
  IMG_1133,
  IMG_1134,
  IMG_1135,
  IMG_1136,
  IMG_1137,
  IMG_1139,
  IMG_1140,
  IMG_1142,
  IMG_1143,
  IMG_1144,
  A19_1,
  A19_2,
  A19_3,
  A19_4,
  A19_5,
  A19_6,
];

function Gallery() {
  const [carousel, setCarousel] = useState({ active: false, id: 0 });

  useEffect(() => {
    if (carousel.active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [carousel]);

  return (
    <>
      {carousel.active && (
        <Carousel images={images} setCarousel={setCarousel} id={carousel.id} />
      )}
      <main className="w-10/12 mx-auto mb-16">
        <Heading>Galéria</Heading>

        <Heading>A környezet</Heading>

        <section className="flex justify-around flex-wrap gap-5">
          {images.slice(0, 12).map((image, index) => (
            <Image
              key={index}
              src={image}
              open={() => setCarousel({ active: true, id: index })}
            />
          ))}
        </section>

        <div className="h-1 bg-gray-300 my-16 mx-32" />

        <Heading>Az apartman</Heading>

        <section className="flex justify-around flex-wrap gap-5">
          {images.slice(12).map((image, index) => (
            <Image
              key={index}
              src={image}
              open={() => setCarousel({ active: true, id: index + 12 })}
            />
          ))}
        </section>
      </main>
    </>
  );
}

export default Gallery;
