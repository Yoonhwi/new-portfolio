import { CenterLayout } from "@/components";
import { darkBgColor } from "@/constants";
import { useBoxScaleAnimation, useSection, useTextAnimation } from "@/hooks";
import { Flex, Heading, Text } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { FaBlog } from "react-icons/fa6";
import IconAnimation from "./contact-icon-animation";
import ContactText from "./contact-text";

const Contact = () => {
  const { registerSection } = useSection();
  const scaleRef = useBoxScaleAnimation();
  const headRef = useTextAnimation();

  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = contactRef.current;
    if (!el) return;
    registerSection("CONTACT", el);
  }, [registerSection]);

  return (
    <Flex
      bgColor={darkBgColor}
      color={`white`}
      minH={`100vh`}
      ref={contactRef}
      py={32}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <CenterLayout>
        <Flex
          direction={"column"}
          w={"100%"}
          gap={24}
          color={"white"}
          alignItems={"center"}
          ref={scaleRef}
          py={8}
        >
          <Heading size={"2xl"} ref={headRef}>
            CONTACT
          </Heading>
          <ContactText />
          <Flex gap={12}>
            <IconAnimation
              icon={<FaGithub style={{ fontSize: "2.6rem" }} />}
              label={"Git hub"}
              link={"https://github.com/Yoonhwi"}
            />
            <IconAnimation
              icon={
                <FaBlog
                  style={{
                    fontSize: "2.3rem",
                    padding: "1px",
                    position: "relative",
                    left: "2px",
                  }}
                />
              }
              label={"Blog"}
              link={"https://winhwi.tistory.com/"}
            />
          </Flex>
        </Flex>
      </CenterLayout>
      <Text
        position={"absolute"}
        bottom={16}
        left={"50%"}
        transform={"translateX(-50%)"}
        color={"whiteAlpha.600"}
      >
        Copyright 2024. winhwi all rights reserved.
      </Text>
    </Flex>
  );
};

export default Contact;
