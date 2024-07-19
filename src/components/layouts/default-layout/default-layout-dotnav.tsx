import { Flex, Icon } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { FaCircle } from "react-icons/fa6";
import gsap from "gsap";

const dummyName = ["INTRO", "ABOUT", "PROJECTS", "CONTACT"];

interface DefaultLayoutDotnavProps {
  currentSection: string;
}
const DefaultLayoutDotnav = ({ currentSection }: DefaultLayoutDotnavProps) => {
  const dotNavRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!dotNavRef.current) return;
    const tl = gsap.timeline({
      defaults: { duration: 1, ease: "power3.out" },
      delay: 2.5,
    });
    tl.fromTo(
      dotNavRef.current,
      {
        opacity: 0,
        x: "100%",
      },
      {
        opacity: 1,
        x: "0%",
      }
    );
  }, []);

  return (
    <Flex
      position={"fixed"}
      top={"50%"}
      right={0}
      px={4}
      py={6}
      direction={"column"}
      gap={6}
      backgroundColor={`blackAlpha.200`}
      zIndex={2}
      borderRadius={"4px"}
      transform={"translateY(-50%)"}
      color={"white"}
      ref={dotNavRef}
    >
      {dummyName.map((v) => {
        return (
          <Icon
            as={FaCircle}
            fontSize={"6px"}
            transition="all 0.2s ease"
            transformOrigin="center"
            _hover={{
              cursor: "pointer",
              transform: "scale(2.2)",
            }}
            key={v}
          />
        );
      })}
    </Flex>
  );
};

export default DefaultLayoutDotnav;
