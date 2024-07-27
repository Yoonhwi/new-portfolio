import { SectionName } from "@/constants";
import { useSection } from "@/hooks";
import { Flex, Icon } from "@chakra-ui/react";
import gsap from "gsap";
import { useCallback, useEffect, useMemo, useRef } from "react";
import { FaCircle } from "react-icons/fa6";

const dummyName: SectionName[] = ["INTRO", "ABOUT", "PROJECTS", "CONTACT"];

const DefaultLayoutDotnav = () => {
  const { currentSection, scrollToSection } = useSection();

  const dotNavRef = useRef<HTMLDivElement>(null);

  const backgroundColor = useMemo(() => {
    return currentSection === "ABOUT" || currentSection === "CONTACT"
      ? "blackAlpha.200"
      : "whiteAlpha.100";
  }, [currentSection]);

  const getDotColor = useCallback(
    (isCurrent: boolean) => {
      if (currentSection === "ABOUT" || currentSection === "CONTACT") {
        return isCurrent ? "white" : "blackAlpha.300";
      }
      return isCurrent ? "white" : "blackAlpha.300";
    },
    [currentSection]
  );

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
      backgroundColor={backgroundColor}
      zIndex={3}
      borderRadius={"4px"}
      transform={"translateY(-50%)"}
      color={"white"}
      ref={dotNavRef}
      transition={"all 0.2s ease"}
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
            onClick={() => scrollToSection(v)}
            color={
              v === currentSection ? getDotColor(true) : getDotColor(false)
            }
          />
        );
      })}
    </Flex>
  );
};

export default DefaultLayoutDotnav;
