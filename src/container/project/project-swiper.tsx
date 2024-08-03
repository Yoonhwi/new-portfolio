import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import ProjectJoinus from "./project-joinus";
import ProjectPortfolio from "./project-portfolio";

interface ProjectSwiperProps {
  setCurrentIndex: (index: number) => void;
  setSwiper: (swiper: SwiperClass) => void;
  swiper: SwiperClass | null;
}

const dummyData = [
  <ProjectPortfolio />,
  <ProjectJoinus />,
  <ProjectPortfolio />,
  <ProjectJoinus />,
];

const ProjectSwiper = ({
  setCurrentIndex,
  setSwiper,
  swiper,
}: ProjectSwiperProps) => {
  const handleSwiper = (swiper: SwiperClass) => {
    setSwiper(swiper);
  };

  const handleSlideChange = () => {
    if (!swiper) return;
    setCurrentIndex(swiper.realIndex);
  };

  return (
    <Swiper
      autoHeight
      grabCursor
      effect={"coverflow"}
      speed={700}
      modules={[EffectCoverflow]}
      className="mySwiper"
      onSwiper={handleSwiper}
      onSlideChange={handleSlideChange}
      spaceBetween={200}
    >
      {dummyData.map((el, idx) => {
        return <SwiperSlide key={`el_${idx}`}>{el}</SwiperSlide>;
      })}
    </Swiper>
  );
};

export default ProjectSwiper;
