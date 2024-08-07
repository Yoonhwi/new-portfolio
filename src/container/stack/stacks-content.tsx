import { Box, Flex, Text } from "@chakra-ui/react";
import StacksContentItem from "./stacks-content-item";
import { darkBgColor } from "@/constants";

const stacks = [
  {
    name: "Front-end Stacks",
    stacks: [
      {
        imgSrc: "./img/icon_html.png",
        alt: "icon_html",
        title: "html1",
        description:
          "크로스 브라우저 호환성을 고려해, 웹표준을 준수하며 시멘틱태그를 이용해 마크업 할 수 있습니다.",
      },
      {
        imgSrc: "./img/icon_html.png",
        alt: "icon_html",
        title: "html2",
        description:
          "크로스 브라우저 호환성을 고려해, 웹표준을 준수하며 시멘틱태그를 이용해 마크업 할 수 있습니다.",
      },
    ],
  },
  {
    name: "Back-end Stacks",
    stacks: [
      {
        imgSrc: "./img/icon_html.png",
        alt: "icon_html",
        title: "html3",
        description:
          "크로스 브라우저 호환성을 고려해, 웹표준을 준수하며 시멘틱태그를 이용해 마크업 할 수 있습니다.",
      },
      {
        imgSrc: "./img/icon_html.png",
        alt: "icon_html",
        title: "html4",
        description:
          "크로스 브라우저 호환성을 고려해, 웹표준을 준수하며 시멘틱태그를 이용해 마크업 할 수 있습니다.",
      },
    ],
  },
];

const StacksContent = () => {
  return (
    <Flex direction={"column"} gap={20}>
      {stacks.map((item) => {
        return (
          <Flex direction={"column"} gap={8} key={item.name}>
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
