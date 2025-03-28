import TestimonialCard from "../modules/testimonial";
import SectionHeader from "./section-header";
import { Swiper, SwiperSlide } from "swiper/react";
// @ts-ignore
import "swiper/css";

const TestimonialSection = () => {
  return (
    <div>
      <div className="p-12 container mx-auto">
        <SectionHeader
          title="Testimonial"
          info="Here’s what some users who have hopped on the Bllow have to say."
        />

        <div className="my-7">
          <Swiper
            spaceBetween={50}
            slidesPerView={1.2}
            breakpoints={{
              600: {
                slidesPerView: 3,
              },
            }}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {new Array(10).fill(0).map((_, index) => {
              return (
                <SwiperSlide>
                  <TestimonialCard key={index} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
