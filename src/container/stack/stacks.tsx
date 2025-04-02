import { CenterLayout } from "@/components";
import { useSection } from "@/hooks";
import { Flex } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import StacksHead from "./stacks-head";
import StacksContent from "./stacks-content";
import { darkBgColor, parentBoxShadow } from "@/constants";

const Stacks = () => {
  const stacksRef = useRef<HTMLDivElement>(null);
  const { registerSection } = useSection();

  useEffect(() => {
    const el = stacksRef.current;
    if (!el) return;
    registerSection("STACKS", el);
  }, [registerSection]);

  return (
    <Flex
      minH={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}
      bgColor={darkBgColor}
      ref={stacksRef}
      py={20}
      boxShadow={parentBoxShadow}
      position={"relative"}
      zIndex={2}
    >
      <CenterLayout>
        <Flex direction={"column"} w={"100%"} gap={20} color={"white"}>
          <StacksHead />
          <StacksContent />
        </Flex>
      </CenterLayout>
    </Flex>
  );
};

export default Stacks;
