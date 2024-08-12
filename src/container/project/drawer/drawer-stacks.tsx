import { Flex, Text, Tag } from "@chakra-ui/react";

interface StackTagsProps {
  tags: { [key: string]: string[] };
}

const DrawerStacks = ({ tags }: StackTagsProps) => {
  return (
    <Flex gap={2} direction={"column"}>
      {Object.keys(tags).map((key) => {
        return (
          <Flex alignItems={"center"} key={key}>
            <Text minW={"80px"}>{key}</Text>
            <Flex gap={2} wrap={"wrap"}>
              {tags[key].map((stack) => {
                return (
                  <Tag key={stack} p={2} colorScheme="gray">
                    {stack}
                  </Tag>
                );
              })}
            </Flex>
          </Flex>
        );
      })}
    </Flex>
  );
};

export default DrawerStacks;
