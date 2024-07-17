import { Divider, Flex, Heading } from "@chakra-ui/react";

const HomeInfo = () => {
  return (
    <Flex
      position={"relative"}
      zIndex={1}
      justifyContent={"center"}
      alignItems={"center"}
      bgColor={"rgba(0,0,0,0.1)"}
      h={"100%"}
    >
      <Flex direction={"column"} gap={4} alignItems={"center"}>
        <Heading color={"white"} size={"3xl"}>
          Front-end Developer
        </Heading>

        <Divider orientation={"horizontal"} borderColor={"white"} />

        <Heading color={"white"} size={"3xl"}>
          Winhiw's Portfolio
        </Heading>
      </Flex>
    </Flex>
  );
};

export default HomeInfo;
