import { CenterLayout } from "@/components";
import { darkBgColor, lightFilter, parentBoxShadow } from "@/constants";
import {
  useBoxScaleAnimation,
  useLayout,
  useSection,
  useTextAnimation,
} from "@/hooks";
import { Box, Flex, Heading, Icon } from "@chakra-ui/react";
import gsap from "gsap";
import { useCallback, useEffect, useRef, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import ProjectSwiper from "./project-swiper";
import { SwiperClass } from "swiper/react";

const dummy = [{}, {}, {}, {}];

const Project = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);
  const { layout } = useLayout();

  const { registerSection } = useSection();
  const projectRef = useRef<HTMLDivElement>(null);
  const arrowLeftRef = useRef<HTMLDivElement>(null);
  const arrowRightRef = useRef<HTMLDivElement>(null);
  const headRef = useTextAnimation();
  const scaleRef = useBoxScaleAnimation();

  useEffect(() => {
    const el = projectRef.current;
    if (!el) return;
    registerSection("PROJECTS", el);
  }, [registerSection]);

  useEffect(() => {
    const arrowLeft = arrowLeftRef.current;
    const arrowRight = arrowRightRef.current;

    if (!arrowLeft || !arrowRight) return;

    const tl = gsap.timeline({ repeat: -1 });

    tl.to([arrowLeft, arrowRight], {
      x: (index) => (index === 0 ? -15 : 15),
      duration: 1,
      ease: "power1.inOut",
    }).to([arrowLeft, arrowRight], {
      x: 0,
      duration: 1,
      ease: "power1.inOut",
    });

    return () => {
      tl.kill();
    };
  }, []);

  const handleDotClick = useCallback(
    (index: number) => {
      if (!swiper) return;
      swiper.slideToLoop(index);
    },
    [swiper]
  );

  return (
    <Box
      minH={"100vh"}
      bgColor={darkBgColor}
      ref={projectRef}
      py={28}
      boxShadow={parentBoxShadow}
      position={"relative"}
      zIndex={1}
    >
      <CenterLayout>
        <Flex
          direction={"column"}
          w={"100%"}
          gap={12}
          color={"white"}
          alignItems={"center"}
          position={"relative"}
          overflow={"hidden"}
          py={4}
          ref={scaleRef}
        >
          <Heading size={"2xl"} ref={headRef}>
            PROJECTS
          </Heading>

          <Flex
            maxW={{ base: "100%", lg: "800px" }}
            overflow={"hidden"}
            px={layout === "medium" ? 12 : 0}
          >
            <ProjectSwiper
              setCurrentIndex={setCurrentIndex}
              setSwiper={setSwiper}
              swiper={swiper}
            />
          </Flex>

          <Box
            position={"absolute"}
            left={0}
            top={"50%"}
            transform={"translateY(-50%)"}
            ref={arrowLeftRef}
            _hover={{ cursor: currentIndex === 0 ? "default" : "pointer" }}
            opacity={currentIndex === 0 ? 0 : 1}
            transition={"all 0.3s ease"}
            onClick={() => {
              if (!swiper) return;
              swiper.slidePrev();
            }}
            display={{ base: "none", md: "block" }}
          >
            <Icon as={MdKeyboardArrowLeft} fontSize={"60px"} opacity={0.5} />
          </Box>
          <Box
            position={"absolute"}
            right={0}
            top={"50%"}
            transform={"translateY(-50%)"}
            ref={arrowRightRef}
            _hover={{
              cursor: currentIndex === dummy.length - 1 ? "default" : "pointer",
            }}
            opacity={currentIndex === dummy.length - 1 ? 0 : 1}
            transition={"all 0.3s ease"}
            display={{ base: "none", md: "block" }}
            onClick={() => {
              if (!swiper) return;
              swiper.slideNext();
            }}
          >
            <Icon as={MdKeyboardArrowRight} fontSize={"60px"} opacity={0.5} />
          </Box>

          <Flex gap={6}>
            {dummy.map((_, index) => {
              return (
                <Box
                  key={index}
                  w={"10px"}
                  h={"10px"}
                  bgColor={"white"}
                  borderRadius={"50%"}
                  opacity={index === currentIndex ? 1 : 0.3}
                  filter={lightFilter}
                  _hover={{
                    opacity: 0.7,
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                  onClick={() => handleDotClick(index)}
                />
              );
            })}
          </Flex>
        </Flex>
      </CenterLayout>
    </Box>
  );
};

export default Project;
