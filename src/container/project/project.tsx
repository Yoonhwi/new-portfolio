import { CenterLayout } from "@/components";
import { darkBgColor, lightFilter, parentBoxShadow } from "@/constants";
import {
  useBoxScaleAnimation,
  useCarouselButtons,
  useLayout,
  useSection,
  useTextAnimation,
} from "@/hooks";
import { Box, Flex, Heading, Icon } from "@chakra-ui/react";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import useEmblaCarousel from "embla-carousel-react";
import useCarouselDots from "@/hooks/use-carousel-dots";
import ProjectCarousel from "./project-carousel";

const Project = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = useCarouselButtons(emblaApi);
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useCarouselDots(emblaApi);

  const { isMobile } = useLayout();

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

  return (
    <Flex
      minH={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}
      bgColor={darkBgColor}
      ref={projectRef}
      py={28}
      boxShadow={parentBoxShadow}
      position={"relative"}
      zIndex={1}
      overflow={"hidden"}
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

          {/** embla carousel */}
          <Flex
            maxW={{ base: "100%", lg: "800px" }}
            overflow={"hidden"}
            px={isMobile ? 4 : 0}
          >
            <ProjectCarousel emblaRef={emblaRef} />
          </Flex>

          {/** prev arrow */}
          <Box
            position={"absolute"}
            left={0}
            top={"50%"}
            transform={"translateY(-50%)"}
            ref={arrowLeftRef}
            _hover={{ cursor: selectedIndex === 0 ? "default" : "pointer" }}
            opacity={prevBtnDisabled ? 0 : 1}
            transition={"all 0.3s ease"}
            onClick={() => onPrevButtonClick()}
            display={{ base: "none", lg: "block" }}
          >
            <Icon as={MdKeyboardArrowLeft} fontSize={"60px"} opacity={0.5} />
          </Box>

          {/** next arrow */}
          <Box
            position={"absolute"}
            right={0}
            top={"50%"}
            transform={"translateY(-50%)"}
            ref={arrowRightRef}
            _hover={{
              cursor:
                selectedIndex === scrollSnaps.length - 1
                  ? "default"
                  : "pointer",
            }}
            opacity={nextBtnDisabled ? 0 : 1}
            transition={"all 0.3s ease"}
            display={{ base: "none", lg: "block" }}
            onClick={() => onNextButtonClick()}
          >
            <Icon as={MdKeyboardArrowRight} fontSize={"60px"} opacity={0.5} />
          </Box>

          {/** dots */}
          <Flex gap={6}>
            {scrollSnaps.map((_, index) => {
              return (
                <Box
                  key={index}
                  w={"10px"}
                  h={"10px"}
                  bgColor={"white"}
                  borderRadius={"50%"}
                  opacity={index === selectedIndex ? 1 : 0.3}
                  filter={lightFilter}
                  _hover={{
                    opacity: 0.7,
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                  onClick={() => onDotButtonClick(index)}
                />
              );
            })}
          </Flex>
        </Flex>
      </CenterLayout>
    </Flex>
  );
};

export default Project;
