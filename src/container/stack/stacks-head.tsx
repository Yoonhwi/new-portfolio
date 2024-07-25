import { Flex, Heading } from "@chakra-ui/react";

const StacksHead = () => {
  return (
    <Flex direction={"column"} alignItems={"center"} gap={4}>
      <Heading size={"2xl"} fontWeight={1000}>
        TECH STACK
      </Heading>
      <Heading size={"sm"} opacity={0.8}>
        아이콘에 마우스를 올리면 자세한 설명이 나옵니다.
      </Heading>
    </Flex>
  );
};

export default StacksHead;
