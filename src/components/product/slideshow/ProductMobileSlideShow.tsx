"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import Image from "next/image";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";

interface Props {
  title: string;
  images: string[];
  className?: string;
}
export const ProductMobileSlideShow = ({ title, images, className }: Props) => {
  return (
    <div className={className}>
      <Swiper
        style={{
          width: "100vw",
          maxHeight: "600px"
        }}
        loop={true}
        pagination={true}
        autoplay={{
          delay: 2500,
        }}
        modules={[FreeMode, Autoplay, Pagination]}
        className="mySwiper2"
      >
        {images.map((image) => (
          <SwiperSlide key={image}>
            <Image
              src={`/products/${image}`}
              alt={title}
              width={600}
              height={500}
              className="objectfill"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
