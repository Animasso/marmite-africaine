import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Alloco from "../assets/AfriquePlat/Afrique/alloco.jpg";
import Foufou from "../assets/AfriquePlat/Afrique/foufou.jpg";
import Gombo from "../assets/AfriquePlat/Afrique/gombo.jpg";
import Mafe from "../assets/AfriquePlat/Afrique/mafé.jpg";
import Tiebou from "../assets/AfriquePlat/Afrique/tiebou.png";
import Yassa from "../assets/AfriquePlat/Afrique/yassa.avif";
import Pastel from "../assets/AfriquePlat/Afrique/pastel.jpg";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const images = [
  { src: Alloco, alt: "Alloco" },
  { src: Foufou, alt: "Foufou" },
  { src: Gombo, alt: "Gombo" },
  { src: Mafe, alt: "Mafé" },
  { src: Tiebou, alt: "Tiebou" },
  { src: Yassa, alt: "Yassa" },
  { src: Pastel, alt: "Pastel" },
];

const SwiperGallery = () => {
  return (
    <div className="max-w-5xl mx-auto my-20 px-4">
      <h2 className="text-3xl font-title font-bold text-[#8b0000] text-center mb-10">
        Nos Plats Africains
      </h2>
      <Swiper
        spaceBetween={20}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="rounded-xl shadow-xl"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center">
              <img
                src={image.src}
                alt={image.alt}
                className="h-96 w-auto object-cover rounded-xl shadow-lg border-4 border-white"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperGallery;
