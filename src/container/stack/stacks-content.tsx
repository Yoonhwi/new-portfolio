import { Box, Flex, Heading } from "@chakra-ui/react";
import StacksContentItem from "./stacks-content-item";
import { darkBgColor } from "@/constants";

const StacksContent = () => {
  return (
    <Flex direction={"column"} gap={20}>
      <Flex direction={"column"} gap={12}>
        <Box
          borderRadius={24}
          border={"2px solid #fff"}
          bgColor={darkBgColor}
          px={6}
          py={2}
          boxShadow={"dark-lg"}
          width={"fit-content"}
        >
          <Heading size={"sm"}>Front-end Stacks</Heading>
        </Box>
        <Flex gap={8} alignItems={"center"}>
          <StacksContentItem
            imgSrc={"./img/icon_html.png"}
            alt={"icon_html"}
            title="html"
            description="크로스 브라우저 호환성을 고려해, 웹표준을 준수하며 시멘틱태그를
            이용해 마크업 할 수 있습니다."
          />
          <StacksContentItem
            imgSrc={"./img/icon_html.png"}
            alt={"icon_html"}
            title="html"
            description="크로스 브라우저 호환성을 고려해, 웹표준을 준수하며 시멘틱태그를
            이용해 마크업 할 수 있습니다."
          />
        </Flex>
      </Flex>

      <Flex direction={"column"} gap={8}>
        <Box
          borderRadius={24}
          border={"2px solid #fff"}
          bgColor={darkBgColor}
          px={6}
          py={2}
          boxShadow={"dark-lg"}
          width={"fit-content"}
        >
          <Heading size={"sm"}>Back-end Stacks</Heading>
        </Box>
        <Flex gap={8} alignItems={"center"}>
          <StacksContentItem
            imgSrc={"./img/icon_html.png"}
            alt={"icon_html"}
            title="html"
            description="크로스 브라우저 호환성을 고려해, 웹표준을 준수하며 시멘틱태그를
            이용해 마크업 할 수 있습니다."
          />
          <StacksContentItem
            imgSrc={"./img/icon_html.png"}
            alt={"icon_html"}
            title="html"
            description="크로스 브라우저 호환성을 고려해, 웹표준을 준수하며 시멘틱태그를
            이용해 마크업 할 수 있습니다."
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default StacksContent;
