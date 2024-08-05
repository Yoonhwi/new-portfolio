import {
  calendarData,
  cookaData,
  joinusData,
  portfolioData,
} from "@/constants";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import ProjectItem from "./project-item";

interface ProjectSwiperProps {
  setCurrentIndex: (index: number) => void;
  setSwiper: (swiper: SwiperClass) => void;
  swiper: SwiperClass | null;
}

const dummyData = [
  <ProjectItem data={portfolioData} />,
  <ProjectItem data={joinusData} />,
  <ProjectItem data={calendarData} />,
  <ProjectItem data={cookaData} />,
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
      speed={700}
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
