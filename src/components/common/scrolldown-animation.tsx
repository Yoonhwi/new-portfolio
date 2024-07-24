import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";
import gsap from "gsap";

const ScrollDownAnimation = () => {
  const arrowFirstRef = useRef<HTMLDivElement>(null);
  const arrowSecondRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const arrowFirst = arrowFirstRef.current;
    const arrowSecond = arrowSecondRef.current;

    if (!arrowFirst || !arrowSecond) return;

    gsap.set([arrowFirst, arrowSecond], {
      opacity: 0,
      top: "20px",
    });

    const tl = gsap.timeline({ repeat: -1 });

    tl.to(arrowFirst, {
      duration: 2,
      opacity: 1,
      top: "40px",
      ease: "power1.inOut",
      repeat: Infinity,
    });

    tl.to(
      arrowSecond,
      {
        duration: 2,
        opacity: 1,
        top: "40px",
        ease: "power1.inOut",
        repeat: Infinity,
      },
      "-=1"
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <Flex
      position="absolute"
      left={"50%"}
      bottom={"50px"}
      color={"white"}
      h={"50px"}
      direction={"column"}
      alignItems={"center"}
      gap={4}
      opacity={0.8}
      transform="translateX(-50%)"
    >
      <Text fontSize={"12px"}>SCROLL DOWN</Text>

      <Box ref={arrowFirstRef} position="absolute">
        <Icon as={IoIosArrowDown} fontSize={"22px"} />
      </Box>

      <Box ref={arrowSecondRef} position={"absolute"}>
        <Icon as={IoIosArrowDown} fontSize={"22px"} />
      </Box>
    </Flex>
  );
};

export default ScrollDownAnimation;
