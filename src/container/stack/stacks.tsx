import { CenterLayout } from "@/components";
import { useSection } from "@/hooks";
import { Box, Flex } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import StacksHead from "./stacks-head";
import StacksContent from "./stacks-content";

const Stacks = () => {
  const stacksRef = useRef<HTMLDivElement>(null);
  const { registerSection } = useSection();

  useEffect(() => {
    const el = stacksRef.current;
    if (!el) return;
    registerSection("STACKS", el);
  }, [registerSection]);

  return (
    <Box
      minH={"100vh"}
      bgColor={"#6B515F"}
      ref={stacksRef}
      opacity={0.9}
      py={32}
    >
      <CenterLayout>
        <Flex direction={"column"} w={"100%"} gap={20} color={"white"}>
          <StacksHead />
          <StacksContent />
        </Flex>
      </CenterLayout>
    </Box>
  );
};

export default Stacks;
