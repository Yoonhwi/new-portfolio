import { Box, Flex, Text } from "@chakra-ui/react";
import StacksContentItem from "./stacks-content-item";
import { darkBgColor, stacks } from "@/constants";

const StacksContent = () => {
  return (
    <Flex direction={"column"} gap={20}>
      {stacks.map((item) => {
        return (
          <Flex direction={"column"} gap={4} key={item.name}>
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
            <Flex gap={8} alignItems={"center"}>
              {item.stacks.map((stack) => (
                <StacksContentItem
                  key={stack.title}
                  imgSrc={stack.imgSrc}
                  alt={stack.alt}
                  title={stack.title}
                  description={stack.description}
                />
              ))}
            </Flex>
          </Flex>
        );
      })}
    </Flex>
  );
};

export default StacksContent;
