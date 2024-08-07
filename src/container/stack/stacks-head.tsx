import { Flex, Heading } from "@chakra-ui/react";
import { useTextAnimation } from "@/hooks";

const StacksHead = () => {
  const headRef = useTextAnimation();
  const subRef = useTextAnimation(0.03);

  return (
    <Flex direction={"column"} alignItems={"center"} gap={4}>
      <Heading size={"2xl"} fontWeight={1000} ref={headRef}>
        TECH STACK
      </Heading>
      <Heading size={"sm"} opacity={0.8} ref={subRef}>
        아이콘에 마우스를 올리면 자세한 설명이 나옵니다.
      </Heading>
    </Flex>
  );
};

export default StacksHead;
