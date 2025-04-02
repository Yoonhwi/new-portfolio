import { Flex, Tag } from "@chakra-ui/react";

interface RowTagProps {
  tags: string[];
}
const RowTag = ({ tags }: RowTagProps) => {
  return (
    <Flex gap={2} flexWrap={"wrap"}>
      {tags.map((tag) => (
        <Tag key={`tag_${tag}`} whiteSpace={"nowrap"}>
          {tag}
        </Tag>
      ))}
    </Flex>
  );
};

export default RowTag;
