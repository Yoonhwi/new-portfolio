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
            <Text flex={1}>{key}</Text>
            <Flex flex={7} gap={2}>
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
