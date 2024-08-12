import { darkBgColor } from "@/constants";
import { Flex, Box, Heading, Image, Text, Center } from "@chakra-ui/react";
interface MobileViewStacksItemProps {
  imgSrc: string;
  alt: string;
  title: string;
  description: string;
}

const MobileViewStacksItem = ({
  imgSrc,
  alt,
  title,
  description,
}: MobileViewStacksItemProps) => {
  return (
    <Flex
      bgColor={darkBgColor}
      flexShrink={0}
      h={"162px"}
      position={"relative"}
      alignItems={"center"}
      gap={4}
      boxShadow={"lg"}
    >
      <Center
        p={3}
        flexShrink={0}
        className="img-content"
        overflow={"hidden"}
        zIndex={3}
        position={"relative"}
      >
        <Image src={imgSrc} w={"50px"} h={"50px"} alt={alt} flexShrink={0} />
      </Center>
      <Box className="hidden-content" bgColor={darkBgColor}>
        <Flex direction={"column"} gap={1}>
          <Heading size={"sm"}>{title}</Heading>
          <Text fontSize={"13px"}>{description}</Text>
        </Flex>
      </Box>
    </Flex>
  );
};

export default MobileViewStacksItem;
