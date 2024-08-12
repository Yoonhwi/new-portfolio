import { Box, Flex, Text } from "@chakra-ui/react";
import { darkBgColor, stacks } from "@/constants";
import { WideViewStacksBox } from "./pc-view";
import { useBoxScaleAnimation, useLayout } from "@/hooks";
import { MobileViewStacksBox } from "./mobile-view";

const StacksContent = () => {
  const scaleRef = useBoxScaleAnimation();

  const { isMobile } = useLayout();
  return (
    <Flex direction={"column"} gap={12} p={8} ref={scaleRef}>
      {stacks.map((item) => {
        return (
          <Flex direction={"column"} gap={4} key={item.name} flex={1}>
            <Box
              borderRadius={24}
              border={"2px solid rgb(40, 40, 40)"}
              bgColor={darkBgColor}
              px={6}
              py={2}
              width={"fit-content"}
            >
              <Text>{item.name}</Text>
            </Box>
            {isMobile ? (
              <MobileViewStacksBox stacks={item.stacks} />
            ) : (
              <WideViewStacksBox stacks={item.stacks} />
            )}
          </Flex>
        );
      })}
    </Flex>
  );
};

export default StacksContent;
