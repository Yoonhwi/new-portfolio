import { Flex, Box, Heading, Image, Text } from "@chakra-ui/react";

const StacksContentItem = () => {
  return (
    <Flex
      alignItems={"center"}
      justifyContent={"center"}
      bgColor={"#553E4E"}
      p={3}
      boxShadow={"dark-lg"}
      border={"2px solid #907D87"}
      gap={4}
      _hover={{
        "& > .hidden-content": {
          display: "flex",
        },
      }}
      maxW={"300px"}
      flexShrink={0}
    >
      <Image
        src="./img/icon_html.png"
        w={"50px"}
        h={"50px"}
        alt="icon_html"
        flexShrink={0}
      />
      <Box className="hidden-content" bgColor={"#553E4E"} p={4} display="none">
        <Flex direction={"column"} gap={1}>
          <Heading size={"sm"}>HTML</Heading>
          <Text fontSize={"13px"}>
            크로스 브라우저 호환성을 고려해, 웹표준을 준수하며 시멘틱태그를
            이용해 마크업 할 수 있습니다.
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
};

export default StacksContentItem;
