import { Flex, Heading, Tag, Text } from "@chakra-ui/react";

const AboutText = () => {
  return (
    <Flex
      direction={"column"}
      gap={4}
      maxW={"550px"}
      ml={{ base: "inherit", lg: "auto" }}
    >
      <Flex direction={"column"} gap={2}>
        <Heading size={"lg"}>윤승휘</Heading>
        <Heading size={"md"}>1996.01.05</Heading>
      </Flex>

      <Flex direction={"column"} gap={1}>
        <Text fontWeight={"500"}>
          안녕하세요. <Tag p={1}>끈질긴 개발자 윤승휘</Tag> 입니다.
        </Text>
        <Text>어렸을 때 부터 컴퓨터로 무언가를 만드는 것을 좋아했습니다.</Text>
        <Text>
          대학교에서 컴퓨터공학을 전공하면서 프로그래밍에 대해 본격적으로 배우게
          되면서, 창작의 즐거움을 더 느끼게 되었습니다.
        </Text>
        <Text>
          더 나아가서 다양한 사람들과 프로젝트를 완성해 나가는 과정에 더 큰
          흥미를 느꼈습니다.
        </Text>
        <Text>
          자연스럽게 개발자가 되고 싶다는 꿈을 갖게 되었고, 현재는 그 꿈을
          이루기 위해 프론트엔드 개발자로 성장하고 있습니다.
        </Text>
      </Flex>
      <Flex gap={2}>
        <Tag>#열정</Tag>
        <Tag>#섬세함</Tag>
        <Tag>#ISTP</Tag>
      </Flex>
    </Flex>
  );
};

export default AboutText;
