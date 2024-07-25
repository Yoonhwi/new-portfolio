import { Box, Flex, Heading } from "@chakra-ui/react";
import StacksContentItem from "./stacks-content-item";

const StacksContent = () => {
  return (
    <Flex direction={"column"} gap={8}>
      <Box
        borderRadius={24}
        border={"2px solid #fff"}
        bgColor={"#553E4E"}
        px={6}
        py={2}
        boxShadow={"dark-lg"}
        width={"fit-content"}
      >
        <Heading size={"sm"}>Front-end Stacks</Heading>
      </Box>
      <Flex gap={8} alignItems={"center"}>
        <StacksContentItem />
        <StacksContentItem />
      </Flex>
    </Flex>
  );
};

export default StacksContent;
