import { darkBgColor } from "@/constants";
import { Flex, Box, Heading, Image, Text } from "@chakra-ui/react";

interface StacksContentItemProps {
  imgSrc: string;
  alt: string;
  title: string;
  description: string;
}

const StacksContentItem = ({
  imgSrc,
  alt,
  title,
  description,
}: StacksContentItemProps) => {
  return (
    <Flex
      alignItems={"center"}
      justifyContent={"center"}
      bgColor={darkBgColor}
      p={3}
      boxShadow={"dark-lg"}
      border={"2px solid #fff"}
      gap={4}
      _hover={{
        "& > .hidden-content": {
          display: "flex",
        },
      }}
      maxW={"300px"}
      flexShrink={0}
    >
      <Image src={imgSrc} w={"50px"} h={"50px"} alt={alt} flexShrink={0} />
      <Box
        className="hidden-content"
        bgColor={darkBgColor}
        p={4}
        display="none"
      >
        <Flex direction={"column"} gap={1}>
          <Heading size={"sm"}>{title}</Heading>
          <Text fontSize={"13px"}>{description}</Text>
        </Flex>
      </Box>
    </Flex>
  );
};

export default StacksContentItem;
