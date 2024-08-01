import { Flex, Tag } from "@chakra-ui/react";

interface RowTagProps {
  tags: string[];
}
const RowTag = ({ tags }: RowTagProps) => {
  return (
    <Flex gap={2}>
      {tags.map((tag) => (
        <Tag key={`tag_${tag}`}>{tag}</Tag>
      ))}
    </Flex>
  );
};

export default RowTag;
