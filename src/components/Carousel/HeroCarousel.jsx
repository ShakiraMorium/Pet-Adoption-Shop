// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import CarouselSlider from "../Carousel/CarouselSlider";
import banner from "../../assets/images/banner/love-2-removebg-preview.png";
import img2 from "../../assets/images/banner/freepik__upload__76956.png";

import img3 from "../../assets/images/banner/newban.png";

const HeroCarousel = () => {
  const slides = [
    {
      title: "Don't Buy Pets Adopt",
      subtitle: "Discount available. Grab it now!",
      image: banner,
    },
    {
      title: "Happy Pet Happy Human",
      subtitle: "A specialists label creating luxury essentials!",
      image: img2,
    },
    {
      title: "Love Your Pets.",
      subtitle: "Explore a range of devices for seamless living.",
      image: img3,
    },
  ];

  return (
    <>
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <CarouselSlider
              title={slide.title}
              subtitle={slide.subtitle}
              image={slide.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default HeroCarousel;