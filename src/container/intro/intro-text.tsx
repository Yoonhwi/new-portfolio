import { Divider, Flex, Heading } from "@chakra-ui/react";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const HomeInfo = () => {
  const feDevRef = useRef(null);
  const nameRef = useRef(null);
  const dividerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 1, ease: "power3.out" },
    });

    tl.fromTo(
      [feDevRef.current, nameRef.current, dividerRef.current],
      { opacity: 0, x: (index) => ["-100%", "100%"][index] },
      { opacity: 1, x: "0%" }
    );
  }, []);

  return (
    <Flex
      position={"relative"}
      zIndex={1}
      justifyContent={"center"}
      alignItems={"center"}
      bgColor={"rgba(0,0,0,0.1)"}
      h={"100%"}
    >
      <Flex direction={"column"} gap={4} alignItems={"center"} minW={"500px"}>
        <Heading color={"white"} size={"3xl"} mr={"auto"} ref={feDevRef}>
          FE-Developer
        </Heading>

        <Divider
          orientation={"horizontal"}
          borderColor={"white"}
          borderWidth={"1px"}
          opacity={1}
          ref={dividerRef}
        />

        <Heading color={"white"} size={"3xl"} ml={"auto"} ref={nameRef}>
          Winhwi
        </Heading>
      </Flex>
    </Flex>
  );
};

export default HomeInfo;
